import React from "react";
import { AccoladesCalender, Checkbox } from "../../../../../../assets/icons";
import {
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../../../../../assets/icons/AboutTabsIcons";
import { achieveData } from "../../../../../../constants";
import { ActiveAchievedType } from "../../../../../../interface";
import "../../../../../../style/components/achievedTab.css";
import ProgressBar from "../../../../../ProgressBar";

const AchievedCard = ({
  title,
  description,
  timeStamp,
  progress,
}: ActiveAchievedType) => {
  return (
    <div className="achieved-section">
      <Checkbox />
      <div className="achieved-whole-card">
        <div className="achieved-card">
          <h6>{title}</h6>
          <p>{description}</p>
          <div className="progress-container">
            <ProgressBar color={"green"} value={progress} />
            <p className="progress">{progress}%</p>
          </div>
        </div>
        <div className="achieve_card_footer">
          <div className="date_container">
            <AccoladesCalender
              color={"var(--icon-back)"}
              white={"var(--text-color)"}
            />
            <p className="date_text">{timeStamp}</p>
          </div>

          <div className="icon_list">
            <div className="link_badge" data-count="5">
              <LinksIcon color={"#CFD4DF"} />
            </div>
            <div className="message_badge" data-count="3">
              <MessageIcon color={"#CFD4DF"} />
            </div>

            <ShareIcon color={"#CFD4DF"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const AchievedTab = () => {
  return (
    <div>
      <AchievedCard
        title="Compete AMT Certification"
        description="Get AMT Certification by end of year"
        timeStamp="Oct. 8, 2022"
        progress={100}
      />
      <AchievedCard
        title="Compete AMT Certification"
        description="Get AMT Certification by end of year"
        timeStamp="Oct. 8, 2022"
        progress={100}
      />
      <AchievedCard
        title="Compete AMT Certification"
        description="Get AMT Certification by end of year"
        timeStamp="Oct. 8, 2022"
        progress={100}
      />
    </div>
  );
};

export default AchievedTab;
