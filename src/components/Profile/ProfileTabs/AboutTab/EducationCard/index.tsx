import { useContext, FC } from "react";
import { ProfileContext } from "../../../../../context/profileContext";
import { Education, AboutProps } from "../../../../../interface";
import { educationProps } from "../../../../../data/userData"
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
    var charBuffer = "";
    s.forEach((element) => {
      if (element.length > 0) {
        charBuffer += element[0];
      }
    });
    return charBuffer;
  }
  return (
    <div className="education_list">
      {aboutData.education.map((item: any, index) => {
        return (
          <div className="education_card_container">
            <div className={`education_color_line color-${educationProps[index % (educationProps.length)]?.lineColor}`} />
            <div className="education_info">
              <div className="education_details_container">
                <div className="education_details">
                  <h6>{item?.schoolName}</h6>
                  <p>{`${item.startYear}-${"not provided"}`}</p>
                </div>
                {item.image ? (
                  <img src={item?.image?.url} alt={item.schoolName} />
                ) : (
                  <div className={`image-replacer color-${educationProps[index % (educationProps.length)]?.lineColor}`}>
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
