import React, { useContext } from "react";
import { BlueDotIcon } from "../../../../../assets/icons";
import { ProfileContext } from "../../../../../context/profileContext";
import "../../../../../style/components/achievement.css";
import ReadMoreText from "../../../../ReadMoreText";


const Achievements = () => {
  const { userProfile } = useContext(ProfileContext);
  const { achievement } = userProfile?.about;
  return (
    <>
      {achievement?.map(
        ({ description,descriptiontitle, title, detail }: any, index: number) => (
          <div className="achievement-card" key={index}>
            <BlueDotIcon color="gray" />
            <div className="achievement-description">
              <p className="year">{title}</p>
              <p className="descriptiontitle">{descriptiontitle}</p>
              <ReadMoreText text={description} limit={200}/>
              </div>
          </div>
        )
      )}
    </>
  );
};

export default Achievements;
