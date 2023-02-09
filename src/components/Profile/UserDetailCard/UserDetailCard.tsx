import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonLabel,
} from "@ionic/react";
import React from "react";
import profileOne from "../../../assets/media/media-image.png";
import { BreifIcon, LocateIcon } from "../../../assets/icons/index";
import "../../../style/components/userDetailCard.css"

const UserDetailCard = () => {
  return (
    <>
      <IonCard className="user-detail-header">
        <IonCardContent className="user-detail">
          <img
            alt="Silhouette of mountains"
            src={profileOne}
            className="user-image"
          />
        </IonCardContent>
        <IonCardContent className="user-detail">
          <h1>Dr. Kenji Awurama</h1>
          <div className="user-info">
            <BreifIcon color="var(--text-color)" />
            <p>
              Executive Director at <b>Sphere Bio Tech</b>
            </p>
          </div>
          <div className="user-info">
            <LocateIcon color="var(--text-color)" />
            <p>Palo Alto, California</p>
          </div>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default UserDetailCard;
