/**
 * Validates that a control has a value.
 */
export const required = () => {
  return {
    code: 'required',
    message: 'This field is required',
    validate: (value: string) => value.trim().length > 0,
  };
};
/**
 * Validates that a control has a minimum length.
 * @param length The minimum length of the control.
 */
export const minLength = (length: number) => () => {
  return {
    code: 'minLength',
    message: `This field must be at least ${length} characters long`,
    validate: (value: string) => value.trim().length >= length,
  };
};
/**
 * Validates that a control has a maximum length.
 * @param length The maximum length of the control.
 */
export const maxLength = (length: number) => () => {
  return {
    code: 'maxLength',
    message: `This field must be at most ${length} characters long`,
    validate: (value: string) => value.length <= length,
  };
};
/**
 * Validates that a control is a valid email address.
 */
export const email = () => {
  return {
    code: 'email',
    message: 'This field must be a valid email address',
    validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  };
};
/**
 * Validates that a control matches a specific pattern.
 * @param pattern The regular expression pattern to match.
 */
export const pattern = (pattern: RegExp) => () => {
  return {
    code: 'pattern',
    message: 'This field does not match the required pattern',
    validate: (value: string) => pattern.test(value),
  };
};
/**
 * Matches a control against another control in that they both have the same value.\
 * @param control The control to match against.
 */
export const matchesControl = (control: Function) => () => {
  return {
    code: 'matchesControl',
    message: 'This field must match the other field',
    validate: async (value: string) => {
      const refControl = control();
      await refControl.validate();
      return refControl.value === value;
    },
  };
};
