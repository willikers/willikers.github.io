import isEqual from 'lodash/isEqual';
import { FormEvent, RefObject, useEffect, useRef, useState } from 'react';
import { ControlResult, ValidationTiming } from './form-control';

export type FormItems<T> = {
  [K in keyof T]: ControlResult;
};

export interface FormResult<T> {
  touched: boolean;
  dirty: boolean;
  invalid: boolean;
  valid: boolean;
  submitted: boolean;
  controls: FormItems<T>;
  errors: Record<string, Record<string, string>>;
  hasError: (error: string) => boolean;
  bind: {
    ref: RefObject<HTMLFormElement>;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  };
}

export interface FormOptions {
  /**
   * Sets how the controls should be validated. Default is 'change'.\
   * If a control has its own timing, it will not be overridden by this option.\
   * This allows you to mix and match validation timings for different controls.
   */
  when?: ValidationTiming | ValidationTiming[];
  /**
   * A user defined function that will be called when the form is submitted and is valid.
   */
}

export const useFormGroup = <T>(formControls: FormItems<T>, formOptions?: FormOptions): FormResult<T> => {
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [invalid, setInvalid] = useState(true);
  const [errors, setErrors] = useState<Record<string, Record<string, string>>>({});
  const formControlsRef = useRef<HTMLFormElement>(null);

  // Get all controls
  const controls = Object.entries<ControlResult>(formControls);

  const options = Object.assign({ when: 'change' }, formOptions);

  const validateControls = () => {
    controls.forEach(([_, control]) => {
      control.internal.setManualValidate(true);
      control.validate();
    });
  };

  useEffect(() => {
    // Set the validation timing, use the control's timing as highest priority
    controls.forEach(([_, control]) => {
      if (!control.internal.setOwnTiming) {
        control.internal.setValidationTiming(options.when);
      }
    });

    // Validate all controls
    validateControls();

    // Check if any control is invalid
    const isInvalid = controls.some(([_, control]) => control.invalid);
    const isValid = controls.every(([_, control]) => control.valid);
    const touched = controls.some(([_, control]) => control.touched);
    const dirty = controls.some(([_, control]) => control.dirty);

    let newErrors = controls.reduce(
      (acc, [key, control]) => {
        acc[key] ??= {};
        if (control.invalid) acc[key] = control.errors;
        return acc;
      },
      {} as Record<string, Record<string, string>>,
    );
    // Remove empty objects
    newErrors = Object.entries(newErrors).reduce(
      (acc, [key, value]) => {
        if (Object.keys(value).length > 0) acc[key] = value;
        return acc;
      },
      {} as Record<string, Record<string, string>>,
    );

    // Set the form state
    setValid(isValid);
    setInvalid(isInvalid);
    setTouched(touched);
    setDirty(dirty);
    if (isEqual(errors, newErrors)) return;
    setErrors(newErrors);
  }, [formControls]);

  useEffect(() => {
    setSubmitted(false);
  }, [submitted]);

  const hasError = (error: string) => {
    if (error.includes('.')) {
      const [control, err] = error.split('.');
      return typeof errors[control]?.[err] !== 'undefined';
    }
    return typeof errors[error] !== 'undefined';
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (options.when === 'submit' || (Array.isArray(options.when) && options.when.includes('submit'))) {
      e.preventDefault();
      validateControls();
      setSubmitted(true);
    }
  };

  return {
    touched,
    dirty,
    invalid,
    valid,
    errors,
    hasError,
    submitted: submitted,
    bind: {
      onSubmit,
      ref: formControlsRef,
    },
    controls: { ...formControls },
  };
};
