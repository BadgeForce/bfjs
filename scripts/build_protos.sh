#!/bin/bash

CURRENT_DIR=${1}
PROTOS_PATH="${CURRENT_DIR}/protos"
PROTOC_GEN_TS_PATH="${CURRENT_DIR}/node_modules/.bin/protoc-gen-ts"
OUT="${CURRENT_DIR}/src/generated"

TEMPLATES_PAYLOAD="${PROTOS_PATH}/templates_payload.proto"
CREDENTIALS_PAYLOAD="${PROTOS_PATH}/credentials.proto"
CREDENTIALS="${PROTOS_PATH}/credentials_payload.proto"

protoc  \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT}" \
    -I "${PROTOS_PATH}" \
    "${TEMPLATES_PAYLOAD}" \
    "${CREDENTIALS_PAYLOAD}" \
    "${CREDENTIALS}" \
    --ts_out="${OUT}"

echo "generated protos:" $(ls ${PROTOS_PATH})
echo "output directory: ${OUT}"
echo "output files:" $(ls ${OUT})