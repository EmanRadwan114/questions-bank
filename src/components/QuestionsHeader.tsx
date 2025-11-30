import React, { useContext } from "react";
import Button from "./ui/Button";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { toast } from "react-toastify";

const QuestionsHeader: React.FC = () => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const clearQuestions = () => {
    setQuestions([]);
    toast.success("List is cleared successfully!");
  };

  return (
    <header>
      <p className="text-xl capitalize mb-3 text-center">
        you have{" "}
        <span className="text-fuchsia-800 font-semibold">
          {questions.length}
        </span>{" "}
        {questions.length === 1 ? "Question" : "Questions"} in your questions
        bank
      </p>
      <Button
        additionalClassName="bg-red-800 text-white w-full"
        onClick={clearQuestions}
      >
        Clear List
      </Button>
    </header>
  );
};

export default QuestionsHeader;
