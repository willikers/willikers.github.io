import { MyService } from '@examples/state/root-state';
import { useRootState } from '@willikers/state/root-state';

export const TestComponent = () => {
  const state = useRootState(MyService);
  // const [state2] = useRootState(MyService2);
  return (
    <>
      <div>{state.text()}</div>
      {/* <div>{state2.text}</div> */}
    </>
  );
};
