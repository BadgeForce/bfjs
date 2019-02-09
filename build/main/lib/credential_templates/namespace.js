"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const common_1 = require("../common");
exports.FAMILY_NAME = 'credential-templates';
exports.FAMILY_VERSION = '1.0';
exports.TEMPLATES_PREFIX = crypto_1.createHash('sha512')
    .update('credential:templates')
    .digest('hex')
    .substring(0, 6);
exports.getTemplateAddress = (owner, name, version) => {
    const semantic_version = `${version.getMajor()}.${version.getMinor()}.${version.getPatch()}`;
    return new common_1.AddressBuilder(exports.TEMPLATES_PREFIX)
        .append(owner, 0, 30)
        .append(name, 0, 30)
        .append(semantic_version, 0, 4)
        .build();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jcmVkZW50aWFsX3RlbXBsYXRlcy9uYW1lc3BhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBb0M7QUFDcEMsc0NBQTJDO0FBRzlCLFFBQUEsV0FBVyxHQUFXLHNCQUFzQixDQUFDO0FBQzdDLFFBQUEsY0FBYyxHQUFXLEtBQUssQ0FBQztBQUUvQixRQUFBLGdCQUFnQixHQUFXLG1CQUFVLENBQUMsUUFBUSxDQUFDO0tBQ3ZELE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztLQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2IsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVSLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLE9BQWdCLEVBQVUsRUFBRTtJQUN4RixNQUFNLGdCQUFnQixHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztJQUM3RixPQUFPLElBQUksdUJBQWMsQ0FBQyx3QkFBZ0IsQ0FBQztTQUN0QyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDcEIsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ25CLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlCLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsQ0FBQyJ9