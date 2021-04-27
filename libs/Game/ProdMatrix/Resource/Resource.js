class Resource {
  get Name() {
    return this._name;
  }
  get Measure() {
    return this._measure;
  }
  _name = "undefined";
  _measure = "unknown";

  constructor(name, measure) {
    this._name = name;
    this._measure = measure;
  }

  toString() {
    let res = `[Resource]\nName: ${this.Name}\nMeasure: ${this.Measure}\n[//Resource]`;
    return res;
  }
}

export default Resource;
