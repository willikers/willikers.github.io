import { Button } from '@ui/button';
import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { Input } from '@ui/input';
import { Prism } from '@ui/prism/prism';
import { useDebounceTime } from '@willikers/rxjs/debounce-time';
import { useEffect, useRef, useState } from 'react';

const Example1 = () => {
  const [value, setValue] = useState<string>('');
  const [output, setOutput] = useState('Not debounced yet.');

  const debounced = useDebounceTime(value, 500);

  useEffect(() => setOutput('Debounced!'), [debounced]);
  useEffect(() => setOutput('Not debounced yet.'), [value]);

  return (
    <Examples.Example title="Input Debounce">
      <p>
        <Input placeholder="Type to see a delay below." value={value} onChange={e => setValue(e.target.value)} />
      </p>
      <p>Value: {value}</p>
      <p>Debounce: {output}</p>
      <Prism
        code={`const [value, setValue] = useState();
const [output, setOutput] = useState('Not debounced yet.');

const debounced = useDebounce(value, 500);

useEffect(() => setOutput('Debounced!'), [debounced]);
useEffect(() => setOutput('Not debounced yet.'), [value]);

return (
  <>
    <input placeholder="Type to see a delay below." value={value} onChange={e => setValue(e.target.value)} />
    <p>Value: {value}</p>
    <p>Debounce: {output}</p>
  </>
);`}
      />
    </Examples.Example>
  );
};

const Example2 = () => {
  // Stop debounce using a button
  const ref = useRef<HTMLButtonElement>(null);
  const [output, setOutput] = useState('Not debounced yet.');
  const [debounce, setDebounce] = useState(true);

  useDebounceTime(debounce, 500, () => setOutput('Debounced!'));

  useEffect(() => {
    setOutput('Not debounced yet.');
  }, [debounce]);

  return (
    <Examples.Example title="Click Debounce">
      <Button ref={ref} onClick={() => setDebounce(!debounce)}>
        Click repeatedly to see a delay below after stopping.
      </Button>
      <p>Debounce: {output}</p>
    </Examples.Example>
  );
};

export const DebounceTime = () => {
  return (
    <Docs.Root>
      <Docs.Header>Debounce Time</Docs.Header>
      <Docs.QAndA>
        <Docs.Question>What is debouncing?</Docs.Question>
        <Docs.Answer>
          Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making it so that they only
          fire once every x milliseconds.
        </Docs.Answer>
      </Docs.QAndA>
      <Docs.Examples>
        <Example1 />
        <Example2 />
      </Docs.Examples>
    </Docs.Root>
  );
};
