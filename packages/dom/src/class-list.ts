import { DependencyList, useEffect, useState } from 'react';

export type Truthy<T> = any extends T ? never : T;

export const useClassList = <T>(classes: Record<string, Truthy<T>>, deps: DependencyList) => {
  const [classList, setClassList] = useState('');
  useEffect(() => {
    const list = Object.entries(classes)
      .filter(([, value]) => value)
      .map(([key]) => key);

    setClassList(list.join(' '));
  }, deps);

  return classList;
};
