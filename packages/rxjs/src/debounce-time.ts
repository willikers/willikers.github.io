import { RefObject, useEffect, useState } from 'react';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, tap } from 'rxjs/operators';

export type DebounceTarget = HasEventTargetAddRemove<Event> | RefObject<HTMLElement>;

/**
 * Debounces an event on a target.
 * @param dep The dependency to watch for changes.
 * @param time The time in milliseconds to debounce the event.
 * @param callback The action to perform when the event is debounced.
 */
export function useDebounceTime<T>(dep: T, time: number, callback: <U = T>(value: U) => void): T;
/**
 * Debounces an event on a target.
 * @param dep The dependency to watch for changes.
 * @param time The time in milliseconds to debounce the event.
 */
export function useDebounceTime<T>(dep: T, time: number): T;
export function useDebounceTime<T>(dep: T, time: number, callback?: <U = T>(value: U) => void) {
  const depList = Array.isArray(dep) ? dep : [dep];
  const [debounce, setDebounce] = useState<T>();
  const [subject] = useState(() => new Subject<T>());
  const [sub] = useState(() =>
    subject
      .pipe(
        debounceTime(time),
        tap(e => setDebounce(e)),
        tap(e => callback?.(e)),
      )
      .subscribe(),
  );

  // Cleanup the subscription
  useEffect(() => () => sub.unsubscribe(), []);
  // When the dependency changes, send the value to the subject
  useEffect(() => subject.next(dep), depList);

  return debounce;
}
