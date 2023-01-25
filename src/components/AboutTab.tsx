import { useState } from "react";
import AboutCard from "./AboutCard/AboutCard";
import "../style/components/MediaCard/mediaCard.css";
import { IonButton, IonChip } from "@ionic/react";
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
} from "../assets/icons";
import Education from "../assets/educationLogo.png"
import Achievement from "../assets/achievement.png"
const AboutTab = () => {
  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Read Less" : "Read More";
  const extraContent = (
    <div>
      <span className="extra-content content-description">{loremText}</span>
      <span
        className="read-more content-description"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        {linkName === "Read Less" && "...Read less"}
      </span>
    </div>
  );

  return (
    <>
      <AboutCard
        style={{ marginTop: -10, borderRadius: "0px 0px 10px 10px" }}
        icon={<AvatarIcon />}
        cardTitle="Bio"
        cardTagTitle="xxx"
        isTagTitle={false}
      >
        <div
          className="content-description"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          Biology is my first love. As a Scientist my principal mission in life
          is the pursuit of life-changing cures. I founded Sphere Bio with the
          goal of discovering science that...
          <span className="read-more">
            {linkName === "Read More" && linkName}
          </span>
        </div>
        {readMore && extraContent}
      </AboutCard>

      <AboutCard
        icon={<ProfessionIcon />}
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
        icon = {<img src={Education} alt="Education Logo"/>} 
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
        icon={<AccoladesIcon />}
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
        icon={<img src={Achievement} alt="Achievemt Logo"/>} 
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
              style={{ color: "#606C82" }}
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
        icon={<GoalsIcon />}
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
        icon={<CommentIcon />}
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
        icon={<BreakerIcon />}
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
