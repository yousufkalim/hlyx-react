import { useState } from "react";
// import AboutCard from "./AboutCard/AboutCard";
import "../style/components/AboutCard/aboutCard.css";
import { IonButton, IonCard, IonChip, IonLabel } from "@ionic/react";
import {
  accolatesData,
  acheivementData,
  brakerData,
  commentsData,
  educationData,
  goalsData,
  loremText,
  professionData,
} from "../constants";
import {
  AccoladesIcon,
  AvatarIcon,
  BreakerIcon,
  CommentIcon,
  ForwardIcon,
  GoalsIcon,
  ProfessionIcon,
  EducationIcon,
  AcheievementIcon,
} from "../assets/icons";
import ReadMoreText from "./ReadMoreText";
import BusinessGoals from "./Profile/BusinessGoals";

const AboutCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <IonCard className="card-container">
      <IonLabel className="card-heading-lg">{title}</IonLabel>
      {children}
    </IonCard>
  );
};

const AboutTab = () => {
  return (
    <>
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

      <AboutCard title="Business Goals">
        <BusinessGoals />
      </AboutCard>

      {/* <AboutCard
        icon={
          <EducationIcon
            color={"var(--icon-back)"}
            white={"var(--text-color)"}
          />
        }
        cardTitle="Education"
        cardTagTitle="xxx"
        isTagTitle={false}
      >
        {educationData?.map(({ description }) => (
          <div className="flex align-center">
            <div className="forward-icon">
              <ForwardIcon />
            </div>
            <div
              className="content-two"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        ))}
      </AboutCard>

      <AboutCard
        icon={
          <AccoladesIcon
            color={"var(--icon-back)"}
            white={"var(--text-color)"}
          />
        }
        cardTitle="Accolades"
        cardTagTitle="xxx"
        isTagTitle={false}
      >
        {accolatesData?.map(({ description }) => (
          <div className="flex align-center">
            <div className="forward-icon">
              <ForwardIcon />
            </div>
            <div
              className="content-two"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        ))}
      </AboutCard>

      <AboutCard
        icon={
          <AcheievementIcon
            color={"var(--icon-back)"}
            white={"var(--text-color)"}
          />
        }
        cardTitle="Achievements"
        cardTagTitle="xxx"
        isTagTitle={false}
      >
        {acheivementData?.map(({ description }, item) => (
          <div
            className={`flex ${item !== 1 ? "align-center" : "align-start"}`}
          >
            <div
              className="forward-icon content-three"
              style={{ color: "var(--item-color)" }}
            >
              2022
            </div>
            <div
              className="content-three"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        ))}
      </AboutCard>

      <AboutCard
        icon={
          <GoalsIcon color={"var(--icon-back)"} white={"var(--text-color)"} />
        }
        cardTitle="Secular Goals"
        cardTagTitle="2023"
        isTagTitle={true}
      >
        {goalsData?.map(({ description, icon }, index) => (
          <>
            <div className="flex align-center">
              <div className="forward-icon content-three">{icon}</div>
              <div
                className="content-three"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            {index !== 3 && <div className="hr-line" />}
          </>
        ))}
      </AboutCard>

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

      <AboutCard
        icon={
          <BreakerIcon color={"var(--icon-back)"} white={"var(--text-color)"} />
        }
        cardTitle="Icebreakers"
        cardTagTitle="xxx"
        isTagTitle={false}
      >
        {brakerData?.map(({ description, tags }) => (
          <>
            <div className="content-four">{description}</div>
            {tags?.map((item) => (
              <>
                <IonChip className="custom-chip" color="dark">
                  {item}
                </IonChip>
              </>
            ))}
            <div className="hr-line" />
          </>
        ))}
        <div className="content-four">Motto</div>
        <div className="content-five">
          Science is an oyster, serve it up tastefully.
        </div>
      </AboutCard> */}
      <div style={{ paddingBlock: 20, backgroundColor: "var(--bg-color)" }}>
        <IonButton className="outline-btn" fill="outline" expand="block">
          Create Your Free Profile
        </IonButton>
      </div>
    </>
  );
};

export default AboutTab;
