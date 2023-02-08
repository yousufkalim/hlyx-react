import React from "react";
import "../../style/components/ProgressBar.css";

const ProgressBar = () => {
  return (
    <progress id="project" max="100" value="70">
      70%
    </progress>
  );
};

export default ProgressBar;
