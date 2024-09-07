import { useClassList } from '@willikers/dom/class-list';
import { ForwardedRef, forwardRef } from 'react';

export interface ButtonProps {
  className?: string;
  value?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = forwardRef(
  ({ className, onClick, value, type, children, disabled }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const classes = useClassList(
      {
        'px-4 py-2 outline-none rounded-md bg-sky-500': true,
        'text-white': true,
        'hover:bg-sky-600': true,
        'outline-offset-2 focus-within:outline-blue-500': true,
        'disabled:bg-opacity-10 disabled:text-gray-500': true,
        // 'disabled:text-gray-50 disabled:bg-gray-500': true,
        [className ?? '']: true,
      },
      [className],
    );

    return (
      <button ref={ref} className={`${classes}`} onClick={onClick} value={value} type={type ?? 'button'} disabled={disabled}>
        {children}
      </button>
    );
  },
);
