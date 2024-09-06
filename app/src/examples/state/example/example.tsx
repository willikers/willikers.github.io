import { state } from '@willikers/state';
import { useRootState } from '@willikers/state/root-state';
import { useState } from 'react';

// user.state.js
export class UserState {
  name = state('John Doe');
  bio = state('I am a developer');

  apply(name: string, bio: string) {
    this.name.set(name);
    this.bio.set(bio);
  }
}

// Top bar
export const TopBar = () => {
  const user = useRootState(UserState);
  return <h1>Welcome, {user.name()}!</h1>;
};

// Bio
export const Bio = () => {
  const user = useRootState(UserState);
  return <p>{user.bio()}</p>;
};

// Edit Profile
export const EditProfile = () => {
  const user = useRootState(UserState);
  const [name, setName] = useState(() => user.name());
  const [bio, setBio] = useState(() => user.bio());

  const save = () => {
    user.apply(name, bio);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="mb-0 p-0 [&&&]:m-0">
        <input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-md p-2" />
      </p>
      <p className="p-0 [&&&]:m-0">
        <textarea value={bio} onChange={e => setBio(e.target.value)} className="w-full rounded-md p-2" />
      </p>
      <p className="p-0 [&&&]:m-0">
        <button onClick={save} className="rounded-md bg-blue-500 px-6 py-2 text-white">
          Save
        </button>
      </p>
    </div>
  );
};

// App
export const App = () => {
  return (
    <>
      <TopBar />
      <Bio />
      <EditProfile />
    </>
  );
};

export const doc = /*md*/ `

The above example uses the same state within three different components. It is updated in one component and the changes are reflected in all components that use the state.

#### Create the state object
Create a class that will be used as a global state. This class will contain the state that you want to share across the application.

~~~js
// user.state.js
import { state } from '@willikers/state';

export class UserState {
  constructor() {
    this.name = state('John Doe');
    this.bio = state('I am a developer');
  }
}
~~~

#### Access the global state
In one of your components, you can access the global state by using the \`useRootState\` hook.

~~~jsx
// top-bar.js
import { useRootState } from '@willikers/state/root-state';

export const TopBar = () => {
  const user = useRootState(UserState);
  return <h1>Welcome, {user.name()}!</h1>;
};
~~~

In another component, you can also access the global state by using the \`useRootState\` hook. If the same state is used in multiple components, the class (\`UserState\`) will only be instantiated on the first time it is accessed. For every subsequent access, the same instance will be returned.

~~~jsx
// bio.js
import { useRootState } from '@willikers/state/root-state';

export const Bio = () => {
  const user = useRootState(UserState);
  return <p>{user.bio()}</p>;
};
~~~

#### Update the global state
You can then update the state by calling the \`set\` method on the item you want to update that is defined in the global state object.

~~~jsx
// edit-profile.js
import { useRootState } from '@willikers/state/root-state';

export const EditProfile = () => {
  const user = useRootState(UserState);
  const [name, setName] = useState(() => user.name());
  const [bio, setBio] = useState(() => user.bio());

  const save = () => {
    user.name.set(name);
    user.bio.set(bio);
  };

  return (
    <>
      <p>
        <input value={name} onChange={e => setName(e.target.value)} />
      </p>
      <p>
        <textarea value={bio} onChange={e => setBio(e.target.value)} />
      </p>
      <p>
        <button onClick={save}>Save</button>
      </p>
    </>
  );
}
~~~

Now, when you update the state in one component, the change will be reflected in all components that use the global state.

~~~jsx
// app.js
import { TopBar } from './top-bar';
import { Bio } from './bio';
import { EditProfile } from './edit-profile';

export const App = () => {
  return (
    <>
      <TopBar />
      <Bio />
      <EditProfile />
    </>
  );
};
~~~
`;
