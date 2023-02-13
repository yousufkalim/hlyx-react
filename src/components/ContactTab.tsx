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
import { SocialData } from "../constants/index";

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
  return (
    <>
      <HeroSession />
      <ContactCard title="Email">
        <div className="flex align-center justify-contain">
          <div className="flex align-center">
            <MailIcon color={"var(--icon-back)"} white={"var(--text-color)"} />
            <IonLabel className="icon_text">
              <a
                href="mailto:kenji.awurama@sperebio.tech"
                className="anchor-clear"
              >
                james.beckley@hlyx.io
              </a>
            </IonLabel>
          </div>

          <ChevronIcon />
        </div>
      </ContactCard>
      <ContactCard title="Phone">
        <IonAccordionGroup expand="compact" className="phone-card-container">
          <div className="flex align-center justify-contain mb-11">
            <div className="flex align-center">
              <MobileIcon
                color={"var(--icon-back)"}
                white={"var(--text-color)"}
              />
              <a href="tel:+16501234567" className="anchor-clear">
                <IonLabel className="icon_text">+1 (650) 123-4567</IonLabel>
              </a>
            </div>

            <ChevronIcon />
          </div>

          <div className="flex align-center justify-contain mx-19 mb-11">
            <div className="flex align-center ">
              <CallIcon
                color={"var(--icon-back)"}
                white={"var(--text-color)"}
              />
              <a href="tel:+16503456789" className="anchor-clear">
                <IonLabel className="icon_text">+1 (408) 420-9617</IonLabel>
              </a>
            </div>
            <ChevronIcon />
          </div>

          <div className="flex align-center justify-contain mx-19 mb-11">
            <div className="flex align-center">
              <FaxIcon white={"var(--text-color)"} />
              <a href="tel:+16503456789" className="anchor-clear">
                <IonLabel className="icon_text">
                  +1 (888) 796-7496 Ext 700
                </IonLabel>
              </a>
            </div>
            <ChevronIcon />
          </div>
        </IonAccordionGroup>
      </ContactCard>
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
            >
              <IonLabel className="icon_text">
                Calendly {">"} James R. Beckley{" "}
              </IonLabel>
            </a>
          </div>
          <ChevronIcon />
        </div>
      </ContactCard>
      <ContactCard title="Website">
        <div className="flex align-center justify-contain mx-19">
          <div className="flex align-center">
            <WorldIcon color={"var(--icon-back)"} white={"var(--text-color)"} />
            <a
              className="anchor-clear"
              href="https://www.aurorabiomed.com/"
              target={"_blank"}
            >
              <IonLabel className="icon_text">www.oriyn.com</IonLabel>
            </a>
          </div>

          <ChevronIcon />
        </div>
      </ContactCard>
      <ContactCard title="Office">
        <a
          href={`http://maps.google.com/?q=lahore`}
          className="anchor-clear"
          target={"_blank"}
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
                251 N City Dr Suite 128F, San Marcos, CA 92078{" "}
              </IonLabel>
            </div>

            <ChevronIcon />
          </div>
        </a>
      </ContactCard>
      <ContactCard title="Social Media">
        <div
          style={{
            display: "flex",
            gap: "12.39px",
            overflow: "scroll",
            maxWidth: "95%",
          }}
        >
          {SocialData?.map(({ icon, link, label }) => (
            <div className="icon-card">
              <a href={link} className="anchor-clear" target={"_blank"}></a>
              {icon}
              <IonLabel className="iconlabel">{label}</IonLabel>
            </div>
          ))}
        </div>
      </ContactCard>
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
