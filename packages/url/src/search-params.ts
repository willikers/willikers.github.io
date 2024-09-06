import { useEffect, useState } from 'react';
import { watchInterval } from '../../utils/src/watch-interval';

const sub = watchInterval({}, () => Object.fromEntries(new URLSearchParams(window.location.search).entries()));

export const useSearchParams = <T extends Record<string, string> = Record<string, string>>(): [T, (newParams: Partial<T>) => void] => {
  const [searchParams, setSearchParams] = useState<T>({} as T);

  useEffect(() => {
    const watch = sub.subscribe(params => setSearchParams(params as T));
    return () => watch.unsubscribe();
  }, []);

  const updateSearchParams = (newParams: Partial<T>, data: any = {}) => {
    const searchParams = new URLSearchParams(newParams as Record<string, string>);
    window.history.pushState(data, '', `?${searchParams.toString()}`);
  };

  return [searchParams, updateSearchParams];
};
