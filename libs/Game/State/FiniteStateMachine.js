import EState from "./EState.js";

import PrepareState from "./";

class FiniteStateMachine {
  _states = [];

  _currentState = null;
  _previousState = null;

  constructor() {
    _states.push(
      {
        key: EState.Preparing,
        value: "the value",
      },
      {
        key: EState.Analysing,
        value: "the value",
      }
    );
  }

  start() {
    this.transitionTo(EState.Preparing);
  }

  update(deltaTime) {
    this._currentState?.Update(deltaTime);
  }

  transitionTo(stateId) {
    let nextState = _states[stateId];
    this._currentState.beforeLeave();
    nextState.beforeEnter();
    this._previousState = this._currentState;
    this._currentState = nextState;
  }
}

export default FiniteStateMachine;
