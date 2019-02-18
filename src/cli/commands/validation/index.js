const validation = require('./validation');
const jsonValidation = require('./json_files');

module.exports = {
  clientConfigured: validation.clientConfigured,
  validateTemplate: jsonValidation.validateTemplate
};
