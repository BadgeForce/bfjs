const {createContext, CryptoFactory} = require('sawtooth-sdk/signing');
const {Secp256k1PrivateKey, Secp256k1PublicKey} = require('sawtooth-sdk/signing/secp256k1');
const {createHash} = require('crypto');
const {protobuf} = require('sawtooth-sdk');
const request = require('request');
const colors = require('colors');
const proto = require('google-protobuf');
const any = require('google-protobuf/google/protobuf/any_pb.js');
const payloads_pb = require('./verifiable-credentials-proto/payload_pb');
const credentials_pb = require('./verifiable-credentials-proto/credentials_pb');
const context = createContext('secp256k1');
const opn = require('opn');
const axios = require('axios');
const prettyjson = require('prettyjson');
const {privateKey} = require('../config');
const moment = require('moment');
const pk = Buffer.from(privateKey, 'hex');
const priv = new Secp256k1PrivateKey(pk);
const signer = new CryptoFactory(context).newSigner(priv);

const CONFIG = {
    credentials: {
        familyName: "verifiable-credentials",
        familyVersion: "1.0",
        namespaces: {
            prefixes: {
                "credentials": createHash('sha512').update("credential:verifiable:credential").digest('hex').substring(0, 6),
            },
            credentialAddress(recipient, issuer, name) {
                const prefix = this.prefixes.credentials;
                const o = createHash('sha512').update(recipient).digest('hex').substring(0, 25);
                const n = createHash('sha512').update(issuer).digest('hex').substring(0, 25);
                const v = createHash('sha512').update(name).digest('hex').toLowerCase().substring(0, 14);
                return `${prefix}${o}${n}${v}`
            },
        }
    }
};

const newRPCRequest = (params, method) => {
    const payload = new payloads_pb.RPCRequest();
    payload.setMethod(method);
    payload.setParams(params);
    return payload;
};

const newCredential = (name, issuer, recipient, expiration) => {
    const credential = new credentials_pb.Credential();
    credential.setName(name);
    credential.setRecipientPublicKey(recipient);
    credential.setIssuerPublicKey(issuer);
    credential.setExpiration(new Date(expiration).getTime());
    return credential
};

const computeIntegrityHash = (data) => {
    return createHash('md5').update(data).digest("hex");
};

const getSignature = (signer, hash) => {
    return signer.sign(Buffer.from(hash));
};

const getTemplate = (owner, name, version) => {
    const template = new credentials_pb.Template();
    template.setOwner(owner);
    template.setName(name);
    template.setVersion(version);
    return template;
};

const issue = async (credentialFileName, expiration) => {
    const name = "Test Credential";
    const issuer_public_key = signer.getPublicKey().asHex();
    const recipient_public_key = signer.getPublicKey().asHex();
    const revokation_status = false;
    const data = JSON.stringify(require(`../credentials/${credentialFileName}`));
    const hash = computeIntegrityHash(data);
    const signature = getSignature(signer, hash);
    const template = getTemplate(issuer_public_key, "Test Template", "v1");

    const credential = newCredential(name, issuer_public_key, recipient_public_key, expiration);
    credential.setRevokationStatus(revokation_status);
    credential.setSignature(signature);
    // credential.setTemplate(template);

    const credentialBytes = credential.serializeBinary();
    const credentialBytesEncoded = Buffer.from(credentialBytes).toString('hex');
    const request = newRPCRequest(JSON.stringify({
        credential_data: data,
        credential_pb: credentialBytesEncoded
    }), payloads_pb.Method.ISSUE);
    const requestBytes = request.serializeBinary();

    //compute state address
    const stateAddress = CONFIG.credentials.namespaces.credentialAddress(recipient_public_key, issuer_public_key, name);
    console.log(colors.blue(`state-address: ${stateAddress}`));

    // do the sawtooth thang ;)
    const transactionHeaderBytes = protobuf.TransactionHeader.encode({
        familyName: CONFIG.credentials.familyName,
        familyVersion: CONFIG.credentials.familyVersion,
        inputs: [stateAddress],
        outputs: [stateAddress],
        signerPublicKey: signer.getPublicKey().asHex(),
        // In this example, we're signing the batch with the same private key,
        // but the batch can be signed by another party, in which case, the
        // public key will need to be associated with that key.
        batcherPublicKey: signer.getPublicKey().asHex(),
        // In this example, there are no dependencies.  This list should include
        // an previous transaction header signatures that must be applied for
        // this transaction to successfully commit.
        // For example,
        // dependencies: ['540a6803971d1880ec73a96cb97815a95d374cbad5d865925e5aa0432fcf1931539afe10310c122c5eaae15df61236079abbf4f258889359c4d175516934484a'],
        dependencies: [],
        payloadSha512: createHash('sha512').update(requestBytes).digest('hex')
    }).finish();

    console.log(colors.yellow(`state addresses: ${stateAddress}`));
    return await submitTransaction(transactionHeaderBytes, requestBytes);
};

