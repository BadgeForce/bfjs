#!/bin/bash

function get_files_fp () {
    find "${1}" -type f | tr "\n" " "
}

function get_files () {
    find "${1}" -type f -exec basename {} \; | tr "\n" " "
}

CURRENT_DIR=${1}
PROTOS_PATH="${CURRENT_DIR}/protos"
PROTOC_GEN_TS_PATH="${CURRENT_DIR}/node_modules/.bin/protoc-gen-ts"

TEMPLATES_PROTO_DIR=${PROTOS_PATH}/credential_templates

CREDENTIALS_PAYLOAD="${PROTOS_PATH}/credentials.proto"
CREDENTIALS="${PROTOS_PATH}/credentials_payload.proto"

BF_OUT="${CURRENT_DIR}/src/lib/generated"

SAWTOOTH_OUT="${CURRENT_DIR}/src/lib/sawtooth-sdk-ts"
SAWTOOTH_PROTO_URL="https://github.com/hyperledger/sawtooth-sdk-javascript.git"
SAWTOOTH_PROTO_DIR="./sawtooth-sdk-javascript/protos"

function build_proto_file () {
    protoc  \
        --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
        --js_out="import_style=commonjs,binary:${1}" \
        -I "${2}" \
        "${3}" \
        --ts_out="${1}"
}

function build_credential_protos () {
    build_proto_file "${BF_OUT}" "${PROTOS_PATH}" "${CREDENTIALS_PAYLOAD}"
    build_proto_file "${BF_OUT}" "${PROTOS_PATH}" "${CREDENTIALS}"
}

function build_template_protos () {
    for filename in $(get_files "${TEMPLATES_PROTO_DIR}"); do    
        build_proto_file "${BF_OUT}/credential-templates" "${TEMPLATES_PROTO_DIR}" "${filename}"
    done
}

function build_sawtooth_protos () {
    git clone "${SAWTOOTH_PROTO_URL}"

    for filename in $(get_files "${SAWTOOTH_PROTO_DIR}"); do    
        build_proto_file "${SAWTOOTH_OUT}" "${SAWTOOTH_PROTO_DIR}" "${filename}"
    done

    rm -rf ./sawtooth-sdk-javascript
}

build_credential_protos
build_template_protos
build_sawtooth_protos

printf "\n\nverifiable credential proto directory: %s \n" "${BF_OUT}"
printf "verifiable credential proto files: %s \n\n" "$(get_files "${BF_OUT}")"

printf "credential template protos output directory: %s/credential-templates \n" "${BF_OUT}"
printf "credential template proto files: %s \n\n" "$(get_files "${BF_OUT}"/credential-templates)"

printf "sawtooth protos proto directory: %s \n" "${SAWTOOTH_OUT}"
printf "sawtooth protos proto files: %s" "$(get_files "${SAWTOOTH_OUT}")"