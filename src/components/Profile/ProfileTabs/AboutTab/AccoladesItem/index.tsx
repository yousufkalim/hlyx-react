import { IonCard, IonCardContent } from "@ionic/react";
import React, { useContext } from "react";
import { IonButton } from "@ionic/react";
import { accolatesData } from "../../../../../constants/index";
import { BlueDotIcon } from "../../../../../assets/icons";
import {
  AccoladesCalender,
  ForwardIcon,
} from "../../../../../assets/icons/index";
import "../../../../../style/components/accolades.css";
import { ProfileContext } from "../../../../../context/profileContext";

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
                {jobTitle?.position} at<span>{jobTitle?.companyName}</span>
              </p>
              <div className="date">
                <AccoladesCalender
                  color={"var(--icon-back)"}
                  white={"#868FA0"}
                />
                <p>{`${startDate}-${endDate ?? "Present"}`}</p>
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
