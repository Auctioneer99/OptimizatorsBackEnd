import ProductionResources from "./Production/ProductionResources.js";
import ResourceProductions from "./Resource/ResourceProductions.js";
import Demand from "./ResourceDemand.js";
import Resource from "./Resource/Resource.js";

class ProductionMatrix {
  _products = [];
  _resources = [];
  _priceDemands = null;
  _expects = null;

  constructor() {
    this._priceDemands = new ResourceProductions(new Resource("Cost", "rub"));
    this._expects = new ResourceProductions(new Resource("Expected", "???"));
  }

  addProduct(product, cost, expect) {
    let pr = new ProductionResources(product);

    let priceDemand = new Demand(this._priceDemands.Resource, product, cost);
    this._priceDemands.addDemand(priceDemand);
    pr.Cost = priceDemand;

    let expected = new Demand(this._expects.Resource, product, expect);
    this._expects.addDemand(expected);
    pr.Expected = expected;

    this._resources.forEach((r) => {
      let demand = new Demand(r.Resource, product, 0);
      r.addDemand(demand);
      pr.addDemand(demand);
    });
    this._products.push(pr);
  }

  addResource(resource) {
    let res = new ResourceProductions(resource);
    this._products.forEach((p) => {
      let demand = new Demand(resource, p, 0);
      res.addDemand(demand);
      p.addDemand(demand);
    });
    this._resources.push(res);
  }

  toString() {
    let res = `[ProductionMatrix]\n`;
    res += `Resources: ${this._resources.length}\n`;
    this._resources.forEach((r) => (res += `${r.Resource.toString()}\n`));
    res += `Products: ${this._products.length}\n`;
    this._products.forEach((p) => (res += `${p.toString()}\n`));
    res += "[//ProductionMatrix]";
    return res;
  }
}

export default ProductionMatrix;
