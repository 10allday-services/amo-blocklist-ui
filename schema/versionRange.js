export const versionRangeSchema = {
  "type": "array",
  "title": "Versions",
  "description": "The list of impacted versions.",
  "default": [],
  "items": {
    "type": "object",
    "title": "Version range",
    "description": "Version range",
    "additionalProperties": false,
    "required": ["minVersion", "maxVersion", "severity"],
    "default": {
      "minVersion": "",
      "maxVersion": "",
      "severity": "0",
      "vulnerabilityStatus": "",
      "targetApplication": {
        "id": "",
        "minVersion": "",
        "maxVersion": ""
      },
    },
    "properties": {
      "minVersion": {
        "type": "string",
        "title": "Min version",
        "description": "The mininum version."
      },
      "maxVersion": {
        "type": "string",
        "title": "Max version",
        "description": "The maximum version.",
        "default": ""
      },
      "severity": {
        "type": "string",
        "title": "Severity",
        "description": "The severity code number.",
        "enum": ["0", "1", "2", "3"],
        "default": "0"
      },
      "vulnerabilityStatus": {
        "type": "string",
        "title": "Vulnerability status",
        "description": "The vulnerability status code number.",
        "enum": ["", "1", "2"],
        "default": ""
      },
      "targetApplication": {
        "type": "object",
        "title": "Target application",
        "description": "The target application information.",
        "additionalProperties": false,
        "required": ["id", "minVersion", "maxVersion"],
        "properties": {
          "id": {
            "type": "string",
            "title": "Application id",
            "description": "The application unique identifier."
          },
          "minVersion": {
            "type": "string",
            "title": "Min version",
            "description": "The mininum version."
          },
          "maxVersion": {
            "type": "string",
            "title": "Max version",
            "description": "The maximum version."
          },
        }
      }
    }
  }
};
