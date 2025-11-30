import React, { useContext, useState } from "react";
import QuestionAccordion from "./ui/QuestionAccordion";
import { QuestionsContext } from "../contexts/QuestionsContext";
import type { IQuestion } from "../types/interfaces";
import NotFound from "./NotFound";
import QuestionsHeader from "./QuestionsHeader";

const QuestionsList: React.FC = () => {
  const { questions } = useContext(QuestionsContext);
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(
    null
  );

  return (
    <>
      {questions.length ? (
        <div className="flex flex-col gap-y-10">
          <QuestionsHeader />
          <div className="flex flex-col gap-y-3 justify-center min-h-5/12">
            {questions.map((item) => (
              <QuestionAccordion
                key={item.id}
                question={item}
                onSelect={setSelectedQuestion}
                selectedQuestion={selectedQuestion ?? questions[0]}
              />
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default QuestionsList;
