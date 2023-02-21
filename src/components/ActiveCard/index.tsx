import React from "react";
import {
  ClockIcon,
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../assets/icons/AboutTabsIcons";
import ProgressBar from "../ProgressBar";

import "../../style/components/ActiveCard.css";
import { ActiveAchievedType, ColorType } from "../../interface";

const ActiveCard = ({
  color = "purple",
  title,
  description,
  progress,
  timeStamp,
  count,
}: ActiveAchievedType) => {
  const getColor = (progress: number): ColorType => {
    let color = "purple" as ColorType;
    if (progress < 70 && progress > 30) {
      color = "yellow";
    } else if (progress < 30) {
      color = "orange";
    }

    return color;
  };

  console.log(getColor(progress), ":::getColor");
  return (
    <>
      <div className="active_card_container">
        <div className="details">
          <div className={`count count-${getColor(progress)}`}>{count}</div>
          <div className="details_data">
            <h6>{title}</h6>
            <p>{description}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ProgressBar
                color={getColor(progress) as ColorType}
                value={progress}
              />
              <p className="progress">{progress}%</p>
            </div>
          </div>
        </div>
        <div className="active_card_footer">
          <div className="time_container">
            <ClockIcon />
            <p className="time_text">{timeStamp}</p>
          </div>

          <div className="icon_list">
            <div className="link_badge" data-count="5">
              <LinksIcon />
            </div>
            <div className="message_badge" data-count="3">
              <MessageIcon />
            </div>
            <ShareIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveCard;
