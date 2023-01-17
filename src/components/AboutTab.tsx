import { useState } from "react";
import AboutCard from "./AboutCard/AboutCard";
import "../style/components/MediaCard/mediaCard.css";
import { IonButton, IonCardContent, IonCardHeader, IonChip } from "@ionic/react";
import { accolatesData, acheivementData, brakerData, commentsData, educationData, goalsData, loremText, professionData } from "../constants";
import { AccoladesIcon, AcheievementIcon, AvatarIcon, BreakerIcon, CommentIcon, EducationIcon, ForwardIcon, GoalsIcon, ProfessionIcon } from "../assets/icons";


const AboutTab = () => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = <div>
    <p className="extra-content">
      {loremText}
    </p>
  </div>
  const linkName = readMore ? 'Read Less' : 'Read More'

  return (
    <>
      <AboutCard icon={<AvatarIcon />} cardTitle="Bio" cardTagTitle="xxx" isTagTitle={false}>
        <div className="" onClick={() => { setReadMore(!readMore) }}>Biology is my first love. As a Scientist my principal mission in life is the pursuit of life-changing cures. I founded Sphere Bio with the goal of discovering science that...{linkName}</div>
        {readMore && extraContent}
      </AboutCard>

      <AboutCard icon={<ProfessionIcon />} cardTitle="Profession" cardTagTitle="xxx" isTagTitle={false}>
        {professionData?.map(({ description, title }) => (
          <>
            <IonCardHeader>
              {title}
            </IonCardHeader>
            <IonCardContent>
              {description}
            </IonCardContent>
          </>
        ))}
      </AboutCard>

      <AboutCard icon={<EducationIcon />} cardTitle="Education" cardTagTitle="xxx" isTagTitle={false}>
        {educationData?.map(({ description }) => (
          <>
            <div>
              <ForwardIcon />
            </div>
            <IonCardContent>
              {description}
            </IonCardContent>
          </>
        ))}
      </AboutCard>

      <AboutCard icon={<AccoladesIcon />} cardTitle="Accolades" cardTagTitle="xxx" isTagTitle={false}>
        {accolatesData?.map(({ description }) => (
          <>
            <div>
              <ForwardIcon />
            </div>
            <IonCardContent>
              {description}
            </IonCardContent>
          </>
        ))}
      </AboutCard>

      <AboutCard icon={<AcheievementIcon />} cardTitle="Achievements" cardTagTitle="xxx" isTagTitle={false}>
        {acheivementData?.map(({ description }) => (
          <>
            <div>
              2022
            </div>
            <IonCardContent>
              {description}
            </IonCardContent>
          </>
        ))}
      </AboutCard>

      <AboutCard icon={<GoalsIcon />} cardTitle="Secular Goals" cardTagTitle="2023" isTagTitle={true}>
        {goalsData?.map(({ description, icon }) => (
          <>
            <div>
              {icon}
            </div>
            <IonCardContent>
              {description}
            </IonCardContent>
          </>
        ))}
      </AboutCard>

      <AboutCard icon={<CommentIcon />} cardTitle="Needs & Asks" cardTagTitle="2023" isTagTitle={true}>
        {commentsData?.map(({ description, icon }) => (
          <>
            <div>
              {icon}
            </div>
            <IonCardContent>
              {description}
            </IonCardContent>
          </>
        ))}
      </AboutCard>

      <AboutCard icon={<BreakerIcon />} cardTitle="Icebreakers" cardTagTitle="xxx" isTagTitle={false}>
        {brakerData?.map(({ description, tags }) => (
          <>
            <IonCardContent>
              {description}
            </IonCardContent>
            {tags?.map((item) => (
              <>
                <IonChip className="" color="primary">{item}</IonChip>
              </>
            ))}
            <IonCardContent>
              Motto
            </IonCardContent>
            <IonCardHeader>
              Science is an oyster, serve it up tastefully.
            </IonCardHeader>
          </>
        ))}
      </AboutCard>
      <IonButton
        className="outline-btn"
        fill="outline"
        expand="block"
        style={{ marginBlock: 20, fontWeight: 600 }}
      >
        Create Your Free Profile
      </IonButton>
    </>
  );
};

export default AboutTab;
