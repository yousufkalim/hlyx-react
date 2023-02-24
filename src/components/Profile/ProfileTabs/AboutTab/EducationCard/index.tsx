import React, { useContext } from "react";
import "../../../../../style/components/Education.css";
import { Education } from "../../../../../interface";
import { ProfileContext } from "../../../../../context/profileContext";

const EducationCard = () => {
  const { userProfile } = useContext(ProfileContext);
  const { education } = userProfile?.about;

  let charBuffer = "";
  let colors = ["blue", "green", "yellow", "orange", "purple"];
  let line_color: any;

  function processWords(input: string) {
    var s = input.split(" ");
    s.forEach((element) => {
      if (charBuffer.length < 2) {
        charBuffer += element[0];
      } else {
        return charBuffer;
      }
    });

    return charBuffer;
  }

  function pickColor() {
    line_color = colors[Math.floor(Math.random() * colors.length)];
    console.log(line_color);
    return line_color;
  }

  return (
    <div className="education_list">
      {education.map(
        (
          { name, startDate, endDate,linecolor, image, major, program }: Education,
          index: number
        ) => (
          <div className="education_card_container" key={index}>
            <div className={`education_color_line color-${pickColor()}`} />
            <div className="education_info">
              <div className="education_details_container">
                <div className="education_details">
                  <h6>{name}</h6>
                  <p>{`${startDate}-${endDate}`}</p>
                </div>
                {image ? (
                  <img src={image?.url || name} alt={image?.altText || name} />
                ) : (
                  <div className={`image-replacer color-${line_color}`}>
                    <p>{processWords(name)}</p>
                  </div>
                )}
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
