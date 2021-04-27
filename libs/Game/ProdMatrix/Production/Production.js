class Production {
  get Name() {
    return this._name;
  }
  get MaxPrice() {
    return this._maxPrice;
  }

  _name = "undefined";
  _maxPrice = 0;

  constructor(name, maxPrice) {
    this._name = name;
    this._maxPrice = maxPrice;
  }

  toString() {
    let res = `[Production]\nName: ${this.Name}\nMaxPrice: ${this.MaxPrice}\n[//Production]`;
    return res;
  }
}

export default Production;
