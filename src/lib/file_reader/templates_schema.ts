export const templateSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Credential Template File Schema",
  "description": "Schema used for reading Credential Template Definitions for creation",
  "type": "object",
  "properties": {
    "name": {
      "description": "Name of the Credential Template",
      "type": "string"
    },
    "description": {
      "description": "Description of the Credential Template",
      "type": "string"
    },
    "type": {
      "description": "Type of the Credential Template, (i.e: medical, education etc)",
      "type": "string"
    },
    "coreData": {
      "description": "Optional key value map of extra data that describe this credential template",
      "type": "object"
    },
    "version": {
      "description": "Version of the Credential Template",
      "type": "string",
      "pattern": "^(?:(\\d+)\\.)?(?:(\\d+)\\.)?(\\*|\\d+)$"
    }
  },
  "required": [ "name", "description", "type", "version" ]
};
