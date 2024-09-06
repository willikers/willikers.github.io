import { useEffect, useReducer, useState } from 'react';
import { map, tap, throttleTime } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RootState } from './state';

// Setup the global state instance
if (!window.rootState) {
  window.rootState = new BehaviorSubject<RootState[]>([]);
}

type ObjectState<T> = { [K in keyof T]: T[K] };
/**
 * Either creates or retrieves an instance of a global state.
 * If the state already exists, it will return the existing instance.\
 * If the state does not exist, it will create a new instance and return it.
 * @param stateClass An instantiable class that will be referenced from the global state.
 */
export function useRootState<T>(stateClass: new (...args: any[]) => T): ObjectState<T> {
  const [, setInc] = useReducer(i => i + 1, 0);
  // This instantiates the root class if it doesn't exist,
  // or returns the existing instance if it does.
  const [localState, setLocalState] = useState<ObjectState<T>>(() => {
    const inst = window.rootState.value.find(s => s.__NEWABLE_OBJECT_REF__ === stateClass);
    if (inst) return inst as unknown as ObjectState<T>;
    const rootState = new RootState(stateClass);
    window.rootState.next([...window.rootState.value, rootState]);
    return rootState as unknown as ObjectState<T>;
  });

  const [subscription] = useState(() =>
    window.rootState
      .pipe(
        throttleTime(100),
        map(states => {
          const rootState = states.find(s => s.__NEWABLE_OBJECT_REF__ === stateClass);
          return rootState as unknown as ObjectState<T>;
        }),
        tap(state => setLocalState(state)),
        tap(() => setInc()),
      )
      .subscribe(),
  );

  useEffect(() => () => subscription.unsubscribe(), []);

  return localState;
}
