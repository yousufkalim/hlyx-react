import { IonContent, IonPage } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import AboutTab from "../../components/Profile/ProfileTabs/AboutTab";
import ContactTab from "../../components/ContactTab";
import InfoButton from "../../components/InfoButton";
import PortfolioTab from "../../components/PortfolioTab";
import Header from "../../components/Profile/Header";
import ServicesTab from "../../components/ServicesTab";
import Tabs from "../../components/Tabs";
import "../../style/page/profile.css";
export const ProfileTabs = ["Contact", "About", "Service", "Portfolio"];

const ProfileTabsContent = [
  <ContactTab />,
  <AboutTab />,
  <ServicesTab />,
  <PortfolioTab />,
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <>
      <IonPage>
        <IonContent className="overflow-auto profile-container">
          <div className="sticky-header">
            <Header />
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

export default Profile;
