import { Button } from '@ui/button';
import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { useHash } from '@willikers/url/hash';
import { useRef } from 'react';

const description = /*md*/ `
The hash is the part of the URL that comes after the \`#\` (e.g. \`#foo\`). This hook allows you to access the current hash as a \`string\` and update it using \`window.history.pushState\`, \`window.history.replaceState\`, or \`setHash\` function with the new hash.

**Note:** Using \`setHash()\` will call \`window.history.pushState\` in the background.
`;

export const UrlHash = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [hash, setHash] = useHash();

  const changeURL = () => {
    const randomHashes = ['hello', 'world', 'foo', 'bar', 'baz'];
    const randomHash = randomHashes[Math.floor(Math.random() * randomHashes.length)];
    setHash(`#${randomHash}`);
  };

  return (
    <Docs.Root>
      <Docs.Header title="URL Hash" />

      <Docs.Description text={description} />

      <Docs.Import items={[['useHash', 'url/hash']]} />

      <Docs.Usage>
        <Docs.CodeUsage
          code={`// Returns the current hash and a function to update the hash.
const [hash, setHash] = useHash();
// Set the new hash (choose one)
setHash('#new-hash');
setHash('#new-hash', { extra: 'data' });
// Output the current hash
return <div>{hash}</div>;`}
        />
      </Docs.Usage>
      <Docs.Examples>
        <Examples.Example title="Pathname Change">
          <Button ref={ref} onClick={() => changeURL()}>
            Click to change the hash
          </Button>
          <p>Params: {JSON.stringify(hash)}</p>
        </Examples.Example>
      </Docs.Examples>
    </Docs.Root>
  );
};
