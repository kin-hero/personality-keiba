import React, { useState, useEffect } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

const TwitterButtonAtom = ({ personalityType, explanationPersonality }) => {
  const [twitterShareUrl, setTwitterShareUrl] = useState("");

  useEffect(() => {
    const createTwitterShareLink = (personalityType, explanationPersonality) => {
      const baseUrl = "https://twitter.com/intent/tweet";
      const text = `私の競馬タイプは${personalityType}!\n${explanationPersonality}`;
      const url = "\nここであなたの競馬性格を見つけますよ！https://personality-keiba.netlify.app/";
      const hashtags = "競馬性格診断,競馬,性格,診断";

      // Encode components
      const encodedText = encodeURIComponent(text);
      const encodedUrl = encodeURIComponent(url);

      // Construct the full URL
      const shareUrl = `${baseUrl}?text=${encodedText}&url=\n${encodedUrl}&hashtags=${hashtags}`;

      return shareUrl;
    };

    const shareUrl = createTwitterShareLink(personalityType, explanationPersonality);
    setTwitterShareUrl(shareUrl);
  }, [personalityType, explanationPersonality]);

  return (
    <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="mt-5">
      <FaSquareXTwitter style={{ width: "54px", height: "54px" }} />
    </a>
  );
};

export default TwitterButtonAtom;
