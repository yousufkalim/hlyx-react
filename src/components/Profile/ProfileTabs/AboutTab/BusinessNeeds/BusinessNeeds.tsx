import React from "react";
import { needsData } from "../../../../../constants";
import "../../../../../style/components/BusinessNeeds.css";
import {
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../../../../assets/icons/AboutTabsIcons";

const BusinessNeeds = () => {
  return (
    <div>
      {needsData?.map(({ description, date, heading, status }, index) => (
        <>
          <div className="bussiness-section">
            <div className="blue-Dot"></div>
            <div className="Bussiness-card">
              <div className="Business-card-main">
                <p>{date}</p>
                <h6>{heading}</h6>
                <p>{description}</p>
              </div>
              <div className="status-row">
                <p>{status}</p>
                <div className="card-icons">
                  <LinksIcon />
                  <MessageIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default BusinessNeeds;
