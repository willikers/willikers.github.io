import { HookElement } from '@/globals';
import { JSXElementConstructor, ReactNode, useEffect, useState } from 'react';
import { isReactElement, isReactElements } from './helpers/is-react-element';

/**
 * Get the first child element that matches the node type.
 * @param node The node to search for in the children elements.
 * @param children The children elements to search through.
 */
export const useSelectNode = <T>(node: JSXElementConstructor<T> | null, children: HookElement) => {
  const [element, setElement] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (node === null) {
      if (isReactElements(children)) {
        setElement(children.find(isReactElement));
      } else if (isReactElement(children)) setElement(children);
      else setElement(null);
    } else {
      if (isReactElements(children)) {
        setElement(children.find(child => isReactElement(child) && child.type === node));
      } else if (isReactElement(children) && children.type === node) setElement(children);
      else setElement(null);
    }
    return () => setElement(null);
  }, [children]);

  return element;
};
