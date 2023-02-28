import { useContext } from "react";
import {
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../../../../assets/icons/AboutTabsIcons";
import { ProfileContext } from "../../../../../context/profileContext";
import "../../../../../style/components/BusinessNeeds.css";

const BusinessNeeds = () => {
  const { userProfile } = useContext(ProfileContext);
  const { businessNeeds } = userProfile.about;
  console.log(businessNeeds, "Business Needs");
  return (
    <div className="business-list">
      {businessNeeds?.map(
        ({ description, timeStamp, title, status }: any, index: number) => (
          <div className="bussiness-section">
            <div className="blue-Dot"></div>
            <div className="Bussiness-card">
              <div className="Business-card-main">
                <p>{timeStamp}</p>
                <h6 className="business_needs_title">{title}</h6>
                <p>{description}</p>
              </div>
              <div className="status-row">
                <p className={status === "Active" ? "green" : "blue"}>
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
