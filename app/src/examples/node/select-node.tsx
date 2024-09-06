import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { Prism } from '@ui/prism/prism';

const description = /* markdown */ `
A \`useSelectNode\` or \`useSelectNodes\` hook can be used to select a node from a list of nodes that are passed in as children from the parent component. The node(s) can then be re-arranged in the component into positions where they are needed.

A \`useSelectNode\` or \`useSelectNodes\` hook can be used to select a node from a list of nodes that are passed in as children from the parent component. The node(s) can then be re-arranged in the component into positions where they are needed.

The \`useSelectNode\` hook takes two arguments:
- \`Node\`: The node to select from the children.
- \`children\`: The children nodes to search.

**Note:** When using the one of the select node hooks, it is usually best not to also use \`{'{children}'}\` in the component as that will only re-render the children causing duplicate nodes to be rendered.
`;

const singleNodeExampleDescription = /* markdown */ `
This example demonstrates how to select a single node from a list of nodes.

- It uses the \`useNode\` hook to find the \`Body\` node from the children.
- It uses the \`useNode\` hook to find the \`Nav\` node from the children.

Once the nodes are found, they are able to be rendered where needed.
`;

const multiNodeExampleDescription = /* markdown */ `
This example demonstrates how to select multiple nodes from a list of nodes.

- It uses the \`useNodes\` hook to find the \`Item\` nodes from the children.

Once the nodes are found, they are able to be rendered where needed.
`;

const Example1 = () => {
  return (
    <Examples.Example title="Select Single Node">
      <Examples.Description>{singleNodeExampleDescription}</Examples.Description>
      <Prism
        code={
          /*jsx*/ `import { useNode } from '@willikers/dom/select-node';
// A simple body example component
const Body = ({ children }) => <div>{children}</div>;
// A simple nav example component
const Nav = ({ children }) => <ul>{children}</ul>;

const Page = ({ children }) => {
  const body = useNode(Body, children); // Find the Body node from children
  const nav = useNode(Nav, children); // Find the Nav node from children

  return (
    <>
      <h1>Select Node Example</h1>
      <div className="flex gap-4">
        <nav>{nav}</nav>
        <main>{body}</main>
      </div>
    </>
  );
};

// The main page component
export default () => {
  return <Page>
    <Body>Hello World</Body>
    <Nav>
      <li>Nav 1</li>
      <li>Nav 2</li>
    </Nav>
  </Page>;
};
          `
        }
      />
    </Examples.Example>
  );
};

const Example2 = () => {
  return (
    <Examples.Example title="Select Multiple Nodes">
      <Examples.Description>{multiNodeExampleDescription}</Examples.Description>
      <Prism
        code={
          /*jsx*/ `import { useNodes } from '@willikers/dom/select-node';
// A simple item example component
const Item = ({ children }) => <li>{children}</li>;
// A simple list example component
const List = ({ children }) => {
  const items = useNodes(Item, children); // Find the Item nodes from children

  return (
    <ul>
      {items}
    </ul>
  );
};

// The main list component
export default () => {
  return (
    <List>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </List>
  );
};
          `
        }
      />
    </Examples.Example>
  );
};

export const SelectNode = () => {
  return (
    <Docs.Root>
      <Docs.Header>Select Node</Docs.Header>
      <Docs.Import
        items={[
          ['useSelectNode', 'dom/select-node'],
          ['useSelectNodes', 'dom/select-nodes'],
        ]}
      />
      <Docs.Description text={description} />
      <Docs.Usage title="Single Node Selection">
        <Docs.CodeUsage
          code="const element = useSelectNode(Node, children);"
          comment="Returns the first child element that matches 'Node'."
        />
        <Docs.CodeUsage code="const element = useSelectNode(null, children);" comment="Returns the first child element that is found." />
      </Docs.Usage>
      <Docs.Usage title="Multi-Node Selection">
        <Docs.CodeUsage
          code="const elements = useSelectNodes(Node, children);"
          comment="Returns all children elements that match 'Node'."
        />
        <Docs.CodeUsage
          code="const elements = useSelectNodes([Node1, Node2], children);"
          comment="Returns all children elements that match 'Node1' or 'Node2'."
        />
        <Docs.CodeUsage
          code="const elements = useSelectNodes(null, children, [Node1, Node2]);"
          comment="Returns all children elements except 'Node1' and 'Node2'."
        />
      </Docs.Usage>
      <Docs.Examples>
        <Example1 />
        <Example2 />
      </Docs.Examples>
    </Docs.Root>
  );
};
