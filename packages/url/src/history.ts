import { useEffect } from 'react';
import { fromEvent } from 'rxjs';

const sub = fromEvent(window, 'popstate');

export const useHistory = (callback: (history: PopStateEvent) => void) => {
  useEffect(() => {
    const watch = sub.subscribe(event => callback(event as PopStateEvent));
    return () => watch.unsubscribe();
  }, []);
};
