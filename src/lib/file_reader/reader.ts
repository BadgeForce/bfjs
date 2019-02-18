const Ajv = require('ajv');

export class Validator {
  private ajv = new Ajv();
  templateSchema: any = require('./templates_schema').templateSchema;

  schemas: any = {
    templates: "templates"
  };

  constructor() {
    this.ajv.addSchema(this.templateSchema, this.schemas.templates);
  }

  isValidJSON(schema: string, data: any): any {
    const valid: boolean = this.ajv.validate(schema, data);
    return {valid, errors: this.ajv.errorsText()};
  }
}

export class FileReader {
  private fs = require('fs');

  readJSON(path: string): any {
    const data: any = this.fs.readFileSync(path);
    return JSON.parse(data.toString());
  }
}
