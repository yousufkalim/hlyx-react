import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/react";
import "../../style/components/MediaCard/mediaCard.css";
import { BreifIcon, LinkBtnIcon, LocateIcon } from "../../assets/icons";
import { useContext } from "react";
import { ProfileContext } from "../../context/profileContext";

const HeroSession = () => {
  const { userProfile } = useContext(ProfileContext);
  const { image, jobTitle, name, address, companyLogo } = userProfile;
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="cover_photo_container">
          <img alt={image?.altText} src={image?.url} className="cover_photo" />
        </div>
        {name === "Joel Calvillo" ? (
          <img
            alt={companyLogo?.alttext}
            className="joi-avatar-icon"
            src={companyLogo?.url}
          />
        ) : (
          <img
            alt={companyLogo?.alttext}
            className="avatar-icon"
            src={companyLogo?.url}
          />
        )}
      </div>
      <IonCard className="cover_photo_card ion_Card">
        <IonCardSubtitle>{name}</IonCardSubtitle>

        <IonCardContent className="ion-content">
          <div className="ion_text">
            <BreifIcon color="var(--text-color)" />
            <p>
              {jobTitle?.position} <b>{jobTitle?.companyName}</b>
            </p>
          </div>

          <div className="ion_text">
            <LocateIcon color="var(--text-color)" />
            <p>{address}</p>
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard className="link_card">
        <IonButton color="primary" expand="block" className="ion-btn">
          <div style={{ marginRight: 5 }}>
            <LinkBtnIcon />
          </div>
          Link with Me
        </IonButton>
      </IonCard>
    </>
  );
};
export default HeroSession;
