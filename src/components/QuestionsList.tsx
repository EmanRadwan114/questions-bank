import React, { useContext, useState } from "react";
import QuestionAccordion from "./ui/QuestionAccordion";
import { QuestionsContext } from "../contexts/QuestionsContext";
import type { IQuestion } from "../types/interfaces";

const QuestionsList: React.FC = () => {
  const { questions } = useContext(QuestionsContext);
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(
    null
  );

  console.log(selectedQuestion);

  return (
    <div className="w-full">
      {questions.map((item) => (
        <QuestionAccordion
          key={item.id}
          question={item}
          onSelect={setSelectedQuestion}
          selectedQuestion={selectedQuestion}
        />
      ))}
    </div>
  );
};

export default QuestionsList;
