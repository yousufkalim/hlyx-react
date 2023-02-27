import { IonAccordionGroup, IonButton, IonCard, IonLabel } from "@ionic/react";
import { useContext } from "react";
import {
  CallIcon,
  ChevronIcon,
  MailIcon,
  MobileIcon,
  WorldIcon,
} from "../assets/icons";
import { SocialMediaIcons } from "../constants/index";
import { ProfileContext } from "../context/profileContext";
import "../style/components/ContactTab.css";
import LinkCard from "./LinkCard";
import HeroSession from "./MediaCard/heroSession";
import { AboutCard } from "./Profile/ProfileTabs/AboutTab";
import ReadMoreText from "./ReadMoreText";

const ContactCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <IonCard className="card-container">
      <IonLabel className="content-card-heading">{title}</IonLabel>
      {children}
    </IonCard>
  );
};

const HlyxContactTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { contact } = userProfile;
  return (
    <>
      <HeroSession />
      {userProfile?.about?.bio && (
        <AboutCard title="Bio">
          <ReadMoreText text={userProfile?.about?.bio} limit={171} />
        </AboutCard>
      )}

      {contact?.phone && (
        <ContactCard title="Contact Me">
          <IonAccordionGroup expand="compact" className="phone-card-container">
            {userProfile?.contact?.email && (
              <a
                href={`mailto:${userProfile?.contact?.email}`}
                target="__blank"
                className="anchor-clear"
              >
                <div className="flex align-center justify-contain mx-19 mb-11">
                  <div className="flex align-center ">
                    <MailIcon
                      color={"var(--icon-back)"}
                      white={"var(--text-color)"}
                    />
                    <IonLabel className="icon_text">
                      {userProfile?.contact?.email}
                    </IonLabel>
                  </div>
                  <ChevronIcon />
                </div>
              </a>
            )}
            <a href={`tel:${contact?.phone?.number}`} className="anchor-clear">
              <div className="flex align-center justify-contain mb-11">
                <div className="flex align-center">
                  <MobileIcon
                    color={"var(--icon-back)"}
                    white={"var(--text-color)"}
                  />
                  <IonLabel className="icon_text">
                    {contact?.phone?.number}
                  </IonLabel>
                </div>

                <ChevronIcon />
              </div>
            </a>

            <a href={`tel:${contact?.phone?.mobile}`} className="anchor-clear">
              <div className="flex align-center justify-contain mx-19 mb-11">
                <div className="flex align-center ">
                  <CallIcon
                    color={"var(--icon-back)"}
                    white={"var(--text-color)"}
                  />
                  <IonLabel className="icon_text">
                    {contact?.phone?.mobile}
                  </IonLabel>
                </div>
                <ChevronIcon />
              </div>
            </a>

            {contact?.website && (
              <a
                target={"_blank"}
                rel="noreferrer"
                href={`https://${contact?.website}`}
                className="flex align-center justify-contain mx-19 anchor-clear"
              >
                <div className="flex align-center">
                  <WorldIcon
                    color={"var(--icon-back)"}
                    white={"var(--text-color)"}
                  />
                  <IonLabel className="icon_text">{contact.website}</IonLabel>
                </div>

                <ChevronIcon />
              </a>
            )}
          </IonAccordionGroup>
        </ContactCard>
      )}

      {contact?.socialMedia && (
        <ContactCard title="Social Media">
          <div className="Social-icons-list">
            {contact?.socialMedia?.map(
              ({ link, label }: any, index: number) => (
                <a
                  href={link}
                  className="anchor-clear"
                  target={"_blank"}
                  rel="noreferrer"
                  key={index}
                >
                  <div className="icon-card">
                    <>
                      {SocialMediaIcons[label]}
                      <IonLabel className="iconlabel">{label}</IonLabel>
                    </>
                  </div>
                </a>
              )
            )}
          </div>
        </ContactCard>
      )}
      {contact?.blogLink && (
        <ContactCard title="Links">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            {contact?.blogLink?.map(
              ({ type, link, title, description }: any, index: number) => (
                <LinkCard
                  key={index}
                  icon={type}
                  title={title}
                  hyperaddress={link}
                  description={description}
                />
              )
            )}
          </div>
        </ContactCard>
      )}
    </>
  );
};

export default HlyxContactTab;
