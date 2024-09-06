import { App, doc } from '@examples/state/example/example';
import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { MarkdownDoc } from '@ui/markdown/markdown';
import { state } from '@willikers/state';

const description = /*markdown*/ `
Root state is a state that can be used across the application. This is useful for things like user authentication, theme settings, or any other global state that needs to be shared across the application.

### Features
- Root state can be used across the application.
- State persists across navigation (spa only).
- State can be shared across components.
- State can be updated/read from any component.
- Easier to use than a context provider.
`;

export class MyService {
  text = state('default state');
}

const Example1 = () => {
  return (
    <Examples.Example title="Input Debounce">
      <App />
      <Examples.Description>
        {`
This is an example of a global state that can be used across the application. This is useful for things like user authentication, theme settings, or any other global state that needs to be shared across the application. As you type in the input below, you will  see that when you navigate to another page and come back, the state is still there.`}
      </Examples.Description>
      <MarkdownDoc text={doc} />
    </Examples.Example>
  );
};

export const GlobalState = () => {
  return (
    <Docs.Root title="Root State">
      <Docs.Import
        items={[
          ['state', 'state'],
          ['useRootState', 'state/root-state'],
        ]}
      />
      <Docs.Description>{description}</Docs.Description>
      <Docs.Examples>
        <Example1 />
      </Docs.Examples>
    </Docs.Root>
  );
};
