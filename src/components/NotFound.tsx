import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-10/12">
      <p className="text-2xl font-medium text-center leading-snug">
        No questions found! <br /> Start adding a new one...
      </p>
    </div>
  );
};

export default NotFound;
