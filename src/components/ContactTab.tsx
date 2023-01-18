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
  WorldIcon,
  YoutubeIcon,
} from "../assets/icons";
import LinkCard from "./LinkCard";

const LinksData = [
  {
    icon: <MediumIcon />,
    title:
      "Sphere Bio Technologies Unveils Breakthrough Science That Regenerates Necrotic Cells",
    description: "Access Article on Medium",
  },
  {
    icon: <SoundCloudIcon />,
    title: "Cellular Science Chat With Kenji Awurama",
    description: "Access Audio on SoundCloud",
  },
  {
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
              kenji.awurama@sperebio.tech
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

              <IonLabel className="icon_text">+1 (650) 123-4567</IonLabel>
            </div>

            <ChevronIcon />
          </div>

          <div className="flex align-center justify-contain mx-19 mb-11">
            <div className="flex align-center">
              <CallIcon />

              <IonLabel className="icon_text">
                +1 (650) 345-6789 Ext 700
              </IonLabel>
            </div>

            <ChevronIcon />
          </div>

          <div className="flex align-center justify-contain mx-19 mb-11">
            <div className="flex align-center">
              <FaxIcon />

              <IonLabel className="icon_text">+1 (650) 345-6789</IonLabel>
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

            <IonLabel className="icon_text">
              Calendly {">"} Kenji Awurama{" "}
            </IonLabel>
          </div>

          <ChevronIcon />
        </div>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Website</IonLabel>
        <div className="flex align-center justify-contain mx-19">
          <div className="flex align-center">
            <WorldIcon />

            <IonLabel className="icon_text">www.sperebio.tech</IonLabel>
          </div>

          <ChevronIcon />
        </div>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Office</IonLabel>
        <div className="flex align-center justify-contain mx-19">
          <div className="flex align-center">
            <LocateFillIcon />

            <IonLabel className="icon_text">
              1886 Globe Trotter Court<br/> Palo Alto, CA 95051{" "}
            </IonLabel>
          </div>

          <ChevronIcon />
        </div>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Social Media</IonLabel>
        <div
          style={{
            display: "flex",
            marginInline: 20,
            justifyContent: "space-between",
          }}
        >
          <LinkedinIcon />
          <YoutubeIcon />
          <SlackIcon />
          <ShipFaceIcon />
          <MaskIcon />
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
          }}
        >
          {LinksData.map(({ icon, title, description }, index) => (
            <LinkCard icon={icon} title={title} description={description} />
          ))}
        </div>
      </IonCard>

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

export default ContactTab;
