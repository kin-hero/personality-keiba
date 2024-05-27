import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import analyticalAce from "../assets/analytical-ace.png";
import calculatedRiskTaker from "../assets/calculated-risk-taker.png";
import strategicPlanner from "../assets/strategic-planner.png";
import dataDrivenDecider from "../assets/data-driven-decider.png";
import intuitiveGambler from "../assets/intuitive-gambler.png";
import impulsivePunter from "../assets/impulsive-panter.png";
import cautiousBettor from "../assets/cautious-bettor.png";
import socialBettor from "../assets/social-bettor.png";
import thrillSeeker from "../assets/thrill-seeker.png";
import steadyPlayer from "../assets/steady-player.png";
import optimisticBettor from "../assets/optimistic-bettor.png";
import skepticalGambler from "../assets/skeptical-gambler.png";
import researchEnthusiast from "../assets/research-enthusiast.png";
import emotionalBettor from "../assets/emotional-bettor.png";
import trendFollower from "../assets/trend-follower.png";
import loneWolf from "../assets/lone-wolf.png";

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const mostSelectedOption = searchParams.get("mostSelectedOption");

  let personalityType;
  let imageUrl;
  let explanationPersonality;
  switch (mostSelectedOption) {
    case "0":
      personalityType = "Analytical and Data-Driven";
      imageUrl = analyticalAce;
      explanationPersonality =
        "You prefer to rely on data, statistics, and historical performance when making betting decisions. Your analytical nature ensures you make well-informed bets.";
      break;
    case "1":
      personalityType = "Intuitive and Thrill-Seeker";
      imageUrl = intuitiveGambler;
      explanationPersonality =
        "You trust your instincts and gut feelings when placing bets. You believe in the power of intuition to guide your decisions.";
      break;
    case "2":
      personalityType = "Social and Cautious";
      imageUrl = socialBettor;
      explanationPersonality =
        "You prefer low-risk bets and are generally risk-averse. You prioritize safety and security in your betting choices";
      break;
    case "3":
      personalityType = "Impulsive and Trend Follower";
      imageUrl = loneWolf;
      explanationPersonality =
        "Your bets are often made on impulse, driven by a desire for immediate gratification and excitement.";
      break;
    default:
      personalityType = "Unknown"; // Handle unknown or invalid options
      break;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-custom overflow-hidden">
        <div className="bg-white p-8 rounded-lg shadow-md text-center font-sans mt-4">
          <h1 className="text-4xl font-heading font-bold  ">Your Horse Betting Personality Type</h1>
          <h2 className="text-2xl mt-4 font-heading font-bold underline">{personalityType}</h2>
          <div className="flex justify-center mt-4 flex-col items-center">
            <img src={imageUrl} alt={personalityType} className="w-60 h-60 object-cover  " />
            <p className="mt-8 text-2xl">{explanationPersonality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
