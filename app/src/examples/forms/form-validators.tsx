import { Docs } from '@ui/docs-container';

const description = /* markdown */ `
There are several built-in validators that can be used to validate form controls. These validators are passed to the \`useControl\` hook as an array of functions.

### Built-in Validators

#### Required

The first one is to make a control required. This is done by passing the \`required\` validator to the control. This validator checks to make sure that the value is not an empty string by checking the length of the value after trimming it.

~~~js
// Check if the value is not empty
export default () => {
  const username = useControl('', required);
};
~~~

#### Minimum Length

The next validator is to check the minimum length of a control. This is done by passing the \`minLength\` validator to the control. This validator checks to make sure that the value is at least a certain length. When used, it is okay to not use the \`required\` validator because the minimum length validator will also check for an empty string.

~~~js
// Check if the value is at least 8 characters long
export default () => {
  const password = useControl('', minLength(8));
};
~~~

#### Maximum Length

The next validator is to check the maximum length of a control. This is done by passing the \`maxLength\` validator to the control. This validator checks to make sure that the value is no more than a certain length.

~~~js
// Check if the value is no more than 20 characters long
export default () => {
  const username = useControl('', maxLength(20));
};
~~~

#### Email

The next validator is to check if a control is a valid email address. This is done by passing the \`email\` validator to the control. This validator checks to make sure that the value is a valid email address.

~~~js
// Check if the value is a valid email address
export default () => {
  const email = useControl('', email);
};
~~~

#### Regular Expression

The Regular Expression validator is a generic validator that can be used to check if a control matches a specific pattern. This is done by passing the \`pattern\` validator to the control. This validator checks to make sure that the value matches a specific regular expression pattern.

~~~js
// Check if the value is alphanumeric (letters and numbers only)
export default () => {
  const username = useControl('', pattern(/^[a-zA-Z0-9]+$/));
};
~~~

#### Matches Control

The Matches Control validator is a special validator that can be used to check if a control matches another control. This is done by passing the \`matchesControl\` validator to the control. This validator checks to make sure that the value matches the value of another control.

~~~js
// Check if the value matches the value of another control
export default () => {
  const password = useControl('', minLength(5));
  const confirmPassword = useControl('', matchesControl(() => password));
};
~~~

### Custom Validators

Custom validators allow you to create your own validators to check for specific conditions. These validators are passed to the \`useControl\` hook as a function that returns a boolean value. If the function returns \`true\`, the control is considered valid. If the function returns \`false\`, the control is considered invalid.

The validator requires that the returning object has a \`validate\` function that takes the input value and returns a \`boolean\`. There are then also two optional properties that can be added to the object, \`message\` and \`code\`. The message is a default error message that can be used when the control is invalid, and the code is a unique identifier for the error so that it can be used to identify the error.

The validator can return one of three values:
- \`boolean\` &ndash; Synchronous validation. This is the simplest form of validation and is used when the validation can be done immediately.
- \`Promise<boolean>\` &ndash; Browser native async validation. This is used when the validation requires an asynchronous operation, such as an API call.
- \`Observable<boolean>\` &ndash; RxJS async validation (**note** that the observable will *complete* on the first result). This is another way to handle asynchronous validation, but it is more powerful and flexible than the Promise-based validation.

#### Validator Without Arguments

There are two ways that a validator is created, the first way is without any arguments and the second way is with arguments. The first way is useful when the validator does not need any additional information to validate the control. It would look like this:

~~~js
// Check if the value is a valid phone number
const PhoneNumberValidator = () => {
  return {
    code: 'phone',
    message: 'Invalid phone number',
    validate: (value: string) => /^\d{3}-\d{3}-\d{4}$/.test(value),
  };
};
~~~

#### Validator With Arguments

The second way is when you need to pass additional information to the validator. This is done by creating a function that returns a function. The outer function is used to pass the additional information to the validator, and the inner function is the actual validator. It would look like this:

~~~js
// Check if the value contains a specific string
const HasStringValidator = (val: string) => () => {
  return {
    code: 'has-string',
    message: 'The value must contain the string',
    validate: (value: string) => value.includes(val),
  };
};
~~~
`;

export const FormValidators = () => {
  return (
    <Docs.Root title="Form Validators">
      <Docs.Description>{description}</Docs.Description>
      <Docs.Import
        items={[
          ['required', 'forms'],
          ['minLength', 'forms'],
          ['maxLength', 'forms'],
          ['email', 'forms'],
          ['pattern', 'forms'],
          ['matchesControl', 'forms'],
        ]}
      />
    </Docs.Root>
  );
};
