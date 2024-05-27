// src/pages/HomePage.jsx
import React from "react";
import PersonalityPane from "../components/panes/PersonalityPane";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-md text-center font-sans mt-4">
        <h1 className="text-4xl font-heading font-bold mb-4 ">Discover Your Horse Betting Personality</h1>
        <Link to={"/questions/0"}>
          <button className="bg-button-color text-white font-bold px-6 py-2 rounded-lg hover:bg-button-color-hover transition-colors duration-300">
            Start Now!
          </button>
        </Link>
      </div>
      <div className="bg-container-color my-6 p-4 rounded-lg shadow-md text-center">
        <PersonalityPane />
      </div>
    </div>
  );
};

export default HomePage;
