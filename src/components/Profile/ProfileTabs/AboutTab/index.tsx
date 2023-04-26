import "../../../../style/components/AboutCard/aboutCard.css";
import { IonButton, IonCard, IonLabel } from "@ionic/react";
import ReadMoreText from "../../../ReadMoreText";
import BusinessGoals from "./BusinessGoals";
import UserDetailCard from "../../UserDetailCard/UserDetailCard";
import Accolades from "./AccoladesItem";
import Achievements from "./Achievements/Achievements";
import EducationCard from "./EducationCard";
import Icebreakers from "./Icebreakers/Icebreakers";
import BusinessNeeds from "./BusinessNeeds/BusinessNeeds";
import { ProfileContext } from "../../../../context/profileContext";
import { useContext, useEffect, useState } from "react";
import { AboutTabProps, AboutProps } from "../../../../interface";
import axios from "axios";


export const AboutCard = ({
  title,
  children,
  button,
  ...rest
}: AboutTabProps) => {
  const { className } = rest;
  return (
    <IonCard className={`card-container ${className}`}>
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

const AboutTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { about } = userProfile;
  const [aboutData, setAboutData] = useState<AboutProps>({
    about: '',
    accolades: [],
    achievements: [],
    businessGoals: [],
    businessNeeds: [],
    city: "",
    company: "",
    education: [],
    fullName: "",
    hobbies: [],
    industry: "",
    interests: [],
    motto: "",
    occupation: "",
    profTitle: "",
    skills: [],
    state: "",
    userAvatar: ""
  })


  useEffect(() => {
    const token = localStorage.getItem("token")
    const cardId = localStorage.getItem("cardId")
    axios.get(`https://dev.api.hlyx.me/api/v1/card/find/about-page/${cardId}`, {
      headers: {
        Authorization: token
      }
    }).then((res) => {
      console.log("resofabout", res.data.card)
      setAboutData(res?.data?.card)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <UserDetailCard />
      {aboutData?.about && (
        <AboutCard title="Bio">
          <ReadMoreText text={aboutData?.about} limit={171} />
        </AboutCard>
      )}
      {aboutData?.company && (
        <AboutCard title="Profession" className="profession-about-card">
          <div className="profession-list">
            <div className="profession-item" >
              <div className={`profession-line line-${about.profession[0].lineColor}`} />
              <p className="profession-title">company</p>
              <p className="profession-description">{aboutData?.company}</p>
            </div>
          </div>
          <div className="profession-list">
            <div className="profession-item">
              <div className={`profession-line line-${about.profession[1].lineColor}`} />
              <p className="profession-title">Title / Role</p>
              <p className="profession-description">{aboutData?.profTitle}</p>
            </div>
          </div>
          <div className="profession-list">
            <div className="profession-item" >
              <div className={`profession-line line-${about.profession[2].lineColor}`} />
              <p className="profession-title">Occupation / Profession</p>
              <p className="profession-description">{aboutData?.occupation}</p>
            </div>
          </div>
          <div className="profession-list">
            <div className="profession-item" >
              <div className={`profession-line line-${about.profession[3].lineColor}`} />
              <p className="profession-title">Industry</p>
              <p className="profession-description">{aboutData?.industry}</p>
            </div>
          </div>
        </AboutCard>
      )}
      <AboutCard title="Education" className="education-about-card">
        <EducationCard aboutData={aboutData} />
      </AboutCard>
      <AboutCard
        title="Accolades"
        button="View All"
        className="accolades-about-card"
      >
        <Accolades aboutData={aboutData} />
      </AboutCard>
      <AboutCard
        title="Achievements"
        button="View All"
        className="achievement-about-card"
      >
        <Achievements aboutData={aboutData} />
      </AboutCard>
      <AboutCard title="Business Goals" className="bussiness-goals-about-card">
        <BusinessGoals aboutData={aboutData} />
      </AboutCard>
      <AboutCard
        title="Business Needs"
        button="View All"
        className="business-needs-about-card"
      >
        <BusinessNeeds aboutData={aboutData} />
      </AboutCard>
      <AboutCard
        title="Icebreakers"
        className="border_none icebreakers-about-card"
      >
        <Icebreakers aboutData={aboutData} />
      </AboutCard>
    </>
  );
};

export default AboutTab;
