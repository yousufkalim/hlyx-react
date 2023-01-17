import { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonLabel,
  IonSegmentButton,
  IonSegment,
} from "@ionic/react";
import profileOne from "../../assets/media/media-image.png";
import sphere from "../../assets/sphere.png";
import "../../style/components/MediaCard/mediaCard.css";
import {
  BreifIcon,
  LinkBtnIcon,
  LocateIcon,
  WaterMake,
} from "../../assets/icons";
import ContactTab from "../ContactTab";
import ServicesTab from "../ServicesTab";
import AboutTab from "../AboutTab";

export const ProfileTabs = ["Contact", "About", "Service", "Portfolio"];

const Tabs = [
  {
    tab: 0,
    content: <ContactTab />,
  },
  {
    tab: 1,
    content: <AboutTab />,
  },
  {
    tab: 2,
    content: <ServicesTab />,
  },
  {
    tab: 3,
    content: <IonCard>Portfolio</IonCard>,
  },
];

const ActiveTabContent = ({ activeTab }: { activeTab: string }) => {
  return <>{Tabs.find((x) => x.tab === +activeTab)?.content}</>;
};

const MediaCard = () => {
  const [activeTab, setActiveTab] = useState("0");
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
        <IonCardSubtitle>Dr. Kenji Awurama</IonCardSubtitle>

        <IonCardContent className="ion-content">
          <div className="ion_text">
            <BreifIcon />
            <p>
              Executive Director at <b>Sphere Bio Tech</b>
            </p>
          </div>

          <div className="ion_text">
            <LocateIcon />
            <p>Palo Alto, California</p>
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard className="link_card">
        <IonButton expand="block" className="ion-btn">
          <div style={{ marginRight: 5 }}>
            <LinkBtnIcon />
          </div>
          Link with Me
        </IonButton>
      </IonCard>

      <IonCard className="tab_container">
        <IonSegment value={activeTab}>
          {ProfileTabs.map((tab, index) => (
            <IonSegmentButton
              color="primary"
              onClick={() => {
                setActiveTab(`${index}`);
              }}
              value={index.toString()}
              key={index}
            >
              <IonLabel className="segment-btn-label">{tab}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonCard>
      <ActiveTabContent activeTab={activeTab} />
      <div style={{ marginBlock: 24, textAlign: "center" }}>
        <WaterMake />
      </div>
    </>
  );
};
export default MediaCard;
