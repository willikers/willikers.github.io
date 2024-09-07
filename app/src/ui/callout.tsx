import { useClassList } from '@willikers/dom/class-list';

export const Callout = ({ children, type }: { children: React.ReactNode; type: 'info' | 'warning' | 'success' | 'danger' }) => {
  type = type || 'info';
  const classes = useClassList(
    {
      callout: true,
      'border-l-4 p-4 bg-opacity-10 rounded-md shadow': true,
      'border-blue-500 bg-blue-500': type === 'info',
      'border-yellow-500 bg-yellow-500': type === 'warning',
      'border-green-500 bg-green-500': type === 'success',
      'border-red-500 bg-red-500': type === 'danger',
    },
    [],
  );

  return <div className={classes}>{children}</div>;
};
