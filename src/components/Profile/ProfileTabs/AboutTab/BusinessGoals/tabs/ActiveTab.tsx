import React, { useContext } from "react";
import { ProfileContext } from "../../../../../../context/profileContext";
import ActiveCard from "../../../../../ActiveCard";

const ActiveTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { active } = userProfile?.about?.businessGoal;
  return (
    <div className="active-card-list">
      {active.map(
        ({ title, description, progress, timeStamp }: any, index: number) => (
          <ActiveCard
            key={index}
            count={index + 1}
            title={title}
            description={description}
            progress={progress}
            timeStamp={timeStamp}
          />
        )
      )}
    </div>
  );
};

export default ActiveTab;
