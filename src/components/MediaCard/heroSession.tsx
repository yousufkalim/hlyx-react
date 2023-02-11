import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/react";
import profileOne from "../../assets/JamesR.png";
import sphere from "../../assets/sphere.png";
import "../../style/components/MediaCard/mediaCard.css";
import { BreifIcon, LinkBtnIcon, LocateIcon } from "../../assets/icons";

const HeroSession = () => {
  return (
    <>
      <div className="cover_photo_container">
        <img
          alt="Silhouette of mountains"
          src={profileOne}
          className="cover_photo"
        />
        <img alt="company logo" className="avatar-icon" src={sphere} />
      </div>
      <IonCard className="cover_photo_card ion_Card">
        <IonCardSubtitle>James R. Beckley</IonCardSubtitle>

        <IonCardContent className="ion-content">
          <div className="ion_text">
            <BreifIcon color="var(--text-color)" />
            <p>
              CEO at <b>HLYX Inc.</b>
            </p>
          </div>

          <div className="ion_text">
            <LocateIcon color="var(--text-color)" />
            <p>San Diego, CA</p>
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
