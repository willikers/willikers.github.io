import { Button } from '@ui/button';
import { Docs } from '@ui/docs-container';
import { Examples } from '@ui/example';
import { Input } from '@ui/input';
import { Prism } from '@ui/prism/prism';
import { email, matchesControl, minLength, useControl, useFormGroup } from '@willikers/forms';
import { useEffect, useState } from 'react';

const description = /* markdown */ `
The form builder is a utility that simplifies the process of creating forms with validation. It uses the \`useControl\` hook to create form controls with validation rules and the \`useFormGroup\` hook to manage the form state and validation.

### Validators


`;

export const EmailPassword = () => {
  const fg = useFormGroup({
    email: useControl('', [email]),
    password: useControl('', [minLength(8)]),
  });
  return (
    <>
      <form>
        <p className="flex place-items-center">
          <label htmlFor="username" className="flex-shrink-0 basis-24">
            Email
          </label>
          <Input {...fg.controls.email.bind} />
        </p>
        <p className="flex place-items-center">
          <label htmlFor="password" className="flex-shrink-0 basis-24">
            Password
          </label>
          <Input {...fg.controls.password.bind} type="password" />
        </p>
        <p className="flex place-content-end">
          <Button type="submit" disabled={fg.invalid}>
            Submit
          </Button>
        </p>
      </form>

      <Prism
        code={`// Create the form builder
const fg = useFormGroup({
  // Create a control that validates an email address
  email: useControl('', [email]),
  // Create a control that validates a password with a minimum length of 8 characters
  password: useControl('', [minLength(8)]),
});

return (
  <form>
    <input type="text" {...fg.controls.email.bind} />
    <input type="password" {...fg.controls.password.bind} />
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`}
      />
    </>
  );
};

export const CustomValidator = () => {
  const HasString = (val: string) => () => {
    return {
      code: 'hasFoo',
      message: 'The value must include the string "foo"',
      validate: (value: string) => value.includes(val),
    };
  };

  const fg = useFormGroup({
    hasFoo: useControl('', [HasString('foo')]),
  });

  return (
    <>
      <p className="flex place-items-center">
        <label htmlFor="hasFoo" className="flex-shrink-0 basis-24">
          Has Foo
        </label>
        <Input {...fg.controls.hasFoo.bind} />
      </p>
      <p className="flex place-content-end">
        <Button disabled={fg.invalid}>Submit</Button>
      </p>
      <Prism
        code={`// Create a custom validator that checks if a string includes a specific value
const HasString = (val: string) => () => {
  // The validator must return an object with a validate function that returns a boolean
  // In this case, the validator checks if the value includes the string 'foo'
  return {
    code: 'hasFoo',
    message: 'The value must include the string "foo"',
    validate: (value: string) => value.includes(val),
  };
}

// Create the form builder
const fg = useFormGroup({
  hasFoo: useControl('', [HasString('foo')]),
});

return (
  <form>
    <input type="text" {...fg.controls.hasFoo.bind} />
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`}
      />
    </>
  );
};

export const NoValidation = () => {
  const fg = useFormGroup({
    email: useControl(''),
    password: useControl(''),
  });

  return (
    <>
      <form>
        <p className="flex place-items-center">
          <label htmlFor="username" className="flex-shrink-0 basis-24">
            Email
          </label>
          <Input {...fg.controls.email.bind} />
        </p>
        <p className="flex place-items-center">
          <label htmlFor="password" className="flex-shrink-0 basis-24">
            Password
          </label>
          <Input {...fg.controls.password.bind} type="password" />
        </p>
        <p className="flex place-content-end">
          <Button type="submit" disabled={fg.invalid}>
            Submit
          </Button>
        </p>
      </form>

      <Prism
        code={`// Create the form builder with no validation
const fg = useFormGroup({
  email: useControl(''),
  password: useControl(''),
});

return (
  <form>
    <input type="text" {...fg.controls.email.bind} />
    <input type="password" {...fg.controls.password.bind} />
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`}
      />
    </>
  );
};

export const Matchers = () => {
  const fg = useFormGroup({
    password: useControl('', [minLength(8)]),
    repeatPassword: useControl('', [matchesControl(() => fg.controls.password)]),
  });

  return (
    <>
      <form>
        <p className="flex place-items-center">
          <label htmlFor="password" className="flex-shrink-0 basis-36">
            Password
          </label>
          <Input {...fg.controls.password.bind} type="password" />
        </p>
        <p className="flex place-items-center">
          <label htmlFor="repeatPassword" className="flex-shrink-0 basis-36">
            Repeat Password
          </label>
          <Input {...fg.controls.repeatPassword.bind} type="password" />
        </p>
        <p className="flex place-content-end">
          <Button type="submit" disabled={fg.invalid}>
            Submit
          </Button>
        </p>
      </form>
      <Prism
        code={`// Create the form builder with a password field that must match another field
const fg = useFormGroup({
  password: useControl('', [minLength(8)]),
  repeatPassword: useControl('', [matchesControl(() => password)]),
});

return (
  <form>
    <input type="password" {...fg.controls.password.bind} />
    <input type="password" {...fg.controls.repeatPassword.bind} />
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`}
      />
    </>
  );
};

