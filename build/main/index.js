"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const client = __importStar(require("./lib/client"));
const utils = __importStar(require("./lib/common"));
const credentials = __importStar(require("./lib/verifiable_credentials"));
const templates = __importStar(require("./lib/credential_templates"));
const CredentialsPayload_pb = __importStar(require("./lib/generated/credentials_payload_pb"));
const TemplatesPayload_pb = __importStar(require("./lib/generated/templates_payload_pb"));
const Credentials_pb = __importStar(require("./lib/generated/credentials_pb"));
var badgeforcejs;
(function (badgeforcejs) {
    badgeforcejs.Config = client.Config;
    badgeforcejs.Client = client.Client;
    badgeforcejs.Signer = utils.Secp256k1Signer;
    badgeforcejs.AddressBuilder = utils.AddressBuilder;
    badgeforcejs.Credentials = credentials;
    badgeforcejs.Templates = templates;
    badgeforcejs.Protos = {
        CredentialsPayload_pb,
        TemplatesPayload_pb,
        Credentials_pb
    };
})(badgeforcejs = exports.badgeforcejs || (exports.badgeforcejs = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscURBQXVDO0FBQ3ZDLG9EQUFzQztBQUN0QywwRUFBNEQ7QUFDNUQsc0VBQXdEO0FBRXhELDhGQUFnRjtBQUNoRiwwRkFBNEU7QUFDNUUsK0VBQWlFO0FBRWpFLElBQWMsWUFBWSxDQWF6QjtBQWJELFdBQWMsWUFBWTtJQUNULG1CQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN2QixtQkFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDdkIsbUJBQU0sR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQy9CLDJCQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUN0Qyx3QkFBVyxHQUFHLFdBQVcsQ0FBQztJQUMxQixzQkFBUyxHQUFHLFNBQVMsQ0FBQztJQUV0QixtQkFBTSxHQUFHO1FBQ2xCLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsY0FBYztLQUNqQixDQUFDO0FBQ04sQ0FBQyxFQWJhLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBYXpCIn0=