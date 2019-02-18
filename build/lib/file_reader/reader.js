"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require('ajv');
class Validator {
    constructor() {
        this.ajv = new Ajv();
        this.templateSchema = require('./templates_schema').templateSchema;
        this.schemas = {
            templates: "templates"
        };
        this.ajv.addSchema(this.templateSchema, this.schemas.templates);
    }
    isValidJSON(schema, data) {
        const valid = this.ajv.validate(schema, data);
        return { valid, errors: this.ajv.errorsText() };
    }
}
exports.Validator = Validator;
class FileReader {
    constructor() {
        this.fs = require('fs');
    }
    readJSON(path) {
        const data = this.fs.readFileSync(path);
        return JSON.parse(data.toString());
    }
}
exports.FileReader = FileReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9maWxlX3JlYWRlci9yZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFM0IsTUFBYSxTQUFTO0lBUXBCO1FBUFEsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDeEIsbUJBQWMsR0FBUSxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFFbkUsWUFBTyxHQUFRO1lBQ2IsU0FBUyxFQUFFLFdBQVc7U0FDdkIsQ0FBQztRQUdBLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQWMsRUFBRSxJQUFTO1FBQ25DLE1BQU0sS0FBSyxHQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBaEJELDhCQWdCQztBQUVELE1BQWEsVUFBVTtJQUF2QjtRQUNVLE9BQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFNN0IsQ0FBQztJQUpDLFFBQVEsQ0FBQyxJQUFZO1FBQ25CLE1BQU0sSUFBSSxHQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0Y7QUFQRCxnQ0FPQyJ9