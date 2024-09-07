import { useSelectNode } from '@willikers/dom/select-node';
import { ReactElement, ReactNode } from 'react';

export const Question = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <strong className="flex-shrink-0 basis-[30px]">Q:</strong>
      <span>{children}</span>
    </div>
  );
};

export const Answer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <strong className="flex-shrink-0 basis-[30px]">A:</strong>
      <span>{children}</span>
    </div>
  );
};

export const QAndA = ({ children }: { children: ReactElement[] }) => {
  const question = useSelectNode(Question, children);
  const answer = useSelectNode(Answer, children);
  return (
    <div className="flex flex-col gap-2">
      {question}
      {answer}
    </div>
  );
};
