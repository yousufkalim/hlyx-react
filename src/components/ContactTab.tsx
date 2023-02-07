import {
  IonButton,
  IonCard,
  IonLabel,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
} from "@ionic/react";

import { chevronForward } from "ionicons/icons";
import "../style/components/MediaCard/mediaCard.css";
import {
  CalendarIcon,
  CallIcon,
  ChevronIcon,
  DriveIcon,
  Facebook,
  FaxIcon,
  LinkedinIcon,
  LocateFillIcon,
  MailIcon,
  MaskIcon,
  MediumIcon,
  MobileIcon,
  ShipFaceIcon,
  SlackIcon,
  SoundCloudIcon,
  Twitter,
  WorldIcon,
  YoutubeIcon,
} from "../assets/icons";
import LinkCard from "./LinkCard";
import HeroSession from "./MediaCard/heroSession";

const LinksData = [
  {
    hyperadd: "https://medium.com/",
    icon: <MediumIcon color={"var(--social-back)"} />,
    title:
      "Sphere Bio Technologies Unveils Breakthrough Science That Regenerates Necrotic Cells",
    description: "Access Article on Medium",
  },
  {
    icon: <SoundCloudIcon color={"var(--social-back)"} />,
    hyperadd: "https://soundcloud.com/",
    title: "Cellular Science Chat With Kenji Awurama",
    description: "Access Audio on SoundCloud",
  },
  {
    hyperadd: "https://www.google.com/drive/",
    icon: <DriveIcon color={"var(--social-back)"} />,
    title: "Sphere Bio Customer Spec Sheet",
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
    <IonCard className="px-19 py-30">
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
                kenji.awurama@sperebio.tech
              </a>
            </IonLabel>
          </div>

          <ChevronIcon />
        </div>
      </ContactCard>

      <ContactCard title="Phone">
        <IonAccordionGroup expand="compact">
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
            <div className="flex align-center">
              <CallIcon
                color={"var(--icon-back)"}
                white={"var(--text-color)"}
              />
              <a href="tel:+16503456789" className="anchor-clear">
                <IonLabel className="icon_text">
                  +1 (650) 345-6789 Ext 700
                </IonLabel>
              </a>
            </div>
            <ChevronIcon />
          </div>

          <div className="flex align-center justify-contain mx-19 mb-11">
            <div className="flex align-center">
              <FaxIcon color={"var(--icon-back)"} />
              <a href="tel:+16503456789" className="anchor-clear">
                <IonLabel className="icon_text">+1 (650) 345-6789</IonLabel>
              </a>
            </div>
            <ChevronIcon />
          </div>
        </IonAccordionGroup>
      </ContactCard>

      <IonCard className="px-19">
        <IonLabel className="card-heading">Calendar</IonLabel>
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
                Calendly {">"} Kenji Awurama{" "}
              </IonLabel>
            </a>
          </div>
          <ChevronIcon />
        </div>
      </IonCard>

      <IonCard className="px-19">
        <IonLabel className="card-heading">Website</IonLabel>
        <div className="flex align-center justify-contain mx-19">
          <div className="flex align-center">
            <WorldIcon color={"var(--icon-back)"} white={"var(--text-color)"} />
            <a
              className="anchor-clear"
              href="https://www.aurorabiomed.com/"
              target={"_blank"}
            >
              <IonLabel className="icon_text">www.sperebio.tech</IonLabel>
            </a>
          </div>

          <ChevronIcon />
        </div>
      </IonCard>

      <IonCard className="px-19">
        <IonLabel className="card-heading">Office</IonLabel>
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
                1886 Globe Trotter Court Palo Alto, CA 95051{" "}
              </IonLabel>
            </div>

            <ChevronIcon />
          </div>
        </a>
      </IonCard>

      <IonCard className="px-19">
        <IonLabel className="card-heading">Social Media</IonLabel>
        <div
          style={{
            display: "grid",
            paddingInline: 20,
            gap: "15px",
            gridTemplateColumns: "repeat(5, 58px)",
            lineHeight: 0,
          }}
        >
          <a
            href="https://www.linkedin.com/"
            className="anchor-clear"
            target={"_blank"}
          >
            <LinkedinIcon color={"var(--social-back)"} />
          </a>
          <a
            className="anchor-clear"
            href="https://www.youtube.com/"
            target={"_blank"}
          >
            <YoutubeIcon color={"var(--social-back)"} />
          </a>
          <a
            className="anchor-clear"
            href="https://slack.com/"
            target={"_blank"}
          >
            <SlackIcon color={"var(--social-back)"} />
          </a>
          <a
            className="anchor-clear"
            href="https://www.reddit.com/"
            target={"_blank"}
          >
            <ShipFaceIcon color={"var(--social-back)"} />
          </a>
          <a
            className="anchor-clear"
            href="https://discord.com/"
            target={"_blank"}
          >
            <MaskIcon color={"var(--social-back)"} />
          </a>
          <a
            className="anchor-clear"
            href="https://twitter.com/"
            target={"_blank"}
          >
            <Twitter color={"var(--social-back)"} />
          </a>
          <a
            className="anchor-clear"
            href="https://www.facebook.com/"
            target={"_blank"}
          >
            <Facebook color={"var(--social-back)"} />
          </a>
        </div>
      </IonCard>

      <IonCard className="px-19">
        <IonLabel className="card-heading">Links</IonLabel>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          {LinksData.map(({ icon, title, hyperadd, description }, index) => (
            <LinkCard
              icon={icon}
              title={title}
              hyperaddress={hyperadd}
              description={description}
            />
          ))}
        </div>
      </IonCard>
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
