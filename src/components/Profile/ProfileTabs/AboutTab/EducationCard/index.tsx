import React from "react";
import "../../../../../style/components/Education.css";
import stanfoard from "../../../../../assets/stanfard.png";

const EducationCard = () => {
  return (
    <div className="education_card_container">
      <div className="color_line" />

      <div className="education_info">
        <div className="education_details_container">
          <div className="education_details">
            <h6>Stanford University</h6>
            <p>Class of 2000</p>
          </div>
          <img src={stanfoard} alt="stanfoard university logo" />
        </div>

        <div className="education_info_text">
          <h6>Studied Molecular Biology</h6>
          <p>Masters Degree</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
