import { useClassList } from '@willikers/dom/class-list';
import { ChangeEvent, ForwardedRef, forwardRef } from 'react';

export interface InputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

export const Input = forwardRef(
  ({ className, placeholder, value, type, onChange, onBlur, onFocus }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const classes = useClassList(
      {
        'p-2 w-full outline-none rounded-md text-gray-900': true,
        'outline-offset-2 focus-within:outline-blue-500': true,
        className,
      },
      [className],
    );

    return (
      <input
        type={type ?? 'text'}
        ref={ref}
        placeholder={placeholder}
        className={classes}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete="one-time-code"
      />
    );
  },
);
