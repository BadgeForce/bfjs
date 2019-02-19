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
    "required": ["name", "description", "type", "version"]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGVzX3NjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZmlsZV9yZWFkZXIvdGVtcGxhdGVzX3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsY0FBYyxHQUFHO0lBQzVCLFNBQVMsRUFBRSx5Q0FBeUM7SUFDcEQsT0FBTyxFQUFFLGlDQUFpQztJQUMxQyxhQUFhLEVBQUUsc0VBQXNFO0lBQ3JGLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRTtZQUNOLGFBQWEsRUFBRSxpQ0FBaUM7WUFDaEQsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxhQUFhLEVBQUU7WUFDYixhQUFhLEVBQUUsd0NBQXdDO1lBQ3ZELE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0QsTUFBTSxFQUFFO1lBQ04sYUFBYSxFQUFFLGdFQUFnRTtZQUMvRSxNQUFNLEVBQUUsUUFBUTtTQUNqQjtRQUNELFVBQVUsRUFBRTtZQUNWLGFBQWEsRUFBRSw2RUFBNkU7WUFDNUYsTUFBTSxFQUFFLFFBQVE7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVCxhQUFhLEVBQUUsb0NBQW9DO1lBQ25ELE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFNBQVMsRUFBRSwwQ0FBMEM7U0FDdEQ7S0FDRjtJQUNELFVBQVUsRUFBRSxDQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBRTtDQUN6RCxDQUFDIn0=