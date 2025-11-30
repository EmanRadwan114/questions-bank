import React from "react";
import type { IQuestion } from "../../types/interfaces";
import { ChevronUp, Trash2 } from "lucide-react";

interface IProps {
  question: IQuestion;
  selectedQuestion: IQuestion | null;
  onSelect: (param: () => IQuestion | null) => void;
}

const QuestionAccordion: React.FC<IProps> = ({
  question,
  onSelect,
  selectedQuestion,
}) => {
  const isSelected = selectedQuestion?.id === question.id;

  const handleSelect = () => {
    onSelect(() => (isSelected ? null : question));
  };

  return (
    <div className="bg-white rounded-md">
      <header
        className={`flex justify-between items-center cursor-pointer px-3 py-2 transition-colors duration-500 ${
          isSelected
            ? "bg-fuchsia-300 rounded-t-md "
            : "bg-gray-300 rounded-md "
        }`}
        onClick={handleSelect}
      >
        <h3 className="capitalize text-xl font-semibold">
          {question.question}
        </h3>
        <ChevronUp
          className={`transition-transform duration-300 ${
            isSelected ? "rotate-180" : "rotate-0"
          }`}
        />
      </header>
      <div
        className={`grid transition-[grid-template-rows] duration-300 overflow-hidden ${
          isSelected ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-3 flex justify-between items-center">
            <p className="text-lg">{question.answer}</p>
            <Trash2
              className="text-red-800 cursor-pointer p-1"
              size={28}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAccordion;
