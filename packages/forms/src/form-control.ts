import { useDebounceTime } from '@willikers/rxjs/debounce-time';
import isEqual from 'lodash/isEqual';
import { RefObject, useEffect, useRef, useState } from 'react';
import { firstValueFrom, Observable } from 'rxjs';

export type ControlResult = {
  /**
   * The bindings that should be passed to the input element.
   * @example
   * const control = useControl('');
   * return <input type="text" {...control.bind} />
   */
  bind: {
    /**
     * The value of the form control element.
     */
    value: string;
    /**
     * The event handler for the onChange event.
     * @param e The event that triggered the change.
     */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * The event handler for the onBlur event.
     */
    onBlur: () => void;
    onFocus: () => void;
    /**
     * The ref to the form control element.
     */
    ref: RefObject<HTMLInputElement>;
  };
  /**
   * Whether or not the control is pending.\
   * A control is pending if the validation is in progress.
   */
  pending: boolean;
  /**
   * Whether or not the control has been touched.\
   * A control is touched if the onBlur event has been triggered.
   */
  touched: boolean;
  /**
   * Whether or not the control has been modified.\
   * A control is dirty if the value is different than the initial value.
   */
  dirty: boolean;
  /**
   * Whether or not the control is valid.\
   * A control is valid if all the validators pass.
   */
  valid: boolean;
  /**
   * Whether or not the control is invalid.\
   * A control is invalid if any of the validators fail.
   */
  invalid: boolean;
  /**
   * The errors that have been triggered by the validators.\
   * The key is the error code and the value is the error message.
   */
  errors: Record<string, string>;
  /**
   * Whether or not the control value is empty.
   */
  isEmpty: () => boolean;
  /**
   * Whether or not the control has a specific error.
   * @param error The error code to check for.
   */
  hasError: (error: string) => boolean;
  /**
   * Sets the value of the control manually.
   * @param value The value to set the control to.
   */
  setValue: (value: string) => void;
  /**
   * Manually triggers the validation of the control.
   */
  validate: () => Promise<void>;
  /**
   * @internal
   * These should not be used outside of the form control/group.
   */
  internal: {
    /**
     * @internal
     * This is used by the form group to manually trigger the validation of the control.
     */
    setManualValidate: (value: boolean) => void;
    /**
     * @internal
     * This is used by the form group to set the validation timing of the control.\
     * @param timing The timing to set the validation to.
     */
    setValidationTiming: (timing: ValidationTiming | ValidationTiming[]) => void;
    /**
     * @internal
     * This is used by the form group to check if the control has its own validation timing.
     */
    setOwnTiming: boolean;
  };
};

export type ValidationTiming = 'blur' | 'change' | 'manual' | 'submit';

export interface ControlOptions {
  /**
   * When to validate the control. Default is `onChange`.\
   * If an array of options is provided, the control will be validated on all of the provided options.
   */
  when?: ValidationTiming | ValidationTiming[];
  /**
   * Whether to debounce the validation of the control. Default is `0` (no debounce).\
   * If a number is provided, the validation will be debounced by that amount of time.
   */
  useDebounce?: number;
  /**
   * The validators to use for the control.\
   * If a function is provided, it will be used as a custom validator.\
   * If an array of functions is provided, they will be used as validators.
   */
  validators?: Function[] | Function;
  /**
   * Whether to stop the validation of the control on the first error. Default is `false`.\
   * If true, the validation will stop on the first error and not continue with the remaining validators.\
   * This means that the order of the validators is important when this option is set to `true`.
   */
  stopOnError?: boolean;
}

const hasValidationTiming = (timing: ValidationTiming | ValidationTiming[] | undefined, option: ValidationTiming) => {
  if (Array.isArray(timing)) return timing.includes(option);
  return timing === option;
};

const hasValidators = (validators: Function[] | Function | undefined): validators is Function[] | Function => {
  return typeof validators !== 'undefined' && (Array.isArray(validators) ? validators.length > 0 : true);
};
/**
 * Creates a form control that can be used to validate form inputs.
 * @param defaultValue The initial value of the control.
 * @param validators The validators to use for the control.
 * @param options The options for the control.
 */
export function useControl(defaultValue: string, validators: Function[] | Function, options: ControlOptions): ControlResult;
export function useControl(defaultValue: string, validators: Function[] | Function): ControlResult;
/**
 * Creates a form control that can be used to validate form inputs.
 * @param defaultValue The initial value of the control.
 * @param options The options for the control.
 */
export function useControl(defaultValue: string, options: ControlOptions): ControlResult;
/**
 * Creates a form control that can be used to validate form inputs.
 * @param defaultValue The initial value of the control.
 */
export function useControl(defaultValue: string): ControlResult;
/**
 * Creates a form control that can be used to validate form inputs. The default value is an empty string.
 */