export const ErrorHandling = () => {
  const fg = useFormGroup({
    email: useControl('', [email]),
    password: useControl('', [minLength(8)]),
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    setEmailError(fg.controls.email.hasError('email') ? 'Invalid email address' : '');
    setPasswordError(fg.controls.password.hasError('minLength') ? 'Password must be at least 8 characters' : '');
  }, [fg.errors]);

  return (
    <>
      <form>
        <p className="flex place-items-center">
          <label htmlFor="username" className="flex-shrink-0 basis-24">
            Email
          </label>
          <Input {...fg.controls.email.bind} />
        </p>
        <p className="flex place-items-center">
          <label htmlFor="password" className="flex-shrink-0 basis-24">
            Password
          </label>
          <Input {...fg.controls.password.bind} type="password" />
        </p>
        <p className="flex place-content-between">
          <span className="flex flex-col text-red-500">
            {emailError && <span>{emailError}</span>}
            {passwordError && <span>{passwordError}</span>}
          </span>
          <Button type="submit" disabled={fg.invalid}>
            Submit
          </Button>
        </p>
      </form>
      <Prism
        code={`// Create the form builder
const fg = useFormGroup({
  email: useControl('', [email]),
  password: useControl('', [minLength(8)]),
});
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');

useEffect(() => {
  setEmailError(fg.controls.email.hasError('email') ? 'Invalid email address' : '');
  setPasswordError(fg.controls.password.hasError('minLength') ? 'Password must be at least 8 characters' : '');
}, [fg.errors]);

return (
  <form>
    <input type="text" {...fg.controls.email.bind} />
    <input type="password" {...fg.controls.password.bind} />
    {emailError && <span>{emailError}</span>}
    {passwordError && <span>{passwordError}</span>}
    <button type="submit" disabled={fg.invalid}>Submit</button>
  </form>
);`}
      />
    </>
  );
};

export const FormSubmission = () => {
  const fg = useFormGroup(
    {
      email: useControl('', [email]),
      password: useControl('', [minLength(8)]),
    },
    { when: 'submit' },
  );

  useEffect(() => {
    if (fg.valid && fg.submitted) {
      console.log('submit');
    }
  }, [fg.valid, fg.submitted]);

  return (
    <form {...fg.bind}>
      <p className="flex place-items-center">
        <label htmlFor="username" className="flex-shrink-0 basis-24">
          Email
        </label>
        <Input {...fg.controls.email.bind} />
      </p>
      <p className="flex place-items-center">
        <label htmlFor="password" className="flex-shrink-0 basis-24">
          Password
        </label>
        <Input {...fg.controls.password.bind} type="password" />
      </p>
      <p className="flex place-content-end">
        <Button type="submit">Submit</Button>
      </p>
    </form>
  );
};

export const FormGroup = () => {
  return (
    <Docs.Root title="Form Group">
      <Docs.Description>{description}</Docs.Description>
      <Docs.Import
        items={[
          ['useFormGroup', 'forms'],
          ['useControl', 'forms'],
          ['Validators', 'forms'],
        ]}
      />
      <Docs.Examples>
        <Examples.Example title="Email and Password Form">
          <Examples.Description>
            This example shows how to create a form that validates an email and password. The email must be a valid email address, and the
            password must be at least 8 characters long.
          </Examples.Description>
          <EmailPassword />
        </Examples.Example>
        <Examples.Example title="Custom Validator">
          <Examples.Description>
            This example shows how to create a custom validator that checks if a string includes a specific value. In this case, the value
            is `foo`.
          </Examples.Description>
          <CustomValidator />
        </Examples.Example>
        <Examples.Example title="No Validation">
          <Examples.Description>
            This example shows how to create a form with no validation. The form has an email and password field that do not have any
            validation rules.
          </Examples.Description>
          <NoValidation />
        </Examples.Example>
        <Examples.Example title="Control Matching">
          <Examples.Description>
            This example shows how to create a form with a password field that must match another field. In this case, the password field
            must match the repeat password field.
          </Examples.Description>
          <Matchers />
        </Examples.Example>
        <Examples.Example title="Error Handling">
          <Examples.Description>
            When a form control is invalid, you often want to display an error message to the user. This example shows how to handle errors
            in a form.
          </Examples.Description>
          <ErrorHandling />
        </Examples.Example>
        <Examples.Example title="Form Submission">
          <Examples.Description>
            This example shows how to handle form submission. The form will only validate when the form is submitted.
          </Examples.Description>
          <FormSubmission />
        </Examples.Example>
      </Docs.Examples>
    </Docs.Root>
  );
};
