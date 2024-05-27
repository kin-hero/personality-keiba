import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questions from "@constant/questions";

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(parseInt(id, 10) || 0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));

  useEffect(() => {
    setCurrentQuestionIndex(parseInt(id, 10) || 0);
  }, [id]);

  const question = questions[currentQuestionIndex];

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedSelectedOptions = [...prevSelectedOptions];
      updatedSelectedOptions[currentQuestionIndex] = optionIndex;
      return updatedSelectedOptions;
    });
  };

  const getMostSelectedOption = () => {
    const optionCounts = selectedOptions.reduce((acc, optionIndex) => {
      if (optionIndex !== null) {
        acc[optionIndex] = (acc[optionIndex] || 0) + 1;
      }
      return acc;
    }, {});
    let maxOptionIndex = null;
    let maxCount = 0;
    for (const [optionIndex, count] of Object.entries(optionCounts)) {
      if (count > maxCount) {
        maxOptionIndex = parseInt(optionIndex, 10);
        maxCount = count;
      }
    }
    return maxOptionIndex;
  };

  const handleContinue = () => {
    if (selectedOptions[currentQuestionIndex] === null) {
      alert("Please select an option before continuing.");
      return;
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);

      navigate(`/questions/${nextQuestionIndex}`);
    } else {
      const mostSelectedOption = getMostSelectedOption();
      navigate(`/results?mostSelectedOption=${mostSelectedOption}`);
    }
  };

  return (
    <div className="bg-custom min-h-screen flex items-center justify-center">
      <div className="max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Question {currentQuestionIndex + 1}</h1>
        <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 cursor-pointer ${
                selectedOptions[currentQuestionIndex] === index ? "bg-button-color text-white" : "bg-gray-100"
              } hover:bg-gray-400 transition-colors duration-100`}
              onClick={() => handleOptionSelect(index)}
            >
              <input type="radio" id={`option-${index}`} name="options" value={option} className="sr-only" />
              <label htmlFor={`option-${index}`} className="block">
                {option}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={handleContinue}
          className="mt-6 bg-button-color hover:bg-button-color-hover text-white px-4 py-2 rounded-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