export function useControl(): ControlResult;
export function useControl(
  ...args: [] | [string] | [string, Function[] | Function] | [string, ControlOptions] | [string, Function[] | Function, ControlOptions]
): ControlResult {
  const internal = { setOwnTiming: false };
  const defaultValue = args[0] ?? '';
  let validators: Function[] | Function | undefined;
  let options = { when: 'change', useDebounce: 0, validators: [], stopOnError: false } as Required<ControlOptions>;
  const cssClasses = ['ctrl-valid', 'ctrl-invalid', 'ctrl-dirty', 'ctrl-pristine', 'ctrl-touched', 'ctrl-untouched', 'ctrl-pending'];

  // Get the validators that were passed in.
  if ((args[1] && typeof args[1] === 'function') || Array.isArray(args[1])) {
    validators = args[1];
  } else if (args[1] && typeof args[1] === 'object' && !Array.isArray(args[1])) {
    validators = args[1].validators;
  }

  // Get the options that were passed in.
  if (args[1] && typeof args[1] === 'object' && !Array.isArray(args[1])) {
    internal.setOwnTiming = typeof args[1].when !== 'undefined';
    Object.assign(options, args[1]);
  } else if (args[2] && typeof args[2] === 'object' && !Array.isArray(args[2])) {
    internal.setOwnTiming = typeof args[2].when !== 'undefined';
    Object.assign(options, args[2]);
  }

  // Set the initial state of the control.
  const [touched, setTouched] = useState(false);
  const [pending, setPending] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [initialValue] = useState(defaultValue);
  const [value, setValue] = useState(defaultValue);
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [manualValidate, setManualValidate] = useState(false);
  const [blur, setBlur] = useState(false);
  const elementRef = useRef<HTMLInputElement>(null);

  // If the control has a debounce time, debounce the validation.
  if (options.useDebounce > 0) {
    // If the control is set to validate on change, debounce the validation.
    if (hasValidationTiming(options.when, 'change')) {
      const debounce = useDebounceTime(value, options.useDebounce, () => validate());
      // prettier-ignore
      useEffect(() => { validate(); }, [debounce]);
    }
    // If the control is set to validate on blur, debounce the validation.
    if (hasValidationTiming(options.when, 'blur')) {
      const debounce = useDebounceTime(blur, options.useDebounce);
      // prettier-ignore
      useEffect(() => { validate(); }, [debounce]);
    }
  }

  // Trigger the validation when the control's value changes.
  useEffect(() => {
    // If the control is being controlled by a form group, let the form group handle the validation when the value changes.
    if (manualValidate) return;
    // If the control is set to validate on change, validate the control (default).
    if (!options.useDebounce && hasValidationTiming(options.when, 'change')) validate();
  }, [value]);

  // Add the CSS classes to the element when the control state changes.
  useEffect(() => {
    if (elementRef.current) {
      const classes = [];
      const errorCount = Object.keys(errors).length;
      if (errorCount > 0) classes.push('ctrl-invalid');
      else classes.push('ctrl-valid');
      if (dirty) classes.push('ctrl-dirty');
      else classes.push('ctrl-pristine');
      if (touched) classes.push('ctrl-touched');
      else classes.push('ctrl-untouched');
      if (pending) classes.push('ctrl-pending');
      elementRef.current.classList.remove(...cssClasses);
      elementRef.current.classList.add(...classes);
    }
  }, [dirty, touched, pending]);

  /**
   * This is the primary validation function for the control.\
   * It will validate the control based on the validators provided.
   */
  const validate = async () => {
    if (!hasValidators(validators)) {
      setValid(true);
      setInvalid(false);
      return;
    }

    // Convert the validatorOpts to an array if it is not already
    const validatorArray: Function[] = Array.isArray(validators) ? validators : [validators];
    const newErrors: Record<string, string> = {};

    for (const validator of validatorArray) {
      if (typeof validator === 'function') {
        const validation = validator();
        if (typeof validation === 'undefined') continue;
        let valid = validation.validate(value) as boolean | Promise<boolean> | Observable<boolean>;
        if (valid instanceof Promise || valid instanceof Observable) setPending(true);
        if (valid instanceof Promise) {
          valid = await valid;
        } else if (valid instanceof Observable) {
          valid = await firstValueFrom(valid);
        }
        setPending(false);
        if (!valid) newErrors[validation.code ?? ''] = validation.message ?? '';
        if (options.stopOnError && !valid) break;
      }
    }

    const errorCount = Object.keys(newErrors).length;
    setValid(errorCount === 0);
    setInvalid(errorCount > 0);
    setDirty(value !== initialValue);

    // Do not update the state if the errors are the same
    if (isEqual(Object.keys(errors), Object.keys(newErrors))) return;
    setErrors(newErrors);
  };

  /**
   * This function is used to manually set the value of the control.
   * @param e The event that triggered the change.
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  /**
   * This is used to set the touched state of the control.\
   * It will also trigger the validation of the control if the control is set to validate on blur and there is no debounce.
   */
  const onBlur = () => {
    setTouched(true);
    setBlur(true);
    if (!options.useDebounce && hasValidationTiming(options.when, 'blur')) validate();
  };
  const onFocus = () => setBlur(false);
  /**
   * Checks to see if the control value is empty.
   */
  const isEmpty = () => value.trim().length === 0;
  /**
   * Checks to see if the control has a specific error code.
   * @param value The value to set the control to.
   */
  const hasError = (error: string) => typeof errors[error] !== 'undefined';
  /**
   * Sets the timing for the control, this should only be used by the form group.
   * @param timing The timing to set the validation to.
   */
  const setValidationTiming = (timing: ValidationTiming | ValidationTiming[]) => (options.when = timing);

  return {
    bind: {
      value,
      onChange,
      onBlur,
      onFocus,
      ref: elementRef,
    },
    touched,
    pending,
    dirty,
    valid,
    invalid,
    errors,
    isEmpty,
    hasError,
    setValue,
    validate,
    internal: {
      setManualValidate,
      setValidationTiming,
      ...internal,
    },
  };
}
