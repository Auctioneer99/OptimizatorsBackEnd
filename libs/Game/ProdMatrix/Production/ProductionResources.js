class ProductionResources {
  get Production() {
    return this._production;
  }
  get Cost() {
    return this._cost;
  }
  set Cost(val) {
    this._cost = val;
  }
  get Expected() {
    return this._expected;
  }
  set Expected(val) {
    this._expected = val;
  }

  _production = null;
  _demands = [];
  _cost = null;
  _expected = null;

  constructor(production) {
    this._production = production;
    this._demands = [];
  }

  addDemand(demand) {
    this._demands.push(demand);
  }

  toString() {
    let res = `[ProductionResources]\n${this.Production.toString()}\nCost: ${
      this.Cost
    }\nExpected: ${this.Expected}\n`;
    this._demands.forEach((d) => {
      res += `${d.toString()}\n`;
    });
    res += "[//ProductionResources]";
    return res;
  }
}

export default ProductionResources;
