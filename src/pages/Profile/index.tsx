import { IonContent, IonPage } from "@ionic/react";
import { useContext, useState } from "react";
import ContactTab from "../../components/ContactTab";
import HlyxContactTab from "../../components/HlyxContactTab";
import InfoButton from "../../components/InfoButton";
import Header from "../../components/Profile/Header";
import Portfolio from "../../components/Profile/Portfolio";
import AboutTab from "../../components/Profile/ProfileTabs/AboutTab";
import ServicesTab from "../../components/ServicesTab";
import Tabs from "../../components/Tabs";
import { ProfileContext } from "../../context/profileContext";
import "../../style/page/profile.css";
import PortfolioTab from "../../components/PortfolioTab";
export const ProfileTabs = ["Contact", "About", "Service", "Portfolio"];

// const ProfileTabsContent = [
//   <ContactTab />,
//   <AboutTab />,
//   <ServicesTab />,
//   <Portfolio />,
// ];

const ProfileTabsContent = ({ activeTab }: { activeTab: string }) => {
  const { userProfile } = useContext(ProfileContext);

  const ProfileTabs = [
    <ContactTab />,
    <AboutTab />,
    <ServicesTab />,
    <Portfolio />,
  ];
  return userProfile?.name === "Dr. Kenji Awurama" && activeTab === "3" ? (
    <PortfolioTab />
  ) : (
    ProfileTabs[+activeTab]
  );
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("0");
  const { userProfile } = useContext(ProfileContext);

  return (
    <>
      <IonPage>
        <IonContent className="overflow-auto profile-container">
          <Header />
          {userProfile?.id === "james-hlyx" ? (
            <></>
          ) : (
            <div className="sticky-header">
              <Tabs
                tabList={ProfileTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          )}

          {userProfile?.id === "james-hlyx" ? (
            <HlyxContactTab />
          ) : (
            <>
              <ProfileTabsContent activeTab={activeTab} />
            </>
          )}
        </IonContent>
        <InfoButton />
      </IonPage>
    </>
  );
};

export default Profile;
