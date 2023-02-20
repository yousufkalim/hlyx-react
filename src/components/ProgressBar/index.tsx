import React, { useEffect } from "react";
import { ColorType } from "../../interface";
import "../../style/components/ProgressBar.css";

const ProgressBar = ({
  color = "purple",
  value = 0,
}: {
  color?: ColorType;
  value: number;
}) => {
  return (
    <div className="progress_container">
      <progress
        id="project"
        max="100"
        value={value}
        className={`progress-${color}`}
        style={{
          right: `calc(100% - ${value}%)`,
        }}
      >
        <div>70%</div>
      </progress>
    </div>
  );
};

export default ProgressBar;
