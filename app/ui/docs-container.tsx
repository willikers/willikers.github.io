import { Examples as E } from '@ui/example';
import { Header as Heading } from '@ui/header';
import { MarkdownDoc } from '@ui/markdown/markdown';
import { Prism } from '@ui/prism/prism';
import { Answer as A, Question as Q, QAndA as QnA } from '@ui/q-and-a';
import { useSelectNode } from '@willikers/dom/select-node';
import { useSelectNodes } from '@willikers/dom/select-nodes';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

type DocsElement = ReactElement | ReactElement[] | ReactNode | ReactNode[];

const Root = ({ children, title }: { children: DocsElement; title?: string }) => {
  const header = useSelectNode(Header, children);
  const qAndAs = useSelectNode(QAndA, children);
  const examples = useSelectNode(Examples, children);
  const imports = useSelectNode(Import, children);
  const description = useSelectNode(Description, children);
  const usage = useSelectNodes(Usage, children);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        {title ? <Header title={title} /> : header}
        {qAndAs}
      </div>
      {imports}
      {description}
      {usage}
      {examples}
    </div>
  );
};

const Header = ({ children, title }: { children?: DocsElement; title?: string }) => {
  return <Heading>{title ?? children}</Heading>;
};

const QAndA = ({ children }: { children: DocsElement }) => {
  const question = useSelectNode(Question, children);
  const answer = useSelectNode(Answer, children);
  return (
    <QnA>
      <Q>{question}</Q>
      <A>{answer}</A>
    </QnA>
  );
};

const Question = ({ children }: { children: DocsElement }) => {
  return <>{children}</>;
};

const Answer = ({ children }: { children: DocsElement }) => {
  return <>{children}</>;
};

const Examples = ({ children }: { children: DocsElement }) => {
  return <E.Root>{children}</E.Root>;
};

const Import = ({ items }: { items: [name: string, path: string][] }) => {
  let imports: { path: string; vars: string[] }[] = [];
  items.forEach(([name, path]) => {
    const imp = imports.find(i => i.path === path) ?? { path, vars: [] };
    imp.vars.push(name);
    if (!imports.includes(imp)) imports.push(imp);
  });
  return (
    <div className="flex flex-col gap-2">
      <Heading type="h2">Importing</Heading>
      <Prism code={imports.map(i => `import { ${i.vars.join(', ')} } from '@willikers/${i.path}';`).join('\n')} />
    </div>
  );
};

const Description = ({ children, text }: { children?: string; text?: string }) => {
  return (
    <div className="flex flex-col">
      <Heading type="h2">Description</Heading>
      <MarkdownDoc text={text} children={children} />
    </div>
  );
};

const Usage = ({ children, title }: { children: DocsElement; title?: string }) => {
  const strings = useSelectNodes(CodeUsage, children);
  const [code, setCode] = useState<string[]>([]);

  useEffect(() => {
    if (strings.length > 0) {
      setCode(strings.map((s: any) => (s.props.comment ? `// ${s.props.comment}\n` : '') + s.props.code));
    } else {
      setCode([]);
    }
  }, [strings]);

  return (
    <div className="flex flex-col gap-4">
      <Heading type="h2" className="flex place-content-between">
        <span>Usage</span>
        {title && <span className="text-[0.6em]">{title}</span>}
      </Heading>
      <Prism code={code.join('\n')} />
    </div>
  );
};

const CodeUsage = ({ code, comment }: { code: string; comment?: string }) => {
  useState<string>(code);
  useState<string | undefined>(comment);
  return <></>;
};

export const Docs = {
  Root,
  Header,
  QAndA,
  Question,
  Answer,
  Examples,
  Import,
  Description,
  Usage,
  CodeUsage,
};
