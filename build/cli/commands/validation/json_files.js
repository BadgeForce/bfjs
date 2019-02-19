const errors = require("../errors");
const { badgeforcejs } = require('../../../index');
const cache = require('memory-cache');
const Reader = new badgeforcejs.JSONFileReader();
const Validator = new badgeforcejs.JSONValidator();
const validateTemplate = function (args) {
    const { template_json_path } = args;
    try {
        const templateToCreate = Reader.readJSON(template_json_path);
        const { valid, errors } = Validator.isValidJSON(Validator.schemas.templates, templateToCreate);
        if (valid) {
            if (!templateToCreate["coreData"]) {
                templateToCreate["coreData"] = {};
            }
            cache.put('templateToCreate', templateToCreate);
            return true;
        }
        else {
            return `template data invalid: ${errors}`;
        }
    }
    catch (e) {
        return errors.toError(`error reading file ${template_json_path}: ${e}`);
    }
};
module.exports = {
    validateTemplate
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbl9maWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGkvY29tbWFuZHMvdmFsaWRhdGlvbi9qc29uX2ZpbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFbkQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXRDLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ2pELE1BQU0sU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBRW5ELE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxJQUFJO0lBQ3JDLE1BQU0sRUFBQyxrQkFBa0IsRUFBQyxHQUFHLElBQUksQ0FBQztJQUVsQyxJQUFJO1FBQ0YsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0QsTUFBTSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDN0YsSUFBRyxLQUFLLEVBQUU7WUFDUixJQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2hDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNuQztZQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUNoRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLDBCQUEwQixNQUFNLEVBQUUsQ0FBQztTQUMzQztLQUNGO0lBQ0QsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLGtCQUFrQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7S0FDeEU7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsZ0JBQWdCO0NBQ2pCLENBQUMifQ==