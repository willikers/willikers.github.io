import { watchInterval } from '@willikers/utilities';
import { useEffect, useState } from 'react';
import { getItem, StorageObject } from './utils/storage';

const watchStorage = watchInterval<StorageObject[]>([], () => {
  const keys = Object.keys(localStorage);
  return keys.map(key => ({ key, data: getItem(localStorage, key) }));
});

export const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState<StorageObject[]>([]);

  useEffect(() => {
    const store = watchStorage.subscribe(value => setStoredValue(value));
    return () => store.unsubscribe();
  }, []);

  return (key: string) => storedValue.find(item => item.key === key)?.data;
};
