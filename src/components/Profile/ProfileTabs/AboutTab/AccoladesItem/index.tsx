import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import { IonButton } from "@ionic/react";
import { accolatesData } from "../../../../../constants/index";
import { BlueDotIcon } from "../../../../../assets/icons";
import {
  AccoladesCalender,
  ForwardIcon,
} from "../../../../../assets/icons/index";
import "../../../../../style/components/accolades.css";
import { AccoladesType } from "../../../../../interface";

const AccoladesItem = ({ jobTitle, startDate, endDate }: AccoladesType) => {
  return (
    <>
      <div className="accolades-card">
        <BlueDotIcon />
        <div className="accolades-card-detail">
          <div className="accolade-description">
            <p>
              {jobTitle?.position} <span>{jobTitle?.companyName}</span>
            </p>
            <div className="date">
              <AccoladesCalender color={"var(--icon-back)"} white={"#868FA0"} />
              <p>{`${startDate}-${endDate}`}</p>
            </div>
          </div>
          <div>
            <ForwardIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccoladesItem;
