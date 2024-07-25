import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import questions from "@constant/questions";

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(parseInt(id, 10) || 0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));

  const optionMapping = ["A", "B", "C", "D"];

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
    const mappedSelectedOptions = selectedOptions.map((index) => (index !== null ? optionMapping[index] : null));
    const mappedSelectedOptionsSplit = [
      mappedSelectedOptions.slice(0, 3),
      mappedSelectedOptions.slice(3, 8),
      mappedSelectedOptions.slice(8),
    ];

    const countOccurrences = (array) => {
      return array.reduce((acc, letter) => {
        if (letter) {
          acc[letter] = (acc[letter] || 0) + 1;
        }
        return acc;
      }, {});
    };

    const goalQuestionGroup = mappedSelectedOptionsSplit[0];
    const playQuestionGroup = mappedSelectedOptionsSplit[1];
    const goalOccurences = countOccurrences(goalQuestionGroup);
    const playOccurences = countOccurrences(playQuestionGroup);

    let goalLetter = null;
    if (goalOccurences.A >= 2) {
      goalLetter = "A";
    } else if (goalOccurences.B >= 2) {
      goalLetter = "B";
    } else if (goalOccurences.C >= 2) {
      goalLetter = "C";
    } else if (goalOccurences.D >= 2) {
      goalLetter = "D";
    } else {
      if (goalQuestionGroup.includes("A") && goalQuestionGroup.includes("B") && goalQuestionGroup.includes("C")) {
        goalLetter = "A";
      } else if (goalQuestionGroup.includes("B") && goalQuestionGroup.includes("C") && goalQuestionGroup.includes("D")) {
        goalLetter = "D";
      } else if (goalQuestionGroup.includes("A") && goalQuestionGroup.includes("B") && goalQuestionGroup.includes("D")) {
        goalLetter = "A";
      } else if (goalQuestionGroup.includes("A") && goalQuestionGroup.includes("C") && goalQuestionGroup.includes("D")) {
        goalLetter = "A";
      }
    }

    let playLetter = null;
    if (playOccurences.A >= 3) {
      playLetter = "A";
    } else if (playOccurences.B >= 3) {
      playLetter = "B";
    } else if (playOccurences.C >= 3) {
      playLetter = "C";
    } else if (playOccurences.D >= 3) {
      playLetter = "D";
    } else {
      // Handling specific 2, 2, 1 pattern cases
      if (playOccurences.A === 2 && playOccurences.B === 2) {
        playLetter = "A";
      } else if (playOccurences.B === 2 && playOccurences.C === 2) {
        playLetter = "B";
      } else if (playOccurences.A === 2 && playOccurences.C === 2) {
        playLetter = "A";
      } else if (playOccurences.B === 2 && playOccurences.D === 2) {
        playLetter = "D";
      } else if (playOccurences.A === 2 && playOccurences.D === 2) {
        playLetter = "A";
      } else if (playOccurences.C === 2 && playOccurences.D === 2) {
        playLetter = "C";
      } else {
        // Handling 2, 1, 1, 1 pattern
        const maxCount = Math.max(playOccurences.A || 0, playOccurences.B || 0, playOccurences.C || 0, playOccurences.D || 0);
        const maxOptions = [];
        if (playOccurences.A === maxCount) maxOptions.push("A");
        if (playOccurences.B === maxCount) maxOptions.push("B");
        if (playOccurences.C === maxCount) maxOptions.push("C");
        if (playOccurences.D === maxCount) maxOptions.push("D");

        if (maxOptions.length > 1) {
          // Choose the first letter alphabetically if there's a tie
          playLetter = maxOptions.sort()[0];
        } else {
          playLetter = maxOptions[0];
        }
      }
    }
    console.log("目的・競馬への姿勢", goalQuestionGroup);
    console.log("遊び方・買い方", playQuestionGroup);

    return `${goalLetter}${playLetter}`;
  };

  getMostSelectedOption();

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
      console.log("Most selected option:", mostSelectedOption);
      navigate(`/results?mostSelectedOption=${mostSelectedOption}`);
    }
  };

  return (
    <div className="bg-custom min-h-screen flex items-center justify-center">
      <div className="max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 font-heading">Question {currentQuestionIndex + 1}</h1>
        <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
        <div className="grid grid-cols-2 gap-4 ">
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
