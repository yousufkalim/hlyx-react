import React from "react";
import "../../../../../style/components/Education.css";
import stanfoard from "../../../../../assets/stanfard.png";
import { Education } from "../../../../../interface";

const EducationCard = ({
  name,
  startDate,
  endDate,
  image,
  program,
  major,
}: Education) => {
  return (
    <div className="education_card_container">
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
  );
};

export default EducationCard;
