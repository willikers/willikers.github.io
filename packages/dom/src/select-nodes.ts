import { HookElement } from '@/globals';
import { JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from 'react';
import { isReactElement, isReactElements } from './helpers/is-react-element';

/**
 * Get all child elements that match the node type.
 * If `null` is passed in as the node, then all children elements are returned unless a `remove` list is passed in.
 * @param node The node to search for in the children elements.
 * @param children The children elements to search through.
 * @param remove The nodes to remove from the list.
 */
export function useSelectNodes<T>(
  node: JSXElementConstructor<T> | JSXElementConstructor<T>[] | null,
  children: HookElement,
  remove: JSXElementConstructor<T>[] = [],
) {
  const [elements, setElements] = useState<ReactNode[]>([]);

  useEffect(() => {
    let nodes: ReactElement[] = [];

    // If the node is null, then return all children elements.
    if (node === null) nodes = isReactElements(children) ? children : isReactElement(children) ? [children] : [];
    // If the node is an array, then return all children elements that match the node types.
    else if (Array.isArray(node)) {
      if (isReactElements(children)) nodes = children.filter(child => node.find(n => n === child.type));
      else if (isReactElement(children) && children.type && node.find(n => n === children.type)) nodes = [children];
    } else if (!Array.isArray(node)) {
      // If the node is a single node, then return all children elements that match the node type.
      if (isReactElements(children)) nodes = children.filter(child => child.type === node);
      else if (isReactElement(children) && children.type === node) nodes = [children];
    }

    if (remove.length > 0) {
      // Remove any nodes that are in the filter list from the nodes list.
      nodes = nodes.filter(node => node.type !== remove.find(f => f === node.type));
    }

    setElements(nodes);

    return () => setElements([]);
  }, [children, node]);

  return elements;
}
