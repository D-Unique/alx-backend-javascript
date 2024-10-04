export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
    if (typeof code !== 'string') throw new TypeError('Code should be 0f type string');
    if (typeof name !== 'string') throw new TypeError('name should be 0f type string');
  }

  set code(val) {
    if (typeof (val) !== 'String') throw new TypeError(' Code should be 0f type string'); // eslint-disable-line valid-typeof
    this._val = val;
  }

  get code() {
    return this._code;
  }

  set name(val) {
    if (typeof (val) !== 'String') throw new TypeError(' name should be 0f type string'); // eslint-disable-line valid-typeof
    this._val = val;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
