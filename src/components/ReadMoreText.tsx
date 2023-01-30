import React, { useState } from "react";

interface ReadMoreTextProps {
  text: string;
  limit?: number;
}
const ReadMoreText = ({ text, limit }: ReadMoreTextProps) => {
  const [showText, setShowText] = useState(false);
  const addText = () => {
    setShowText(true);
    if(showText){
      setShowText(false);
    }
  };
  if (!showText) {
    return (
      <p className="font-Style">
        {text.substring(0, limit)}<span style={{fontWeight:"bolder"}} onClick={addText}>...Read More</span>
      </p>
    );
  } else {
    return (
      <p className="font-Style">
        {text.substring(0)}<span style={{fontWeight:"bolder"}} onClick={addText}>...Read Less</span>
      </p>
    );
  }
};

export default ReadMoreText;
