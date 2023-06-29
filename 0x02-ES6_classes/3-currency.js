export default class Currency {
  constructor(code, name) {
    this._code = this.validateString(code, 'code');
    this._name = this.validateString(name, 'name');
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    this._code = this.validateString(newCode, 'code');
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = this.validateString(newName, 'name');
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  // Helper method to validate a string attribute
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string.`);
    }
    return value;
  }
}