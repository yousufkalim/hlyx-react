import React, { FC, useContext } from "react";
import { ProfileContext } from "../../../../../../context/profileContext";
import ActiveCard from "../../../../../ActiveCard";
import { AboutProps } from "../../../../../../interface";
import moment from "moment"

interface IActiveTab {
  aboutData: AboutProps
}

const ActiveTab: FC<IActiveTab> = ({ aboutData }) => {
  const { userProfile } = useContext(ProfileContext);
  const { active } = userProfile?.about?.businessGoal;


  const handleDateForemst = (startDate: string, endDate: string) => {
    const start = moment(startDate);
    const end = moment(endDate);
    const duration = moment.duration(end.diff(start));
    const months = duration.months();
    const days = duration.days();
    return `${months} months, ${days} days`
  }
  return (
    <div className="active-card-list">
      {aboutData?.businessGoals?.map(
        ({ title, description, startDate, percentComplete, endDate, status }: any, index: number) => (
          status === "Active" &&
          <ActiveCard
            key={index}
            count={index + 1}
            title={title}
            description={description}
            progress={percentComplete}
            timeStamp={startDate && endDate ?
              handleDateForemst(startDate, endDate) : "no date"
            }
          />
        )
      )}
    </div>
  );
};

export default ActiveTab;
