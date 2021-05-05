import FSM from "./State/FiniteStateMachine.js";

class GameController {
  _fsm;

  constructor() {
    this._fsm = new FSM();
  }

  start() {
    this._fsm.start();
  }

  update(deltaTime) {
    this._fsm.update(delataTime);
  }
}

export default GameController;
