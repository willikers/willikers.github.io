import { Button } from '@ui/button';
import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { Input } from '@ui/input';
import { useLocalStorage } from '@willikers/storage/local';
import { useRef, useState } from 'react';

const description = /*md*/ `
Watches for changes in \`localStorage\`. To pick up a change, you need to call the hooks returned function with the key you want to get the changes for.
`;

const Example1 = () => {
  const storage = useLocalStorage();
  const example = storage('example');
  const inputRef = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState('');

  const save = () => {
    localStorage.setItem('example', val);
    setVal('');
    inputRef.current?.focus();
  };

  return (
    <Examples.Example title={'Watch for changes on "example"'}>
      <div className="flex flex-col gap-2">
        <div className="flex place-items-center gap-2">
          <span className="w-[120px] flex-shrink-0">Value to set:</span>
          <Input ref={inputRef} placeholder="Storage Value" className="flex-1" value={val} onChange={e => setVal(e.target.value)} />
          <Button className="flex-shrink-0 basis-[150px]" onClick={save} disabled={val.length === 0}>
            Save to storage
          </Button>
        </div>
        <div className="flex place-items-center gap-2">
          <span className="w-[120px] flex-shrink-0">Saved value:</span>
          <output>{example}</output>
        </div>
      </div>
    </Examples.Example>
  );
};

export const LocalStorage = () => {
  return (
    <Docs.Root title="Local Storage">
      <Docs.Description text={description} />

      <Docs.Import items={[['useLocalStorage', 'storage/local']]} />

      <Docs.Usage>
        <Docs.CodeUsage
          code={`// Start watching for changes on local storage
const storage = useLocalStorage();
// Get the value of 'example' from local storage
const example = storage('example');

return <output>{example}</output>;`}
        />
      </Docs.Usage>

      <Docs.Examples>
        <Example1 />
      </Docs.Examples>
    </Docs.Root>
  );
};
