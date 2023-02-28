import React, { useState } from "react";
import "../style/components/ReadMoreText.css";

interface ReadMoreTextProps {
  text: string;
  limit?: number;
}
const ReadMoreText = ({ text, limit = 200 }: ReadMoreTextProps) => {
  const [showText, setShowText] = useState(false);
  const charLength = text.split("").length;
  return (
    <p>
      {showText
        ? text
        : `${text.substring(0, limit)}${charLength > limit ? "... " : " "}`}
      {charLength > limit && (
        <span onClick={() => setShowText(!showText)}>
          {showText ? " Read Less" : "Read More"}
        </span>
      )}
    </p>
  );
};

export default ReadMoreText;
