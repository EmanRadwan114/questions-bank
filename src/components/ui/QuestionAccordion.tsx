import React, { useContext } from "react";
import type { IQuestion } from "../../types/interfaces";
import { ChevronUp, Trash2 } from "lucide-react";
import { QuestionsContext } from "../../contexts/QuestionsContext";
import { toast } from "react-toastify";

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
  const { setQuestions } = useContext(QuestionsContext);

  const isSelected = selectedQuestion?.id === question.id;

  const handleSelect = () => {
    onSelect(() => (isSelected ? null : question));
  };

  const handleDeleteQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((item) => item.id !== id));
    toast.success("Question is deleted successfully!");
  };

  return (
    <div className="bg-white rounded-sm shadow-md">
      <header
        className={`flex justify-between items-start cursor-pointer px-3 py-2 transition-colors duration-500 ${
          isSelected
            ? "bg-fuchsia-300 rounded-t-md "
            : "bg-gray-300 rounded-sm "
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
          <div className="p-3 flex justify-between items-start">
            <p className="text-lg">{question.answer}</p>
            <Trash2
              className="text-red-800 cursor-pointer p-1"
              size={28}
              onClick={() => {
                handleDeleteQuestion(question.id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAccordion;
