import { useEffect, useState } from 'react';
import { watchInterval } from '../../utils/src/watch-interval';

const sub = watchInterval('', () => window.location.pathname);

export const usePathname = (): [string, (newPath: string) => void] => {
  const [urlPath, setUrlPath] = useState('');

  useEffect(() => {
    const watch = sub.subscribe(params => setUrlPath(params));
    return () => watch.unsubscribe();
  }, []);

  const updatePathname = (newPath: string, data: any = {}) => {
    window.history.pushState(data, '', newPath);
  };

  return [urlPath, updatePathname];
};
