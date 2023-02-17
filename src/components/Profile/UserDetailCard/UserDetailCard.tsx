import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonLabel,
} from "@ionic/react";
import React, { useContext } from "react";
import profileOne from "../../../assets/media/media-image.png";
import { BreifIcon, LocateIcon } from "../../../assets/icons/index";
import "../../../style/components/userDetailCard.css";
import { UserInterface } from "../../../interface";
import { ProfileContext } from "../../../context/profileContext";

const UserDetailCard = () => {
  const { userProfile } = useContext(ProfileContext);
  const { image, name, jobTitle, address } = userProfile;
  return (
    <>
      <IonCard className="user-detail-header">
        <IonCardContent className="user-detail">
          <img alt={image?.altText} src={image?.url} className="user-image" />
        </IonCardContent>
        <IonCardContent className="user-detail">
          <h1>{name}</h1>
          <div className="user-info">
            <BreifIcon height={10} width={12} color="var(--text-color)" />
            <p>
              {jobTitle?.position} at <b>{jobTitle?.companyName}</b>
            </p>
          </div>
          <div className="user-info">
            <LocateIcon height={10} width={12} color="var(--text-color)" />
            <p>{address}</p>
          </div>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default UserDetailCard;
