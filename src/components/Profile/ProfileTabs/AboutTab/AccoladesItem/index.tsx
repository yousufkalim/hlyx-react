import { useContext } from "react";
import { BlueDotIcon } from "../../../../../assets/icons";
import {
  AccoladesCalender,
  ForwardIcon,
} from "../../../../../assets/icons/index";
import { ProfileContext } from "../../../../../context/profileContext";
import "../../../../../style/components/accolades.css";

const AccoladesItem = () => {
  const { userProfile } = useContext(ProfileContext);
  const { accolades } = userProfile?.about;
  return (
    <div className="accolades_list">
      {accolades.map(({ jobTitle, startDate, endDate }: any, index: number) => (
        <div className="accolades-card">
          <BlueDotIcon />
          <div className="accolades-card-detail">
            <div className="accolade-description">
              <p>
                {jobTitle?.position} at{" "}
                <span className="companyname">{jobTitle?.companyName}</span>
              </p>
              <div className="date">
                <AccoladesCalender color={"var(--active-card-text-color)"} />
                <p>{`${startDate} - ${endDate ?? "Present"}`}</p>
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
