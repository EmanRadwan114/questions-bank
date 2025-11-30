import React, { createContext, useState, type ReactNode } from "react";
import type { IQuestion } from "../types/interfaces";

interface IProps {
  children: ReactNode;
}

interface IContext {
  questions: IQuestion[];
  setQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}

const QuestionsContext = createContext<IContext>({
  questions: [],
  setQuestions: () => {},
});

const QuestionsContextProvide: React.FC<IProps> = ({ children }) => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};

export { QuestionsContext, QuestionsContextProvide };
