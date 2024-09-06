import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { Input } from '@ui/input';
import { Prism } from '@ui/prism/prism';
import { maxLength, minLength, useControl } from '@willikers/forms';

const description = /* markdown */ `
A form control is a component that allows users to interact with an individual form element. The form control is responsible for managing the state of the form element and updating the form data.

|Argument|Type|Description|
|--------|----|-----------|
|\`value\`|string|The initial value of the form control.|
|\`validator\`|Function[] \\| Function|A validator or an array of validators that validate the form control value.|
|\`options.useDebounce\`|number|The debounce time in milliseconds.|
|\`options.stopOnError\`|boolean|Indicates whether to stop validation on the first error.|
|\`options.when\`|\`change\` \\| \`blur\`\\| \`manual\`|Sets at which point the form control should be validated.|
|\`options.validators\`|Function[] \\| Function|A validator or an array of validators that validate the form control value.|

### Usage

~~~javascript
// Creates a form control with an initial value of an empty string and no validators and default options
const control = useControl();
// Creates a form control with an initial value of "initial value" and no validators and default options
const control = useControl('initial value');
// Creates a form control with an initial value of "initial value" and an array of validators and default options
const control = useControl('initial value', [required, minLength(5)]);
// Creates a form control with an initial value of "initial value" and a single validator and custom options
const control = useControl('initial value', required, { useDebounce: 300, stopOnError: true, when: 'change' });
// Creates a form control with an initial value of "initial value" and a single validator and custom options
const control = useControl('initial value', {
  validators: required,
  useDebounce: 300,
  stopOnError: true,
  when: ['change', 'blur']
});
~~~

The once you have the control set up the way you want, you then use the \`bind\` property to bind the control to the form element that it should manage.

**Note:** If your using a custom input, it should support the \`value\`, \`onChange\`, \`onBlur\`, and \`onFocus\` properties.

~~~javascript
return <input type="text" {...control.bind} />;
~~~

For information on how to use built-in validators or use custom validators, see [Form Validators](/hook/forms/form-validators).

### Control Return Interface

Each form control has the following return interface:

|Property|Type|Description|
|--------|----|-----------|
|\`bind\`|Object|An object that contains the bindings for the form control.|
|\`bind.value\`|string|The current value of the form control.|
|\`bind.onChange\`|Function|A function that updates the form control value.|
|\`bind.onBlur\`|Function|A function that is called when the form control loses focus.|
|\`touched\`|boolean|Indicates whether the form control has been touched.|
|\`dirty\`|boolean|Indicates whether the form control has been modified by the user.|
|\`valid\`|boolean|Indicates whether the form control is valid.|
|\`invalid\`|boolean|Indicates whether the form control is invalid.|
|\`errors\`|Object|Contains the validation errors for the form control.|
|\`isEmpty\`|Function|Returns true if the form control value is empty.|
|\`hasError\`|Function|Returns true if the form control has a specific error.|
|\`setValue\`|Function|Updates the form control value.|
|\`validate\`|Function|Validates the form control value.|



### CSS Classes

When a control is in a certain state, it will have the following CSS classes applied to it, which can be used to style the control accordingly if desired.

|State|CSS Class|Description|
|-----|---------|-----------|
|Touched|\`ctrl-touched\`|The form control has been touched.|
|Untouched|\`ctrl-untouched\`|The form control has not been touched.|
|Dirty|\`ctrl-dirty\`|The form control has been modified.|
|Pristine|\`ctrl-pristine\`|The form control has not been modified.|
|Valid|\`ctrl-valid\`|The form control is valid.|
|Invalid|\`ctrl-invalid\`|The form control is invalid.|
`;

