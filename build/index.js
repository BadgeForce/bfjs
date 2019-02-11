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
const verifier = __importStar(require("./lib/verifier"));
const Credentials_pb = __importStar(require("./lib/generated/credentials_pb"));
const CredentialsPayload_pb = __importStar(require("./lib/generated/credentials_payload_pb"));
const Template_pb = __importStar(require("./lib/generated/credential-templates/template_pb"));
const TemplatePayload_pb = __importStar(require("./lib/generated/credential-templates/payload_pb"));
const TemplatesTransactionRecpts_pb = __importStar(require("./lib/generated/credential-templates/transaction_receipts_pb"));
var badgeforcejs;
(function (badgeforcejs) {
    badgeforcejs.Config = client.Config;
    badgeforcejs.Client = client.Client;
    badgeforcejs.Signer = utils.Secp256k1Signer;
    badgeforcejs.AddressBuilder = utils.AddressBuilder;
    badgeforcejs.Credentials = credentials;
    badgeforcejs.Templates = templates;
    badgeforcejs.Verifier = verifier;
    badgeforcejs.Protos = {
        CredentialsPayload_pb,
        Credentials_pb,
        CredentialTemplates: { Template_pb, TemplatePayload_pb, TemplatesTransactionRecpts_pb }
    };
})(badgeforcejs = exports.badgeforcejs || (exports.badgeforcejs = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscURBQXVDO0FBQ3ZDLG9EQUFzQztBQUN0QywwRUFBNEQ7QUFDNUQsc0VBQXdEO0FBQ3hELHlEQUEyQztBQUUzQywrRUFBaUU7QUFDakUsOEZBQWdGO0FBRWhGLDhGQUFnRjtBQUNoRixvR0FBc0Y7QUFDdEYsNEhBQThHO0FBRTlHLElBQWMsWUFBWSxDQWN6QjtBQWRELFdBQWMsWUFBWTtJQUNULG1CQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN2QixtQkFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDdkIsbUJBQU0sR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQy9CLDJCQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUN0Qyx3QkFBVyxHQUFHLFdBQVcsQ0FBQztJQUMxQixzQkFBUyxHQUFHLFNBQVMsQ0FBQztJQUN0QixxQkFBUSxHQUFHLFFBQVEsQ0FBQztJQUVwQixtQkFBTSxHQUFHO1FBQ2xCLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsbUJBQW1CLEVBQUUsRUFBQyxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsNkJBQTZCLEVBQUM7S0FDeEYsQ0FBQztBQUNOLENBQUMsRUFkYSxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWN6QiJ9