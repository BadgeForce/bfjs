"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const common_1 = require("../common");
exports.FAMILY_NAME = 'credential-templates';
exports.FAMILY_VERSION = '1.0';
exports.PREFIX = crypto_1.createHash('sha512')
    .update('credential:templates')
    .digest('hex')
    .substring(0, 6);
exports.getTemplateAddress = (owner, name, version) => {
    return new common_1.AddressBuilder(exports.PREFIX)
        .append(owner, 0, 30)
        .append(name, 0, 30)
        .append(version, 0, 4)
        .build();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jcmVkZW50aWFsX3RlbXBsYXRlcy9uYW1lc3BhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBb0M7QUFDcEMsc0NBQTJDO0FBRTlCLFFBQUEsV0FBVyxHQUFXLHNCQUFzQixDQUFDO0FBQzdDLFFBQUEsY0FBYyxHQUFXLEtBQUssQ0FBQztBQUUvQixRQUFBLE1BQU0sR0FBVyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztLQUM3QyxNQUFNLENBQUMsc0JBQXNCLENBQUM7S0FDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNiLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFUixRQUFBLGtCQUFrQixHQUFHLENBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxPQUFlLEVBQVUsRUFBRTtJQUN2RixPQUFPLElBQUksdUJBQWMsQ0FBQyxjQUFNLENBQUM7U0FDNUIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUNuQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckIsS0FBSyxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDIn0=