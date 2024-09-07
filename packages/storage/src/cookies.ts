import { watchInterval } from '@willikers/utilities';
import { useEffect, useState } from 'react';
import { StorageObject } from './utils/storage';

const watchStorage = watchInterval<StorageObject[]>([], () => {
  return document.cookie.split(';').map(cookie => {
    const [key, value] = cookie.split('=');
    return { key: key.trim(), data: value };
  });
});

export const useCookies = () => {
  const [storedValue, setStoredValue] = useState<StorageObject[]>([]);

  useEffect(() => {
    const store = watchStorage.subscribe(value => setStoredValue(value));
    return () => store.unsubscribe();
  }, []);

  return (key: string) => storedValue.find(item => item.key === key)?.data;
};
