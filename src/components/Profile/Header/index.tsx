import { IonButton } from "@ionic/react";
import React, { useContext } from "react";
import { BackBtnIcon, HlyxHeaderLogo } from "../../../assets/icons";
import ProfileImage from "../../../assets/icons/Avatar_Header.svg";
import { ProfileContext } from "../../../context/profileContext";
import "./avatarimage.css"

const Header = () => {
  const { userProfile } = useContext(ProfileContext);
  const { image } = userProfile;
  return (
    <div className="sticky-header">
      <div className="profile-header-container">
        <IonButton expand="full" className="back-btn" routerLink="/">
          <BackBtnIcon color={"var(--text-color)"} />
        </IonButton>
        <HlyxHeaderLogo color={"var(--text-color)"} />

        <img
        className="avatarimage"
          src={image?.url}
          alt="avatar-header-icon"
          style={{
            width: 66,
            height: 66,
            borderRadius: 25,
            objectFit: "cover",
            padding:3

          }}
        />
      </div>
    </div>
  );
};

export default Header;
