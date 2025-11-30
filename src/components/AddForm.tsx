import React, { useContext, useState } from "react";
import Button from "./ui/Button";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { v4 as uuidv4 } from "uuid";

const AddForm: React.FC = () => {
  const { setQuestions } = useContext(QuestionsContext);

  const [newQuestion, setNewQuestion] = useState<{
    question: string;
    answer: string;
  }>({ question: "", answer: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewQuestion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (newQuestion.answer !== "" && newQuestion.question !== "") {
      setQuestions((prev) => [...prev, { ...newQuestion, id: uuidv4() }]);
    }
  };

  return (
    <div className="flex flex-col gap-y-2 bg-white shadow-xl p-3 rounded-sm">
      <input
        type="text"
        className="border-2 border-gray-700 w-full rounded-sm px-3 py-1.5 placeholder:text-gray-600"
        placeholder="Enter Your Question..."
        name="question"
        value={newQuestion?.question}
        onChange={handleChange}
      />
      <textarea
        className="border-2 border-gray-700 w-full rounded-sm px-3 py-1.5 placeholder:text-gray-600"
        placeholder="Enter Your Answer..."
        name="answer"
        value={newQuestion?.answer}
        onChange={handleChange}
      ></textarea>
      <Button
        additionalClassName="w-full font-semibold"
        onClick={handleSubmit}
        disabled={newQuestion.answer === "" || newQuestion.question === ""}
      >
        Add Question
      </Button>
    </div>
  );
};

export default AddForm;
