import React, { useState, useEffect } from "react";

const TwitterButtonAtom = ({ personalityType, explanationPersonality }) => {
  const [twitterShareUrl, setTwitterShareUrl] = useState("");

  useEffect(() => {
    const createTwitterShareLink = (personalityType, explanationPersonality, quizLink) => {
      const baseUrl = "https://twitter.com/intent/tweet";
      const text = `I got ${personalityType}! ${explanationPersonality}`;
      const url = quizLink;
      const hashtags = "QuizResult,PersonalityTest";

      // Encode components
      const encodedText = encodeURIComponent(text);
      const encodedUrl = encodeURIComponent(url);

      // Construct the full URL
      const shareUrl = `${baseUrl}?text=${encodedText}&url=${encodedUrl}&hashtags=${hashtags}`;

      return shareUrl;
    };

    const quizLink = "https://personality-keiba.netlify.app/";

    const shareUrl = createTwitterShareLink(personalityType, explanationPersonality, quizLink);
    setTwitterShareUrl(shareUrl);
  }, []);

  return (
    <a
      href={twitterShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "flex", width: "200px", height: "200px" }}
    >
      Share on Twitter
    </a>
  );
};

export default TwitterButtonAtom;
