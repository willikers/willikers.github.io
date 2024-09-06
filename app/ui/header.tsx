import { useClassList } from '@willikers/dom/class-list';
import { ForwardedRef, forwardRef } from 'react';

export interface InputProps {
  className?: string;
  children?: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Header = forwardRef(({ className, children, type }: InputProps, ref: ForwardedRef<HTMLHeadingElement>) => {
  type = type ?? 'h1';
  const classes = useClassList(
    {
      'text-4xl': type === 'h1',
      'text-3xl': type === 'h2',
      'text-2xl': type === 'h3',
      'text-xl': type === 'h4',
      'text-lg': type === 'h5',
      'text-base': type === 'h6',
      [className ?? '']: true,
    },
    [className],
  );

  const h1 = <h1 className={classes}>{children}</h1>;
  const h2 = <h2 className={classes}>{children}</h2>;
  const h3 = <h3 className={classes}>{children}</h3>;
  const h4 = <h4 className={classes}>{children}</h4>;
  const h5 = <h5 className={classes}>{children}</h5>;
  const h6 = <h6 className={classes}>{children}</h6>;

  return (
    <>
      {type === 'h1' && h1}
      {type === 'h2' && h2}
      {type === 'h3' && h3}
      {type === 'h4' && h4}
      {type === 'h5' && h5}
      {type === 'h6' && h6}
    </>
  );
});
