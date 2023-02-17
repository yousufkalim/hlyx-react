import "../../../../style/components/AboutCard/aboutCard.css";
import { IonButton, IonCard, IonLabel } from "@ionic/react";
import { JamesprofessionData, JamesText } from "../../../../constants";
import ReadMoreText from "../../../ReadMoreText";
import BusinessGoals from "./BusinessGoals";
import UserDetailCard from "../../UserDetailCard/UserDetailCard";
import Accolades from "./Accolades/Accolades";
import Achievements from "./Achievements/Achievements";
import EducationCard from "./EducationCard";
import Icebreakers from "./Icebreakers/Icebreakers";
import BusinessNeeds from "./BusinessNeeds/BusinessNeeds";
import JamesUserDetailCard from "../../UserDetailCard/JamesUserDetails";
import { ProfileContext } from "../../../../context/profileContext";
import { useContext } from "react";

const AboutCard = ({
  title,
  children,
  button,
}: {
  title: string;
  button?: string;
  children: React.ReactNode;
}) => {
  return (
    <IonCard className="card-container">
      <div className="about-card-title">
        <IonLabel className="card-heading-lg">{title}</IonLabel>
        {button && (
          <IonButton
            fill="outline"
            shape="round"
            color="var(--card-button-color)"
            className="view-all-button"
          >
            {button}
          </IonButton>
        )}
      </div>
      {children}
    </IonCard>
  );
};

const JamesAboutTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { about } = userProfile;
  return (
    <>
      <JamesUserDetailCard />
      {about?.bio && (
        <AboutCard title="Bio">
          <ReadMoreText text={about?.bio} limit={183} />
        </AboutCard>
      )}
      {about?.profession && (
        <AboutCard title="Profession">
          <div className="profession-list">
            {about?.profession.map(
              ({ description, title, lineColor }: any, index: number) => (
                <div className="profession-item" key={index}>
                  <div className={`profession-line line-${lineColor}`} />
                  <p className="profession-title">{title}</p>
                  <p className="profession-description">{description}</p>
                </div>
              )
            )}
          </div>
        </AboutCard>
      )}
      {about?.education && (
        <AboutCard title="Education">
          <div className="education-card-list">
            <EducationCard />
            <EducationCard />
          </div>
        </AboutCard>
      )}
      <AboutCard title="Accolades" button="View All">
        <Accolades />
      </AboutCard>
      <AboutCard title="Achievements" button="View All">
        <Achievements />
      </AboutCard>
      <AboutCard title="Business Goals">
        <BusinessGoals />
      </AboutCard>
      <AboutCard title="Business Needs" button="View All">
        <BusinessNeeds />
      </AboutCard>
      <AboutCard title="Icebreakers">
        <Icebreakers />
      </AboutCard>
      <div style={{ paddingBlock: 20, backgroundColor: "var(--bg-color)" }}>
        <IonButton className="outline-btn" fill="outline" expand="block">
          Create Your Free Profile
        </IonButton>
      </div>
    </>
  );
};

export default JamesAboutTab;
