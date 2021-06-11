class PreparingState {
  _timer = null;

  get HasTimer() {
    return this._timer != null;
  }
  get HasElapsed() {
    return this._timer.HasElapsed;
  }

  constructor() {}

  update(deltaTime) {
    if (this.HasTimer) {
      this._timer.update(deltaTime);
      if (this.HasElapsed) {
        Transition;
      }
    }
  }

  beforeLeave(nextState) {}

  beforeEnter(previousState) {}
}
