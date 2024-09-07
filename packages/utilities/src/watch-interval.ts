import isEqual from 'lodash/isEqual';
import { BehaviorSubject, filter, ignoreElements, interval, map, merge, tap } from 'rxjs';

export const watchInterval = <T>(startValue: T, comparisonFn: () => T) => {
  const behavior = new BehaviorSubject<T>(startValue);

  const timer = interval(100).pipe(
    map(() => [behavior.value, comparisonFn()]),
    filter(([search, newData]) => !isEqual(search, newData)),
    tap(([, newData]) => behavior.next(newData)),
    ignoreElements(),
  );

  // Emit the initial value
  behavior.next(comparisonFn());

  return merge(timer, behavior);
};
