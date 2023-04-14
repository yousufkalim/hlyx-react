import { FC, useContext } from "react";
import {
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../../../../assets/icons/AboutTabsIcons";
import { ProfileContext } from "../../../../../context/profileContext";
import "../../../../../style/components/BusinessNeeds.css";
import { AboutProps } from "../../../../../interface";
import moment from 'moment'


interface IBusinessNeeds {
  aboutData: AboutProps
}

const BusinessNeeds: FC<IBusinessNeeds> = ({ aboutData }) => {
  const { userProfile } = useContext(ProfileContext);
  const { businessNeeds } = userProfile.about;
  console.log(businessNeeds, "Business Needs");
  return (
    <div className="business-list">
      {aboutData?.businessNeeds?.map(
        ({ description, date, title, status }: any, index: number) => (
          <div className="bussiness-section">
            <div className="blue-Dot"></div>
            <div className="Bussiness-card">
              <div className="Business-card-main">
                <p>{moment(date).format(`MMMM D, YYYY`)}</p>
                <h6 className="business_needs_title">{title}</h6>
                <p>{description}</p>
              </div>
              <div className="status-row">
                <p className={status === "Active" ? "green" : "color_Blue"}>
                  {status}
                </p>
                <div className="card-icons">
                  <LinksIcon />
                  <MessageIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default BusinessNeeds;
