import { Header } from '@ui/header';
import { MarkdownDoc } from '@ui/markdown/markdown';
import { useSelectNode } from '@willikers/dom/select-node';
import { useSelectNodes } from '@willikers/dom/select-nodes';
import { ReactElement } from 'react';

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4">
      <Header type="h2">Examples</Header>
      {children}
    </div>
  );
};

const Example = ({ children, title }: { children: ReactElement | ReactElement[]; title?: string }) => {
  const description = useSelectNode(Description, children);
  const otherNodes = useSelectNodes(null, children, [Description]);
  return (
    <div className="example flex flex-col gap-10 overflow-auto rounded-md bg-slate-800 p-4">
      <div>
        {title && <Header type="h3">{title}</Header>}
        {description}
      </div>
      <div className="flex flex-col gap-2">{otherNodes}</div>
    </div>
  );
};

const Description = ({ children }: { children: string }) => {
  return (
    <div className="py-4">
      <MarkdownDoc text={children} children={children} />
    </div>
  );
};

export const Examples = {
  Root,
  Example,
  Description,
};
