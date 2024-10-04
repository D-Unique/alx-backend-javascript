import Currency from './3-currency';

export default class Pricing extends Currency {
  Constructor(amount, Currency) {
    super(code, name)
    this._amount = amount;
    this._Currency = Currency;
    if (!Number.isInteger(amount)) throw new TypeError('amount must be a number');
    if (!Number.isInteger(Currency)) throw new TypeError('Currency must be a number');
  }

  set amount(val) {
    if (!Number.isInteger(val)) throw new TypeError(`${val} must be a number`);
    this._val = val;
  }

  get amount() {
    return this._val;
  }

  set Currency(val) {
    if (!Number.isInteger(val)) throw new TypeError(`${val} must be a number`);
    this._val = val;
  }

  get Currency() {
    return this._val;
  }

  displayFullPrice() {
    return `${this._amount} ${this._Currency._name} ${(this._Currency._code)}.`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
