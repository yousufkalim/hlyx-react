import { useState } from "react";
import AboutCard from "./AboutCard/AboutCard";
import "../style/components/MediaCard/mediaCard.css";
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

const AboutTab = () => {
  return (
    <>
      <IonCard className="tab_card">
        <IonLabel className="accordion-label">Bio</IonLabel>
        <ReadMoreText text={loremText} limit={171} />
      </IonCard>

      <AboutCard
        icon={
          <ProfessionIcon
            color={"var(--icon-back)"}
            white={"var(--text-color)"}
          />
        }
        cardTitle="Profession"
        cardTagTitle="xxx"
        isTagTitle={false}
      >
        {professionData?.map(({ description, title }, index) => (
          <>
            <div className="title-one">{title}</div>
            <div className="content-one">{description}</div>

            {index !== 3 && <div className="hr-line" />}
          </>
        ))}
      </AboutCard>

      <AboutCard
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
      </AboutCard>
      <div style={{ paddingBlock: 20, backgroundColor: "var(--bg-color)" }}>
        <IonButton className="outline-btn" fill="outline" expand="block">
          Create Your Free Profile
        </IonButton>
      </div>
    </>
  );
};

export default AboutTab;
