import React, { useState } from "react";

interface ReadMoreTextProps {
  text: string;
  limit?: number;
}
const ReadMoreText = ({ text, limit = 200 }: ReadMoreTextProps) => {
  const [showText, setShowText] = useState(false);
  return (
    <p className="font-style">
      {showText ? text : `${text.substring(0, limit)}...`}{" "}
      <span onClick={() => setShowText(!showText)}>
        {showText ? "Read Less" : "Read More"}
      </span>
    </p>
  );
};

export default ReadMoreText;
