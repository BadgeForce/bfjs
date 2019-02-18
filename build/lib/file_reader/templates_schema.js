"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateSchema = {
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
        "version": {
            "description": "Version of the Credential Template",
            "type": "string",
            "pattern": "^(?:(\\d+)\\.)?(?:(\\d+)\\.)?(\\*|\\d+)$"
        }
    },
    "required": ["name", "description", "type", "version"]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzX3NjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZmlsZV9yZWFkZXIvdGVtcGxhdGVzX3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsY0FBYyxHQUFHO0lBQzVCLFNBQVMsRUFBRSx5Q0FBeUM7SUFDcEQsT0FBTyxFQUFFLGlDQUFpQztJQUMxQyxhQUFhLEVBQUUsc0VBQXNFO0lBQ3JGLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRTtZQUNOLGFBQWEsRUFBRSxpQ0FBaUM7WUFDaEQsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxhQUFhLEVBQUU7WUFDYixhQUFhLEVBQUUsd0NBQXdDO1lBQ3ZELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sYUFBYSxFQUFFLGdFQUFnRTtZQUMvRSxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULGFBQWEsRUFBRSxvQ0FBb0M7WUFDbkQsTUFBTSxFQUFFLFFBQVE7WUFDaEIsU0FBUyxFQUFFLDBDQUEwQztTQUN0RDtLQUNGO0lBQ0QsVUFBVSxFQUFFLENBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFFO0NBQ3pELENBQUMifQ==