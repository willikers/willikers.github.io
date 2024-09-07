import { watchInterval } from '@willikers/utilities';
import { useEffect, useState } from 'react';

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
