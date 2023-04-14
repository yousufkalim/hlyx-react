import { useContext, FC } from "react";
import { ProfileContext } from "../../../../../context/profileContext";
import { Education, AboutProps } from "../../../../../interface";
import "../../../../../style/components/Education.css";
interface IEducationCard {
  aboutData: AboutProps
}

const EducationCard: FC<IEducationCard> = ({ aboutData }) => {
  const { userProfile } = useContext(ProfileContext);
  const { education } = userProfile?.about;

  let charBuffer = "";
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
  return (
    <div className="education_list">
      {aboutData.education.map((item: any) => {
        return (
          <div className="education_card_container">
            <div className={`education_color_line color-${education.map((item: { lineColor: any; }) => item.lineColor)}`} />
            <div className="education_info">
              <div className="education_details_container">
                <div className="education_details">
                  <h6>{item?.schoolName}</h6>
                  <p>{`${item.startYear}-${"not provided"}`}</p>
                </div>
                {education ? (
                  <img src={education.map((item: { image: { url: any; }; }) => item.image.url) || item.schoolName} alt={"image" || item.schoolName} />
                ) : (
                  <div className={`image-replacer color-${education.map((item: { lineColor: any; }) => item.lineColor)}`}>
                    <p>{processWords(item.schoolName)}</p>
                  </div>
                )}
              </div>

              <div className="education_info_text">
                <h6>{item?.academicFocus}</h6>
                <p>{item?.degreeType}</p>
              </div>
            </div>
          </div>)

      })
      }
    </div>
  );
};

export default EducationCard;
