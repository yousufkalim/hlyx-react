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

const LinksData = [
  {
    hyperadd: "https://medium.com/",
    icon: <MediumIcon />,
    title:
      "Sphere Bio Technologies Unveils Breakthrough Science That Regenerates Necrotic Cells",
    description: "Access Article on Medium",
  },
  {
    icon: <SoundCloudIcon />,
    hyperadd: "https://soundcloud.com/",
    title: "Cellular Science Chat With Kenji Awurama",
    description: "Access Audio on SoundCloud",
  },
  {
    hyperadd: "https://www.google.com/drive/",
    icon: <DriveIcon />,
    title: "Sphere Bio Customer Spec Sheet",
    description: "Access File on Google Drive",
  },
];

const ContactTab = () => {
  return (
    <>
      <IonCard className="tab_card">
        <IonLabel className="accordion-label">Email</IonLabel>
        <div className="flex align-center justify-contain mx-19">
          <div className="flex align-center">
            <MailIcon />

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
      </IonCard>
      <IonCard style={{ paddingBlock: 20 }}>
        <IonLabel className="accordion-label">Phone</IonLabel>
        <IonAccordionGroup expand="compact">
          <div className="flex align-center justify-contain mx-19 mb-11">
            <div className="flex align-center">
              <MobileIcon />
              <a
                href="tel:+16501234567"
                className="anchor-clear"
              >
                <IonLabel className="icon_text">+1 (650) 123-4567</IonLabel>
              </a>
            </div>

            <ChevronIcon />
          </div>

          <div className="flex align-center justify-contain mx-19 mb-11">
            <div className="flex align-center">
              <CallIcon />
              <a
                href="tel:+16503456789"
                className="anchor-clear"
              >
                <IonLabel className="icon_text">
                  +1 (650) 345-6789 Ext 700
                </IonLabel>
              </a>
            </div>
            <ChevronIcon />
          </div>

          <div className="flex align-center justify-contain mx-19 mb-11">
            <div className="flex align-center">
              <FaxIcon />
              <a
                href="tel:+16503456789"
                className="anchor-clear"
              >
                <IonLabel className="icon_text">+1 (650) 345-6789</IonLabel>
              </a>
            </div>
            <ChevronIcon />
          </div>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Calendar</IonLabel>
        <div className="flex align-center justify-contain mx-19">
          <div className="flex align-center">
            <CalendarIcon />
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

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Website</IonLabel>
        <div className="flex align-center justify-contain mx-19">
          <div className="flex align-center">
            <WorldIcon />
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

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Office</IonLabel>
        <a href={`http://maps.google.com/?q=lahore`} className="anchor-clear" target={"_blank"}>
          <div className="flex align-center justify-contain mx-19">
            <div className="flex align-center">
              <LocateFillIcon />
              <IonLabel className="icon_text office_icon_text" style={{maxWidth: 200}}>
                1886 Globe Trotter Court
                 Palo Alto, CA 95051{" "}
              </IonLabel>
            </div>

            <ChevronIcon />
          </div>
        </a>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px"}}>
        <IonLabel className="accordion-label">Social Media</IonLabel>
        <div
          style={{
            display: "flex",
            paddingInline: 20,
            gap:"15px",
            justifyContent: "flex-start",
            flexWrap:"wrap",
            lineHeight:0
          }}
        >
          <a
            href="https://www.linkedin.com/"
            className="anchor-clear"
            target={"_blank"}
          >
            <LinkedinIcon />
          </a>
          <a
            className="anchor-clear"
            href="https://www.youtube.com/"
            target={"_blank"}
          >
            <YoutubeIcon />
          </a>
          <a
            className="anchor-clear"
            href="https://slack.com/"
            target={"_blank"}
          >
            <SlackIcon />
          </a>
          <a
            className="anchor-clear"
            href="https://www.reddit.com/"
            target={"_blank"}
          >
            <ShipFaceIcon />
          </a>
          <a
            className="anchor-clear"
            href="https://discord.com/"
            target={"_blank"}
          >
            <MaskIcon />
          </a>
          <a
            className="anchor-clear"
            href="https://twitter.com/"
            target={"_blank"}
          >
          <Twitter/>
          </a>
          <a
            className="anchor-clear"
            href="https://www.facebook.com/"
            target={"_blank"}
          >
          <Facebook/>
          </a>
        </div>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Links</IonLabel>
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

      <IonButton
        className="outline-btn"
        fill="outline"
        expand="block"
        style={{
          marginBlock: 20,
          fontWeight: 600,
          fontSize: 15,
          lineHeight: "17px",
          fontFamily: "Poppins",
        }}
      >
        Create Your Free Profile
      </IonButton>
    </>
  );
};

export default ContactTab;
