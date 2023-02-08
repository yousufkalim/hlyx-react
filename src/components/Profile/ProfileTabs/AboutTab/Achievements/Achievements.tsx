import React from "react";
import { BlueDotIcon } from "../../../../../assets/icons";
import { acheivementData } from "../../../../../constants";
import { ForwardIcon } from "../../../../../assets/icons/index";
import "../../../../../style/components/achievement.css";

const Achievements = () => {
  return (
    <>
      {acheivementData?.map(({ description, year }, item) => (
        <div className="achievement-card">
          <BlueDotIcon color="gray" />
          <div className="achievement-description">
            <p className="year">{year}</p>
            <p className="text">{description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Achievements;
