import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import AboutTab from "../../components/Profile/ProfileTabs/AboutTab";
import ContactTab from "../../components/ContactTab";
import InfoButton from "../../components/InfoButton";
import PortfolioTab from "../../components/PortfolioTab";
import Header from "../../components/Profile/Header";
import ServicesTab from "../../components/ServicesTab";
import Tabs from "../../components/Tabs";
import "../../style/page/profile.css";
import DrHeader from "../../components/Profile/DrHeader";
import DrContact from "../../components/DrContact";

export const ProfileTabs = ["Contact", "About", "Service", "Portfolio"];

const ProfileTabsContent = [
  <DrContact />,
  <AboutTab />,
  <ServicesTab />,
  <PortfolioTab />,
];

const DrProfile = () => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <>
      <IonPage>
        <IonContent className="overflow-auto profile-container">
          <div className="sticky-header">
            <DrHeader />
            <Tabs
              tabList={ProfileTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          {ProfileTabsContent[+activeTab]}
        </IonContent>
      </IonPage>
      <InfoButton />
    </>
  );
};

export default DrProfile;
