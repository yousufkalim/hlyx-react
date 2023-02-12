import React from "react";
import "../../style/components/ProgressBar.css";

const ProgressBar = ({ color = "purple" }: { color?: "green" | "purple" }) => {
  return (
    <progress id="project" max="100" value="70" className={`progress-${color}`}>
      <div>70%</div>
    </progress>
  );
};

export default ProgressBar;
