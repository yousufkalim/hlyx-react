import React from "react";
import "../style/components/featureServices.css";
import { IonButton } from "@ionic/react";
import {
  MessagesIcon,
  SaveIcon,
  ShareFeaturedIcon,
} from "../assets/icons/Featured_Card_Icons";

const FeaturedServices = () => {
  return (
    <div className="featured_card_container">
      <div className="color_line" />
      <div className="featured_details_container">
        <div className="featured_details">
          <h6>Advanced Research</h6>
          <p>
            Cutting edge cellular bio-tech research in microscopic nanite
            nutrient deliver
          </p>
        </div>
        <div className="card_footer">
          <IonButton shape="round" size="small" className="footer_button">
            Details
          </IonButton>
          <div className="featured_icons">
            <MessagesIcon />
            <SaveIcon />
            <ShareFeaturedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
