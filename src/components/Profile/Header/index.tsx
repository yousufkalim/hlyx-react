import { IonButton } from "@ionic/react";
import { useContext } from "react";
import { BackBtnIcon, HlyxHeaderLogo } from "../../../assets/icons";
import { ProfileContext } from "../../../context/profileContext";
import "./avatarimage.css";

const Header = () => {
  const { userProfile } = useContext(ProfileContext);
  const { image } = userProfile;
  return (
    <div className="sticky-header">
      <div className="profile-header-container">
        <IonButton expand="full" className="back-btn" routerLink="/">
          <BackBtnIcon color={"var(--text-color)"} />
        </IonButton>
        <HlyxHeaderLogo  color={"var(--text-color)"} />

        <img
        className="avatarimage"
          src={image?.url}
          alt="avatar-header-icon"
          style={{
            top:21,
            right:24.89,
            width: 61,
            height: 61,
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
