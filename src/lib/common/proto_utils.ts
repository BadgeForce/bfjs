import {Value} from "google-protobuf/google/protobuf/struct_pb";

export const extractValueType = (value: Value) => {
  switch (value.getKindCase()) {
    case Value.KindCase.BOOL_VALUE:
      return value.getBoolValue();
    case Value.KindCase.LIST_VALUE:
      return value.getListValue()
        .getValuesList()
        .map(v => v.toJavaScript().toString());
    case Value.KindCase.NULL_VALUE:
      return value.getNullValue();
    case Value.KindCase.NUMBER_VALUE:
      return value.getNumberValue();
    case Value.KindCase.STRING_VALUE:
      return value.getStringValue();
    case Value.KindCase.STRUCT_VALUE:
      return value.getStructValue().toJavaScript();
    case Value.KindCase.KIND_NOT_SET:
      return value.toJavaScript().toString();
    default:
      return value.toJavaScript().toString();
  }
};
