import { FC, useContext } from "react";
import { BlueDotIcon } from "../../../../../assets/icons";
import {
  AccoladesCalender,
  ForwardIcon,
} from "../../../../../assets/icons/index";
import { ProfileContext } from "../../../../../context/profileContext";
import "../../../../../style/components/accolades.css";
import { AboutProps } from "../../../../../interface";
import moment from "moment"

interface IAccoladesItem {
  aboutData: AboutProps
}

const AccoladesItem: FC<IAccoladesItem> = ({ aboutData }) => {
  const { userProfile } = useContext(ProfileContext);
  const { accolades } = userProfile?.about;
  return (
    <div className="accolades_list">
      {aboutData?.accolades?.map(({ fromWho, startDate, endDate, title }: any, index: number) => (
        <div className="accolades-card">
          <BlueDotIcon />
          <div className="accolades-card-detail">
            <div className="accolade-description">
              <p>
                {title} at{" "}
                <span className="companyname">{fromWho}</span>
              </p>
              <div className="date">
                <AccoladesCalender
                  color={"var(--icon-back)"}
                  white={"#868FA0"}
                />
                <p>{`${moment(startDate).format('MMMM YYYY')} - ${endDate ? moment(endDate).format('MMMM YYYY') : "Present"}`}</p>
              </div>
            </div>
            <div>
              <ForwardIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccoladesItem;
