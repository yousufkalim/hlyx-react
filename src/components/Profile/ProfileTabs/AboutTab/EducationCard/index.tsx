import React, { useContext } from "react";
import "../../../../../style/components/Education.css";
import { Education } from "../../../../../interface";
import { ProfileContext } from "../../../../../context/profileContext";

const EducationCard = () => {
  const { userProfile } = useContext(ProfileContext);
  const { education } = userProfile?.about;
  return (
    <div className="education_list">
      {education.map(
        (
          { name, startDate, endDate, image, major, program }: Education,
          index: number
        ) => (
          <div className="education_card_container" key={index}>
            <div className="color_line" />
            <div className="education_info">
              <div className="education_details_container">
                <div className="education_details">
                  <h6>{name}</h6>
                  <p>{`${startDate}-${endDate}`}</p>
                </div>
                <img src={image?.url} alt={image?.altText || name} />
              </div>

              <div className="education_info_text">
                <h6>{major}</h6>
                <p>{program}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default EducationCard;
