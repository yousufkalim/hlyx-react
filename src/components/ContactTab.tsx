import { IonButton, IonCard, IonLabel, IonAccordionGroup } from "@ionic/react";
import "../style/components/ContactTab.css";
import {
  CalendarIcon,
  CallIcon,
  ChevronIcon,
  DriveIcon,
  FaxIcon,
  LocateFillIcon,
  MailIcon,
  MobileIcon,
  SoundCloudIcon,
  WorldIcon,
  MediumIcon,
} from "../assets/icons";
import LinkCard from "./LinkCard";
import HeroSession from "./MediaCard/heroSession";
import { SocialData, SocialMediaIcons } from "../constants/index";
import { useContext } from "react";
import { ProfileContext } from "../context/profileContext";

const JamesLinksData = [
  {
    hyperadd: "https://medium.com/",
    icon: <MediumIcon color={"var(--social-back)"} />,
    title: "How Automation Technology Can Increase Efficiency And Revenue",
    description: "Access Article on Medium",
  },
  {
    icon: <SoundCloudIcon color={"var(--social-back)"} />,
    hyperadd: "https://soundcloud.com/",
    title: "The Future of Business Technology And How Oriyn Is Making Waves",
    description: "Access Audio on SoundCloud",
  },
  {
    hyperadd: "https://www.google.com/drive/",
    icon: <DriveIcon color={"var(--social-back)"} />,
    title: "Oriyn Business Solutions Deck 2023",
    description: "Access File on Google Drive",
  },
];

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

const ContactTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { contact } = userProfile;
  return (
    <>
      <HeroSession />
      {contact?.email && (
        <ContactCard title="Email">
          <div className="flex align-center justify-contain">
            <div className="flex align-center">
              <MailIcon
                color={"var(--icon-back)"}
                white={"var(--text-color)"}
              />
              <IonLabel className="icon_text">
                <a
                  href="mailto:kenji.awurama@sperebio.tech"
                  className="anchor-clear"
                >
                  {contact?.email}
                </a>
              </IonLabel>
            </div>

            <ChevronIcon />
          </div>
        </ContactCard>
      )}

      {contact?.phone && (
        <ContactCard title="Phone">
          <IonAccordionGroup expand="compact" className="phone-card-container">
            <div className="flex align-center justify-contain mb-11">
              <div className="flex align-center">
                <MobileIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <a href="tel:+16501234567" className="anchor-clear">
                  <IonLabel className="icon_text">
                    {contact?.phone?.number}
                  </IonLabel>
                </a>
              </div>

              <ChevronIcon />
            </div>
            {contact?.phone?.faxNumber.map((number: any, index: number) => (
              <div
                className="flex align-center justify-contain mx-19 mb-11"
                key={index}
              >
                <div className="flex align-center ">
                  <CallIcon
                    color={"var(--icon-back)"}
                    white={"var(--text-color)"}
                  />
                  <a href="tel:+16503456789" className="anchor-clear">
                    <IonLabel className="icon_text">{number}</IonLabel>
                  </a>
                </div>
                <ChevronIcon />
              </div>
            ))}

            {/* <div className="flex align-center justify-contain mx-19 mb-11">
              <div className="flex align-center">
                <FaxIcon white={"var(--text-color)"} />
                <a href="tel:+16503456789" className="anchor-clear">
                  <IonLabel className="icon_text">
                    +1 (888) 796-7496 Ext 700
                  </IonLabel>
                </a>
              </div>
              <ChevronIcon />
            </div> */}
          </IonAccordionGroup>
        </ContactCard>
      )}
      {contact?.calendar && (
        <ContactCard title="Calendar">
          <div className="flex align-center justify-contain mx-19">
            <div className="flex align-center">
              <CalendarIcon
                color={"var(--icon-back)"}
                white={"var(--text-color)"}
              />
              <a
                href="https://calendly.com/wajeehaslam/30min"
                className="anchor-clear"
                target={"_blank"}
                rel="noreferrer"
              >
                <IonLabel className="icon_text">{contact?.calendar}</IonLabel>
              </a>
            </div>
            <ChevronIcon />
          </div>
        </ContactCard>
      )}

      {contact?.website && (
        <ContactCard title="Website">
          <div className="flex align-center justify-contain mx-19">
            <div className="flex align-center">
              <WorldIcon
                color={"var(--icon-back)"}
                white={"var(--text-color)"}
              />
              <a
                className="anchor-clear"
                href="https://www.aurorabiomed.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <IonLabel className="icon_text">{contact?.website}</IonLabel>
              </a>
            </div>

            <ChevronIcon />
          </div>
        </ContactCard>
      )}

      {contact?.officeAddress && (
        <ContactCard title="Office">
          <a
            href={`http://maps.google.com/?q=lahore`}
            className="anchor-clear"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="flex align-center justify-contain mx-19">
              <div className="flex align-center">
                <LocateFillIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <IonLabel
                  className="icon_text office_icon_text"
                  style={{ maxWidth: 200 }}
                >
                  {contact?.officeAddress}
                </IonLabel>
              </div>

              <ChevronIcon />
            </div>
          </a>
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
          {JamesLinksData.map(
            ({ icon, title, hyperadd, description }, index) => (
              <LinkCard
                key={index}
                icon={icon}
                title={title}
                hyperaddress={hyperadd}
                description={description}
              />
            )
          )}
        </div>
      </ContactCard>
      <div style={{ paddingBlock: 20, backgroundColor: "var(--bg-color)" }}>
        <IonButton
          className="outline-btn"
          fill="outline"
          expand="block"
          shape="round"
          style={{
            fontWeight: 600,
            fontSize: 15,
            lineHeight: "17px",
            fontFamily: "Poppins",
          }}
        >
          Create Your Free Profile
        </IonButton>
      </div>
    </>
  );
};

export default ContactTab;
