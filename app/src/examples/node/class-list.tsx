import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { Prism } from '@ui/prism/prism';
import { useClassList } from '@willikers/dom/class-list';
import { useState } from 'react';

const description = /* markdown */ `The \`useClassList\` hook is used to toggle classes on/off based on a condition. When the condition is \`truthy\`, the class is applied to the element. When the condition is \`falsy\`, the class is removed from the element.

The \`useClassList\` hook accepts two arguments:
- \`classList\`: An object that contains the css class name(s) as keys and the condition as values.
- \`deps\`: An array of dependencies that are used to trigger the class list update
`;

const Example1 = () => {
  const [onOff, setOnOff] = useState(false);
  const classes = useClassList(
    {
      'text-gray-900': true,
      'p-2 rounded-md': true,
      'bg-red-500 hover:bg-red-600': onOff === false,
      'bg-green-500 hover:bg-green-600': onOff === true,
    },
    [onOff],
  );
  return (
    <Examples.Example title="Toggle Colors">
      <Examples.Description>Click the button to toggle the color.</Examples.Description>
      <button className={classes} onClick={() => setOnOff(!onOff)}>
        {onOff ? 'On' : 'Off'}
      </button>

      <Prism
        code={`const [onOff, setOnOff] = useState(false);
const classes = useClassList({
    // classes that are always applied
    'text-gray-900 p-2 rounded-md': true,
    // classes that are applied when "onOff" is "false"
    'bg-red-500 hover:bg-red-600': onOff === false,
    // classes that are applied when "onOff" is "true"
    'bg-green-500 hover:bg-green-600': onOff === true,
  },
  [onOff]
);

return (
  <button className={classes} onClick={() => setOnOff(!onOff)}>
    {onOff ? 'On' : 'Off'}
  </button>
);`}
      />
    </Examples.Example>
  );
};

export const ClassList = () => {
  return (
    <Docs.Root>
      <Docs.Header>Class List</Docs.Header>
      <Docs.Import items={[['useClassList', 'dom/class-list']]} />
      <Docs.Description text={description} />
      <Docs.Usage title="Overview">
        <Docs.CodeUsage
          code="const classes = useClassList({ 'class-2': a === b }, [dep]);"
          comment="Toggle classes based on a condition using a property value."
        />
        <Docs.CodeUsage
          code="const classes = useClassList({ [a ? 'class-1' : 'class-2']: true }, [a]);"
          comment="Toggle a class based on a condition using a property key."
        />
        <Docs.CodeUsage
          comment="Join multiple classes together."
          code={`const classes = useClassList({
  'class-1': true,
  [className ?? '']: true,
}, [className]);`}
        />
      </Docs.Usage>
      <Docs.Usage title="The JSX">
        <Docs.CodeUsage code={`return <button className={classes} onClick={() => setOnOff(!onOff)}>;`} />
      </Docs.Usage>
      <Docs.Examples>
        <Example1 />
      </Docs.Examples>
    </Docs.Root>
  );
};