const revoke = async (addresses) => {
    console.log(addresses);
    const request = newRPCRequest(JSON.stringify({addresses: addresses}), payloads_pb.Method.REVOKE);
    const requestBytes = request.serializeBinary();

    // do the sawtooth thang ;)
    const transactionHeaderBytes = protobuf.TransactionHeader.encode({
        familyName: CONFIG.credentials.familyName,
        familyVersion: CONFIG.credentials.familyVersion,
        inputs: addresses,
        outputs: addresses,
        signerPublicKey: signer.getPublicKey().asHex(),
        // In this example, we're signing the batch with the same private key,
        // but the batch can be signed by another party, in which case, the
        // public key will need to be associated with that key.
        batcherPublicKey: signer.getPublicKey().asHex(),
        // In this example, there are no dependencies.  This list should include
        // an previous transaction header signatures that must be applied for
        // this transaction to successfully commit.
        // For example,
        // dependencies: ['540a6803971d1880ec73a96cb97815a95d374cbad5d865925e5aa0432fcf1931539afe10310c122c5eaae15df61236079abbf4f258889359c4d175516934484a'],
        dependencies: [],
        payloadSha512: createHash('sha512').update(requestBytes).digest('hex')
    }).finish();

    console.log(colors.yellow(`state addresses: ${addresses}`));
    return await submitTransaction(transactionHeaderBytes, requestBytes);
};


const submitTransaction = async (transactionHeaderBytes, requestBytes) => {
    try {
        const signature = signer.sign(transactionHeaderBytes);

        const transaction = protobuf.Transaction.create({
            header: transactionHeaderBytes,
            headerSignature: signature,
            payload: requestBytes
        });

        const transactions = [transaction];

        const batchHeaderBytes = protobuf.BatchHeader.encode({
            signerPublicKey: signer.getPublicKey().asHex(),
            transactionIds: transactions.map((txn) => txn.headerSignature),
        }).finish();

        const signature1 = signer.sign(batchHeaderBytes);

        const batch = protobuf.Batch.create({
            header: batchHeaderBytes,
            headerSignature: signature1,
            transactions: transactions
        });

        const batchListBytes = protobuf.BatchList.encode({
            batches: [batch]
        }).finish();

        const reqConfig = {
            method: 'POST',
            url: 'http://127.0.0.1:8008/batches',
            data: batchListBytes,
            headers: {'Content-Type': 'application/octet-stream'}
        };

        const response = await  axios(reqConfig);

        const link = response.data.link;
        console.log(colors.green(`transaction submitted successfully`));
        console.log(colors.green(`status: ${link}`));
        opn(link);
        process.exit(0);
    } catch (e) {
        throw e;
    }
};

const displayCredential = async (entry) => {
    try {
        const data = new Uint8Array(Buffer.from(entry.data, 'base64'));
        const credential = new credentials_pb.Credential.deserializeBinary(data);
        const ipfsData = await ipfsQuery(credential.getStorageHash());
        const credentialData = Buffer.from(ipfsData.data, 'base64').toString();
        const output = {
            'state-address': entry.address,
            'credential': credential.toObject(),
            'human-readable-expiration': moment(credential.getExpiration() * 1000).format('L'),
            'ipfs-storage': {
                'data': JSON.parse(credentialData),
                'file-name': ipfsData['file_name'],
                'recipient': ipfsData['recipient']
            }
        };
        console.log(prettyjson.render(output));
    } catch (e) {
        throw e;
    }
};

const ipfsQuery = async (hash) => {
    try {
        const reqConfig = {
            method: 'GET',
            url: `http://127.0.0.1:8080/ipfs/${hash}`,
            headers: {'Content-Type': 'application/json'}
        };

        const response = await  axios(reqConfig);
        return response.data;
    } catch (e) {
        throw e;
    }
};

const asyncForEach = async(array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
};

const queryState = async (address) => {
    try {
        const reqConfig = {
            method: 'GET',
            url: `http://127.0.0.1:8008/state?address=${address}`,
            headers: {'Content-Type': 'application/json'}
        };

        const response = await  axios(reqConfig);
        const data = response.data.data;
        await asyncForEach(data, async entry => {
            await displayCredential(entry)
        });

        process.exit(0);
    } catch (e) {
        throw e;
    }
};

module.exports = {
    issue,
    revoke,
    queryState
};
