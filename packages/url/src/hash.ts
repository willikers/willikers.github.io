import { useEffect, useState } from 'react';
import { watchInterval } from '../../utils/src/watch-interval';

const sub = watchInterval('', () => window.location.hash);

export const useHash = (): [string, (newPath: string) => void] => {
  const [urlHash, setUrlHash] = useState('');

  useEffect(() => {
    const watch = sub.subscribe(params => setUrlHash(params));
    return () => watch.unsubscribe();
  }, []);

  const updateHash = (newPath: string, data: any = {}) => {
    window.history.pushState(data, '', newPath);
  };

  return [urlHash, updateHash];
};
