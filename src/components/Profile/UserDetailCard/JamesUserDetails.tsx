import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonLabel,
} from "@ionic/react";
import React from "react";
import profileOne from "../../../assets/media/JamesCover.png";
import { BreifIcon, LocateIcon } from "../../../assets/icons/index";
import "../../../style/components/userDetailCard.css";

const JamesUserDetailCard = () => {
  return (
    <>
      <IonCard className="user-detail-header">
        <IonCardContent className="user-detail">
          <img
            alt="Silhouette of mountains"
            src={profileOne}
            style={{ objectPosition: "right" }}
            className="user-image"
          />
        </IonCardContent>
        <IonCardContent className="user-detail">
          <h1>James R. Beckley</h1>
          <div className="user-info">
            <BreifIcon height={12} width={10} color="var(--text-color)" />
            <p>
              CEO at <b>HLYX Inc.</b>
            </p>
          </div>
          <div className="user-info">
            <LocateIcon height={12} width={10} color="var(--text-color)" />
            <p>San DIego, California</p>
          </div>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default JamesUserDetailCard;
