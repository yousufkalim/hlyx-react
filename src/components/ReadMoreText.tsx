import React, { useState } from "react";
import "../style/components/ReadMoreText.css";

interface ReadMoreTextProps {
  text: string;
  limit?: number;
}
const ReadMoreText = ({ text, limit = 200 }: ReadMoreTextProps) => {
  const [showText, setShowText] = useState(false);
  return (
    <p>
      {showText ? text : `${text.substring(0, limit)}...`}{" "}
      <span onClick={() => setShowText(!showText)}>
        {showText ? "Read Less" : "Read More"}
      </span>
    </p>
  );
};

export default ReadMoreText;
