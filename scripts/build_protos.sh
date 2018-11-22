#!/bin/bash

CURRENT_DIR=${1}
PROTOS_PATH="${CURRENT_DIR}/protos"
PROTOC_GEN_TS_PATH="${CURRENT_DIR}/node_modules/.bin/protoc-gen-ts"

TEMPLATES_PAYLOAD="${PROTOS_PATH}/templates_payload.proto"
CREDENTIALS_PAYLOAD="${PROTOS_PATH}/credentials.proto"
CREDENTIALS="${PROTOS_PATH}/credentials_payload.proto"
BF_OUT="${CURRENT_DIR}/src/generated"

TEMP_DIR="${CURRENT_DIR}/temp"
SAWTOOTH_OUT="${CURRENT_DIR}/src/sawtooth-sdk-ts"
SAWTOOTH_PROTOS_URL="https://github.com/hyperledger/sawtooth-sdk-javascript.git"
SAWTOOTH_PROTOS="./sawtooth-sdk-javascript/protos"

protoc  \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${BF_OUT}" \
    -I "${PROTOS_PATH}" \
    "${TEMPLATES_PAYLOAD}" \
    "${CREDENTIALS_PAYLOAD}" \
    "${CREDENTIALS}" \
    --ts_out="${BF_OUT}"

git clone "${SAWTOOTH_PROTOS_URL}"
sawtoothProtoFiles=$(ls ${SAWTOOTH_PROTOS})

for filename in ${SAWTOOTH_PROTOS}/*.proto; do    
    protoc  \
        --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
        --js_out="import_style=commonjs,binary:${SAWTOOTH_OUT}" \
        -I "${SAWTOOTH_PROTOS}" \
        "${filename##*/}" \
        --ts_out="${SAWTOOTH_OUT}"
done

rm -rf ./sawtooth-sdk-javascript
echo "generated protos:" $(ls ${PROTOS_PATH})
echo "BadgeForce protos output directory: ${BF_OUT}"
echo "BadgeForce protos output files:" $(ls ${BF_OUT})
echo "Sawtooth protos output directory: ${SAWTOOTH_OUT}"
echo "Sawtooth protos output files:" $(ls ${SAWTOOTH_OUT})