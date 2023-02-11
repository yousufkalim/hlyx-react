import { IonButton } from "@ionic/react";
import React from "react";
import { BackBtnIcon, HlyxHeaderLogo } from "../../../assets/icons";
import ProfileImage from "../../../assets/icons/Avatar_Header.svg";

const Header = () => {
  return (
    <div className="sticky-header">
      <div className="profile-header-container">
        <IonButton expand="full" className="back-btn" routerLink="/">
          <BackBtnIcon color={"var(--text-color)"} />
        </IonButton>
        <HlyxHeaderLogo color={"var(--text-color)"} />
        <img src={ProfileImage} alt="avatar-header-icon" />
      </div>
    </div>
  );
};

export default Header;
