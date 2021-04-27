class Team {
  get Name() {
    return this._name;
  }
  _name = "undefined";

  constructor(name, initialCapital) {
    this._name = name;
    this._capital = initialCapital;
  }
}

export default Team;
