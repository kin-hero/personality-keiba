import React from "react";
import personality from "@constant/personality";

const PersonalityPane = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {personality.map((personality, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-heading font-black mb-2">{personality.personality}</h2>
            <img
              src={personality.image}
              alt={personality.personality}
              loading="lazy"
              className="w-32 h-32 object-cover "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalityPane;
