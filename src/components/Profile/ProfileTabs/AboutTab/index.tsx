import "../../../../style/components/AboutCard/aboutCard.css";
import { IonButton, IonCard, IonChip, IonLabel } from "@ionic/react";
import { loremText, professionData } from "../../../../constants";
import ReadMoreText from "../../../ReadMoreText";
import BusinessGoals from "./BusinessGoals";
import UserDetailCard from "../../UserDetailCard/UserDetailCard";
import Accolades from "./Accolades/Accolades";
import Achievements from "./Achievements/Achievements";
import EducationCard from "./EducationCard";
import Icebreakers from "./Icebreakers/Icebreakers";
import BusinessNeeds from "./BusinessNeeds/BusinessNeeds";

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
        {button ? (
          <>
            <IonButton
              fill="outline"
              shape="round"
              color="var(--card-button-color)"
              className="about-card-title-button"
            >
              {button}
            </IonButton>
          </>
        ) : (
          <></>
        )}
      </div>
      {children}
    </IonCard>
  );
};

const AboutTab = () => {
  return (
    <>
      <UserDetailCard />
      <AboutCard title="Bio">
        <ReadMoreText text={loremText} limit={171} />
      </AboutCard>
      <AboutCard title="Profession">
        <div className="profession-list">
          {professionData?.map(({ description, title, lineColor }, index) => (
            <div className="profession-item">
              <div className={`profession-line line-${lineColor}`} />
              <p className="profession-title">{title}</p>
              <p className="profession-description">{description}</p>
            </div>
          ))}
        </div>
      </AboutCard>
      <AboutCard title="Education">
        <EducationCard />
      </AboutCard>
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

      {/* 
      <AboutCard
        icon={
          <CommentIcon color={"var(--icon-back)"} white={"var(--text-color)"} />
        }
        cardTitle="Needs & Asks"
        cardTagTitle="2023"
        isTagTitle={true}
      >
        <div
          className="content-three"
          style={{ marginBottom: 17.4 }}
          dangerouslySetInnerHTML={{
            __html: "I need help with the following:",
          }}
        />

        {commentsData?.map(({ description, icon }, index) => (
          <>
            <div className="flex align-center">
              <div className="forward-icon content-three">{icon}</div>
              <div
                className="content-three"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {index !== 2 && <div className="hr-line" />}
          </>
        ))}
      </AboutCard>

     */}
    </>
  );
};

export default AboutTab;
