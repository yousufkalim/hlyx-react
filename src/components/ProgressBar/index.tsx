import React from "react";
import "../../style/components/ProgressBar.css";

const ProgressBar = () => {
  return (
    <progress id="project" max="100" value="70">
      <div>70%</div>
    </progress>
  );
};

export default ProgressBar;
