import { useState } from "react";
import {
  IonButton,
  IonCard,
  IonLabel,
  IonSegmentButton,
  IonSegment,
} from "@ionic/react";
import "../../style/components/MediaCard/mediaCard.css";
import { BackBtnIcon, HlyxHeaderLogo } from "../../assets/icons";
import ContactTab from "../ContactTab";
import ServicesTab from "../ServicesTab";
import AboutTab from "../AboutTab";
import PortfolioTab from "../PortfolioTab";
import HeroSession from "./heroSession";
import InfoButton from "../InfoButton";
import avatarHeader from "../../assets/icons/avatar-header-icon.svg";

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
    content: <PortfolioTab />,
  },
];

const ActiveTabContent = ({ activeTab }: { activeTab: string }) => {
  console.log(`active tab : ${activeTab} `);
  return <>{Tabs.find((x) => x.tab === +activeTab)?.content}</>;
};

const MediaCard = () => {
  const [activeTab, setActiveTab] = useState("0");
  return (
    <>
      <div style={{ position: "relative" }}>
        {/* <div className="sticky-header">
          <div className="profile-header-container">
            <IonButton
              expand="full"
              className="back-btn"
              routerLink="/"
            >
              <BackBtnIcon color={"var(--text-color)"} />
            </IonButton>
            <HlyxHeaderLogo color={"var(--text-color)"} />
            <img src={avatarHeader} alt="avatar-header-icon" />
          </div>

          <IonCard className="tab_container">
            <IonSegment value={activeTab} swipeGesture={false} scrollable>
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
        </div> */}
        {/* <HeroSession /> */}
        {/* <ActiveTabContent activeTab={activeTab} /> */}
        {/* <div style={{ marginBlock: 24, textAlign: "center" }}>
        <WaterMake />
      </div> */}
        {/* <InfoButton /> */}
      </div>
    </>
  );
};
export default MediaCard;
