"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const struct_pb_1 = require("google-protobuf/google/protobuf/struct_pb");
exports.extractValueType = (value) => {
    switch (value.getKindCase()) {
        case struct_pb_1.Value.KindCase.BOOL_VALUE:
            return value.getBoolValue();
        case struct_pb_1.Value.KindCase.LIST_VALUE:
            return value.getListValue()
                .getValuesList()
                .map(v => v.toJavaScript().toString());
        case struct_pb_1.Value.KindCase.NULL_VALUE:
            return value.getNullValue();
        case struct_pb_1.Value.KindCase.NUMBER_VALUE:
            return value.getNumberValue();
        case struct_pb_1.Value.KindCase.STRING_VALUE:
            return value.getStringValue();
        case struct_pb_1.Value.KindCase.STRUCT_VALUE:
            return value.getStructValue().toJavaScript();
        case struct_pb_1.Value.KindCase.KIND_NOT_SET:
            return value.toJavaScript().toString();
        default:
            return value.toJavaScript().toString();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdG9fdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbW1vbi9wcm90b191dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlFQUFnRTtBQUVuRCxRQUFBLGdCQUFnQixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDL0MsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDM0IsS0FBSyxpQkFBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVO1lBQzVCLE9BQU8sS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlCLEtBQUssaUJBQUssQ0FBQyxRQUFRLENBQUMsVUFBVTtZQUM1QixPQUFPLEtBQUssQ0FBQyxZQUFZLEVBQUU7aUJBQ3hCLGFBQWEsRUFBRTtpQkFDZixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzQyxLQUFLLGlCQUFLLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDNUIsT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUIsS0FBSyxpQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQzlCLE9BQU8sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLEtBQUssaUJBQUssQ0FBQyxRQUFRLENBQUMsWUFBWTtZQUM5QixPQUFPLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNoQyxLQUFLLGlCQUFLLENBQUMsUUFBUSxDQUFDLFlBQVk7WUFDOUIsT0FBTyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0MsS0FBSyxpQkFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQzlCLE9BQU8sS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDO1lBQ0UsT0FBTyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDMUM7QUFDSCxDQUFDLENBQUMifQ==