import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { Input } from '@ui/input';
import { Prism } from '@ui/prism/prism';
import { useAuditTime } from '@willikers/rxjs/audit-time';
import { useEffect, useState } from 'react';

const Example1 = () => {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  const audited = useAuditTime(value, 1000);

  useEffect(() => setOutput(audited), [audited]);

  return (
    <Examples.Example title="Input Debounce">
      <p>
        <Input placeholder="Type to see a delay below." value={value} onChange={e => setValue(e.target.value)} />
      </p>
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

export const AuditTime = () => {
  return (
    <Docs.Root>
      <Docs.Header>Audit Time</Docs.Header>
      <Docs.QAndA>
        <Docs.Question>What is debouncing?</Docs.Question>
        <Docs.Answer>
          Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, making it so that they only
          fire once every x milliseconds.
        </Docs.Answer>
      </Docs.QAndA>
      <Docs.Examples>
        <Example1 />
      </Docs.Examples>
    </Docs.Root>
  );
};
