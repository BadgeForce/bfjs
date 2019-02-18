const errors = require("../errors");
const { badgeforcejs } = require('../../../index');

const cache = require('memory-cache');

const Reader = new badgeforcejs.JSONFileReader();
const Validator = new badgeforcejs.JSONValidator();

const validateTemplate = function (args) {
  const {template_json_path} = args;

  try {
    const templateToCreate = Reader.readJSON(template_json_path);
    const {valid, errors} = Validator.isValidJSON(Validator.schemas.templates, templateToCreate);
    if(valid) {
      cache.put('templateToCreate', templateToCreate);
      return true;
    } else {
      return `template data invalid: ${errors}`;
    }
  }
  catch (e) {
    return errors.toError(`error reading file ${template_json_path}: ${e}`)
  }
};

module.exports = {
  validateTemplate
};
