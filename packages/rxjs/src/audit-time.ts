import { RefObject, useEffect, useState } from 'react';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';
import { Subject } from 'rxjs/internal/Subject';
import { auditTime, tap } from 'rxjs/operators';

export type DebounceTarget = HasEventTargetAddRemove<Event> | RefObject<HTMLElement>;

/**
 * Debounces an event on a target.
 * @param dep The dependency to watch for changes.
 * @param time The time in milliseconds to debounce the event.
 * @param callback The action to perform when the event is debounced.
 */
export function useAuditTime<T>(dep: T, time: number, callback: <U = T>(value: U) => void): T;
/**
 * Debounces an event on a target.
 * @param dep The dependency to watch for changes.
 * @param time The time in milliseconds to debounce the event.
 */
export function useAuditTime<T>(dep: T, time: number): T;
export function useAuditTime<T>(dep: T, time: number, callback?: <U = T>(value: U) => void) {
  const depList = Array.isArray(dep) ? dep : [dep];
  const [audit, setAudit] = useState<T>();
  const [subject] = useState(() => new Subject<T>());
  const [sub] = useState(() =>
    subject
      .pipe(
        auditTime(time),
        tap(e => setAudit(e)),
        tap(e => callback?.(e)),
      )
      .subscribe(),
  );

  // Cleanup the subscription
  useEffect(() => () => sub.unsubscribe(), []);
  // When the dependency changes, send the value to the subject
  useEffect(() => subject.next(dep), depList);

  return audit;
}
