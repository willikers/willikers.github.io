import { BehaviorSubject } from 'rxjs';

declare global {
  interface Window {
    rootState: BehaviorSubject<RootState[]>;
  }
}

export interface StateHandler<T = unknown> {
  /**
   * Get the current state.
   */
  (): T;
  /**
   * Sets the state to a new value.
   * @param newState The new state value to set.
   */
  set(newState: T): void;
}

export class RootState<T = unknown> {
  /**
   * @internal
   * A reference to the class that will eventually be instantiated.
   */
  __NEWABLE_OBJECT_REF__!: new (...args: any[]) => T;
  constructor(readonly newable: new (...args: any[]) => any) {
    const instance = new newable();
    instance.__NEWABLE_OBJECT_REF__ = newable;
    return instance;
  }
}

export class State<T> implements Omit<StateHandler<T>, '()'> {
  constructor(state?: T);
  constructor(private _state: T) {}
  get() {
    return this._state;
  }
  set(newState: T) {
    this._state = newState;
  }
}

export function state<T>(initialState?: T): StateHandler<T> {
  const state = new State(initialState);
  return Object.assign(() => state.get(), {
    set: (newState: T) => {
      state.set(newState);
      window.rootState.next(window.rootState.value);
    },
  });
}
