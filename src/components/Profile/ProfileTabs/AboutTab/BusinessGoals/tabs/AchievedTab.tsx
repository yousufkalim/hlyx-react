import React from "react";
import { AccoladesCalender, Checkbox } from "../../../../../../assets/icons";
import {
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../../../../../assets/icons/AboutTabsIcons";
import { achieveData } from "../../../../../../constants";
import "../../../../../../style/components/achievedTab.css";
import ProgressBar from "../../../../../ProgressBar";

const AchievedTab = () => {
  return (
    <div>
      {achieveData?.map(({ description, achieveGoal, date }) => (
        <div className="achieved-section">
          <Checkbox />
          <div className="achieved-whole-card">
            <div className="achieved-card">
              <h6>{achieveGoal}</h6>
              <p>{description}</p>
              <div className="progress-container">
                <ProgressBar color={"green"} />
                <p className="progress">70%</p>
              </div>
            </div>
            <div className="achieve_card_footer">
              <div className="date_container">
                <AccoladesCalender
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <p className="date_text">{date}</p>
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
      ))}
    </div>
  );
};

export default AchievedTab;
