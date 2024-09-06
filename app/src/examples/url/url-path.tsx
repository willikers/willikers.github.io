import { Button } from '@ui/button';
import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { usePathname } from '@willikers/url/pathname';
import { useRef } from 'react';

const description = /*md*/ `
The pathname is the current path in the URL (e.g. \`/some/path\`). This hook allows you to access the pathname as a \`string\` and update it using \`window.history.pushState\`, \`window.history.replaceState\`, or \`setPath\` function with the new path.

**Note:** Using \`setPath()\` will call \`window.history.pushState\` in the background.
`;

export const UrlPath = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [path, setPath] = usePathname();

  const changeURL = () => {
    const randomPaths = ['hello', 'world', 'foo', 'bar', 'baz'];

    const randomPath = randomPaths[Math.floor(Math.random() * randomPaths.length)];

    setPath(`/hook/url/path/${randomPath}`);
  };

  return (
    <Docs.Root>
      <Docs.Header title="URL Pathname" />

      <Docs.Description text={description} />

      <Docs.Import items={[['usePathname', 'url/pathname']]} />

      <Docs.Usage>
        <Docs.CodeUsage
          code={`// Returns the current search params and a function to update the search params.
const [path, setPath] = usePathname();
// Set the new path (choose one)
setPath('/new/path');
setPath('/new/path', { extra: 'data' });
// Output the current path
return <div>{path}</div>;`}
        />
      </Docs.Usage>
      <Docs.Examples>
        <Examples.Example title="Pathname Change">
          <Button ref={ref} onClick={() => changeURL()}>
            Click to change the path
          </Button>
          <p>Params: {JSON.stringify(path)}</p>
        </Examples.Example>
      </Docs.Examples>
    </Docs.Root>
  );
};
