import { Callout } from '@ui/callout';
import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { useHistory } from '@willikers/url/history';

const description = /*md*/ `
The history hook allows you to listen to the browser's forward and back buttons. This is useful for updating the UI when the user navigates through the browser's history. The hook will call the \`callback\` function provided when the user navigates through the browser's history passing the \`PopStateEvent\` as the first argument.
`;

export const UrlHistory = () => {
  useHistory(() => {
    console.log('history changed');
  });

  return (
    <Docs.Root>
      <Docs.Header title="URL History" />

      <Docs.Description text={description} />

      <Docs.Import items={[['useHistory', 'url/history']]} />

      <Docs.Usage>
        <Docs.CodeUsage
          code={`// Calls the callback function when the user navigates through the browser's history
useHistory(e => {
  console.log('history changed', e);
});`}
        />
      </Docs.Usage>
      <Docs.Examples>
        <Examples.Example title="Pathname Change">
          <Callout type="danger">
            Use the browser's forward and back buttons to see the <code>console.log</code>.
          </Callout>
        </Examples.Example>
      </Docs.Examples>
    </Docs.Root>
  );
};
