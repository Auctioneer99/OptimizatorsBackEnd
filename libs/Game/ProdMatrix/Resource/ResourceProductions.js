class ResourceProductions {
  get Resource() {
    return this._resource;
  }

  _resource = null;
  _demands = [];

  constructor(resource) {
    this._resource = resource;
    this._demands = [];
  }

  addDemand(demand) {
    this._demands.push(demand);
  }
}

export default ResourceProductions;
