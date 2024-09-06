import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { Input } from '@ui/input';
import { Prism } from '@ui/prism/prism';
import { useThrottleTime } from '@willikers/rxjs/throttle-time';
import { useEffect, useState } from 'react';

const Example1 = () => {
  const [value, setValue] = useState('');
  const [output, setOutput] = useState('');

  const throttle = useThrottleTime(value, 1500);

  useEffect(() => setOutput(throttle), [throttle]);

  return (
    <Examples.Example title="Throttle the input">
      <Examples.Description>As you type, the input will be throttled to only update every 1.5 seconds.</Examples.Description>
      <p>
        <Input placeholder="Type to see a delay below." value={value} onChange={e => setValue(e.target.value)} />
      </p>
      <p>Output: {output}</p>
      <Prism
        code={`const [value, setValue] = useState('');
const [output, setOutput] = useState('');

const throttle = useThrottle(value, 1500);

useEffect(() => setOutput(value), [throttle]);

return (
  <>
    <input placeholder="Type to see a delay below." value={value} onChange={e => setValue(e.target.value)} />
    <p>Output: {output}</p>
  </>
);`}
      />
    </Examples.Example>
  );
};

export const ThrottleTime = () => {
  return (
    <Docs.Root>
      <Docs.Header>Throttle Time</Docs.Header>
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
