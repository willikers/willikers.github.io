import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from './theme';

import './theme.scss';

export const Prism = ({ language, code }: { language?: string; code: string }) => {
  return (
    <div className="overflow-hidden rounded-md border border-slate-600">
      <SyntaxHighlighter language={language ?? 'jsx'} style={theme}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
