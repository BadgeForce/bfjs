"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const common_1 = require("../common");
exports.FAMILY_NAME = 'verifiable-credentials';
exports.FAMILY_VERSION = '1.0';
exports.PREFIX = crypto_1.createHash('sha512')
    .update('credential:verifiable:credential')
    .digest('hex')
    .substring(0, 6);
exports.getCredentialAddress = (recipient, issuer, name) => {
    return new common_1.AddressBuilder(exports.PREFIX)
        .append(recipient, 0, 25)
        .append(issuer, 0, 25)
        .append(name, 0, 14)
        .build();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi92ZXJpZmlhYmxlX2NyZWRlbnRpYWxzL25hbWVzcGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFvQztBQUNwQyxzQ0FBMkM7QUFFOUIsUUFBQSxXQUFXLEdBQVksd0JBQXdCLENBQUM7QUFDaEQsUUFBQSxjQUFjLEdBQVksS0FBSyxDQUFDO0FBRWhDLFFBQUEsTUFBTSxHQUFZLG1CQUFVLENBQUMsUUFBUSxDQUFDO0tBQzlDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQztLQUMxQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVSLFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxTQUFrQixFQUFFLE1BQWUsRUFBRSxJQUFhLEVBQVcsRUFBRTtJQUNsRyxPQUFPLElBQUksdUJBQWMsQ0FBQyxjQUFNLENBQUM7U0FDMUIsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3hCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUNyQixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDbkIsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDIn0=