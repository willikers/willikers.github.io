import { Prism } from '@ui/prism/prism';
import { ReactNode } from 'react';
import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

function RouterLink(props: { href: string; children: ReactNode }) {
  return props.href.match(/^(https?:)?\/\//) ? <a href={props.href}>{props.children}</a> : <Link to={props.href}>{props.children}</Link>;
}

export const MarkdownDoc = ({ children, text }: { children?: string; text?: string }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        a(props) {
          const { children, href } = props;
          return <RouterLink href={href ?? ''}>{children}</RouterLink>;
        },
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <Prism {...rest} code={String(children).replace(/\n$/, '')} />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {text ?? children}
    </Markdown>
  );
};
