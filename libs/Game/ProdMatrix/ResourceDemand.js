class ResourceDemand {
  get Quantity() {
    return this._quantity;
  }
  set Quantity(val) {
    this._quantity = val;
  }
  get Production() {
    return this._production;
  }
  get Resource() {
    return this._resource;
  }

  _production = null;
  _resource = null;
  _quantity = 0;

  constructor(resource, production, quantity) {
    this._resource = resource;
    this._production = production;
    this._quantity = quantity;
  }

  toString() {
    let res = `[Demand]\nResource: ${this._resource.toString()}\nQuantity: ${
      this.Quantity
    }\n[//Demand]`;
    return res;
  }
}

export default ResourceDemand;
