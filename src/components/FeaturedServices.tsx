import React, { useContext } from "react";
import "../style/components/featureServices.css";
import { IonButton } from "@ionic/react";
import {
  MessagesIcon,
  SaveIcon,
  ShareFeaturedIcon,
} from "../assets/icons/Featured_Card_Icons";
import { ProfileContext } from "../context/profileContext";

const FeaturedServices = ({
  title,
  description,
  lineColor,
}: {
  title: string;
  description: string;
  lineColor: string;
}) => {
  const { userProfile } = useContext(ProfileContext);
  console.log({ userProfile });

  return (
    <div className="featured_card_container">
      <div className="content_container">
        <div className={`color_line border-${lineColor}`} />
        <div className="featured_details_container">
          <div className="featured_details">
            <h6>{title}</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="card_footer">
        <IonButton shape="round" size="small" className="footer_button">
          Details
        </IonButton>
        <div className="featured_icons">
          <MessagesIcon color="var(--text-color)" />
          <SaveIcon color="var(--text-color)" />
          <ShareFeaturedIcon color="var(--text-color)" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
