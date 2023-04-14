import moment from "moment";
import React, { FC, useContext } from "react";
import { AccoladesCalender, Checkbox } from "../../../../../../assets/icons";
import {
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../../../../../assets/icons/AboutTabsIcons";
import { ProfileContext } from "../../../../../../context/profileContext";
import { ActiveAchievedType, AboutProps } from "../../../../../../interface";
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
interface IAchievedTab {
  aboutData: AboutProps
}
const AchievedTab: FC<IAchievedTab> = ({ aboutData }) => {
  const { userProfile } = useContext(ProfileContext);
  const { achieved } = userProfile?.about?.businessGoal ?? [];
  const handleDateForemst = (startDate: string, endDate: string) => {
    const start = moment(startDate);
    const end = moment(endDate);
    const duration = moment.duration(end.diff(start));
    const months = duration.months();
    const days = duration.days();
    return `${months} months, ${days} days`
  }
  return (
    <div className="achievetab">
      {aboutData.businessGoals.map(
        ({ title, description, startDate, percentComplete, endDate, status }: any, index: number) => (
          status === "Achieved" &&
          < AchievedCard
            key={index}
            title={title}
            description={description}
            timeStamp={startDate && endDate ?
              handleDateForemst(startDate, endDate) : "no date"
            }
            progress={percentComplete}
          />
        )
      )}
    </div>
  );
};

export default AchievedTab;
