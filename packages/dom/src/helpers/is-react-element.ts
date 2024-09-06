import { ReactElement, ReactNode } from 'react';

export const isReactElement = (element: ReactNode): element is ReactElement => {
  return !!element && typeof element === 'object' && 'type' in element;
};

export const isReactElements = (elements: ReactNode): elements is ReactElement[] => {
  return !!elements && Array.isArray(elements) && elements.every(isReactElement);
};
