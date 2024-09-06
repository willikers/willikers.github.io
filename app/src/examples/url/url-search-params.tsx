import { Button } from '@ui/button';
import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { useSearchParams } from '@willikers/url/search-params';
import { useRef } from 'react';

const description = /*md*/ `
Search params are the query string parameters in the URL (e.g. \`?foo=bar&baz=qux\`). This hook allows you to access the current search params as a \`Record<string, string>\` and update using either \`window.history.pushState\`, \`window.history.replaceState\`, or \`setSearchParams\` function with the new search params.

**Note:** Using \`setSearchParams()\` will call \`window.history.pushState\` in the background.
`;

export const UrlSearch = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [search, setSearch] = useSearchParams();

  const changeURL = () => {
    const randomKeys = ['hello', 'world', 'foo', 'bar', 'baz'];
    const randomValues = ['happy', 'sad', 'angry', 'excited', 'bored'];

    const randomKey = randomKeys[Math.floor(Math.random() * randomKeys.length)];
    const randomValue = randomValues[Math.floor(Math.random() * randomValues.length)];

    setSearch({ [randomKey]: randomValue });
  };

  return (
    <Docs.Root>
      <Docs.Header title="URL Search Params" />

      <Docs.Description text={description} />

      <Docs.Import items={[['useSearchParams', 'url/search-params']]} />

      <Docs.Usage>
        <Docs.CodeUsage
          code={`// Returns the current search params and a function to update the search params.
const [search, setSearch] = useSearchParams();
// Set new search params (choose one)
setSearch({ key: 'value' });
setSearch({ key: 'value' }, { extra: 'data' });
// Output the current search params
return <div>{JSON.stringify(search)}</div>;`}
        />
      </Docs.Usage>

      <Docs.Examples>
        <Examples.Example title="Search Params Change">
          <Button ref={ref} onClick={() => changeURL()}>
            Click to change the search params
          </Button>
          <p>Params: {JSON.stringify(search)}</p>
        </Examples.Example>
      </Docs.Examples>
    </Docs.Root>
  );
};