export const FormControlExample = () => {
  const control = useControl('');
  return (
    <>
      <Input {...control.bind} placeholder="This control has no validation" />
      <Prism
        code={`// Creates a form control with an initial value of an empty string
const control = useControl('');
return <input type="text" {...control.bind} />;`}
      />
    </>
  );
};
export const FormControlWithValidationExample = () => {
  const control = useControl('', minLength(5));
  return (
    <>
      <div className="flex flex-col gap-4">
        {control.dirty && control.invalid && <span className="text-red-500">The input must have at least 5 characters!</span>}
        {control.dirty && control.valid && <span className="text-green-500">The input has at least 5 characters!</span>}
        <Input {...control.bind} placeholder="Enter some text" />
      </div>
      <Prism
        code={`// Creates a form control with an initial value of an empty string and a validator that requires at least 5 characters
const control = useControl('', minLength(5));
return (
  <>
    {control.dirty && control.invalid && <span className="text-red-500">The input must have at least 5 characters!</span>}
    {control.dirty && control.valid && <span className="text-green-500">The input has at least 5 characters!</span>}
    <input type="text" {...control.bind} />
  </>
);`}
      />
    </>
  );
};
export const AsyncFormControlExample = () => {
  const CheckUsername = () => {
    return {
      code: 'username-taken',
      validate: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return Math.random() > 0.5;
      },
    };
  };

  const control = useControl('', {
    validators: [minLength(3), maxLength(10), CheckUsername],
    useDebounce: 300,
    stopOnError: true,
  });

  const isError = !control.pending && control.touched;
  const isValid = !control.pending && control.valid;

  const checking = 'Checking username...';
  const available = 'Username available!';
  const taken = 'Username already taken.';
  const min = 'Username must be at least 3 characters.';
  const max = 'Username must be at most 10 characters.';

  return (
    <>
      <div className="flex flex-col">
        <p className="[&&]:mb-0">
          <span className="text-yellow-500">{control.pending && checking}</span>
          <span className="text-green-500">{isValid && available}</span>

          <span className="text-red-500">{isError && control.hasError('username-taken') && taken}</span>
          <span className="text-red-500">{isError && control.hasError('minLength') && min}</span>
          <span className="text-red-500">{isError && control.hasError('maxLength') && max}</span>
        </p>
        <p>
          <Input {...control.bind} placeholder="This control has a long running task" />
        </p>
      </div>
      <Prism
        code={`// A custom validator that simulates a longer than usual running task
// This example uses a random number to determine if the username is taken
// If the random number is greater than 0.5, the username is taken
// We want to give this validator a custom error code so we can display a custom message to the user
const CheckUsername = () => {
  return {
    code: 'username-taken',
    validate: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return Math.random() > 0.5;
    },
  };
}

// Creates a form control with an initial value of an empty string and a custom validator
// This control has extra options to debounce the validation and stop on the first error
// If we don't stop on the first error, all validators will run even if one fails
// and if we were doing real http requests, this would be a waste of resources
const control = useControl('', {
  validators: [minLength(3), maxLength(10), CheckUsername],
  useDebounce: 300,
  stopOnError: true,
});

// Let's save to some variables to make the jsx more readable
// These will test if the control is in a specific state
const isError = !control.pending && control.touched;
const isValid = !control.pending && control.valid;
// These are the messages we will display to the user
const checking = 'Checking username...';
const available = 'Username available!';
const taken = 'Username already taken.';
const minLength = 'Username must be at least 3 characters.';
const maxLength = 'Username must be at most 10 characters.';

// Here we will display the status of the control
return (
  <>
    <p>
      <span className="text-yellow-500">{control.pending && checking}</span>
      <span className="text-green-500">{isValid && available}</span>

      <span className="text-red-500">{isError && control.hasError('username-taken') && taken}</span>
      <span className="text-red-500">{isError && control.hasError('minLength') && minLength}</span>
      <span className="text-red-500">{isError && control.hasError('maxLength') && maxLength}</span>
    </p>
    <p>
      <input type="text" {...control.bind} />
    </p>
  </>
);`}
      />
    </>
  );
};

export const FormControl = () => {
  return (
    <>
      <Docs.Root title="Form Control">
        <Docs.Description>{description}</Docs.Description>
        <Docs.Import
          items={[
            ['useControl', 'forms'],
            ['Validation', 'forms'],
          ]}
        />

        <Docs.Examples>
          <Examples.Example>
            <Examples.Description>
              The following example demonstrates how to create a form control using the `useControl` hook. It creates a text input control
              with an initial value of an empty string. This control doesn't do to much, but it's a good starting point.
            </Examples.Description>
            <FormControlExample />
          </Examples.Example>
          <Examples.Example title="Form Control with Validation">
            <Examples.Description>
              The following example demonstrates how to create a form control with validation. It creates a text input control with an
              initial value of an empty string and a validator that requires the value to be at least 5 characters long.
            </Examples.Description>
            <FormControlWithValidationExample />
          </Examples.Example>
          <Examples.Example title="Form Control with Async Validation">
            <Examples.Description>
              The following example demonstrates how to create a form control with async validation. It creates a text input control with an
              initial value of an empty string and a validator that simulates a long running task.
            </Examples.Description>
            <AsyncFormControlExample />
          </Examples.Example>
        </Docs.Examples>
      </Docs.Root>
    </>
  );
};
