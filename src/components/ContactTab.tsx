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

const ContactTab = () => {
  return (
    <>
      <IonCard>
        <IonLabel className="accordion-label">Email</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <div className="ion-icon">
                <MailIcon />
              </div>
              <IonLabel>kenji.awurama@sperebio.tech</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>
      <IonCard style={{ paddingTop: "21.58px", paddingBottom: 10 }}>
        <IonLabel className="accordion-label">Phone</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose" className="accordion-header">
              <div className="ion-icon">
                <MobileIcon />
              </div>
              <IonLabel>+1 (650) 123-4567</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
          <IonAccordion toggleIcon={chevronForward} value="second">
            <IonItem slot="header" color="rose" className="accordion-header">
              <div className="ion-icon">
                <CallIcon />
              </div>
              <IonLabel>+1 (650) 345-6789 Ext 700</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
          <IonAccordion toggleIcon={chevronForward} value="third">
            <IonItem slot="header" color="rose" className="accordion-header">
              <div className="ion-icon">
                <FaxIcon />
              </div>
              <IonLabel>+1 (650) 345-6789</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Calendar</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <div className="ion-icon">
                <CalendarIcon />
              </div>
              <IonLabel>Calendly {">"} Kenji Awurama </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Website</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose" className="accordion-header">
              <div className="ion-icon">
                <WorldIcon />
              </div>
              <IonLabel>www.sperebio.tech</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Office</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <div className="ion-icon">
                <LocateFillIcon />
              </div>
              <IonLabel>1886 Globe Trotter Court Palo Alto, CA 95051 </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Social Media</IonLabel>
        <div
          style={{
            display: "flex",
            marginLeft: 20,
            marginTop: 10,
            justifyContent: "space-around",
          }}
        >
          <div className="ion-icon">
            <LinkedinIcon />
          </div>
          <div className="ion-icon social-media-icon">
            <YoutubeIcon />
          </div>
          <div className="ion-icon social-media-icon">
            <SlackIcon />
          </div>
          <div className="ion-icon social-media-icon">
            <ShipFaceIcon />
          </div>
          <div className="ion-icon social-media-icon">
            <MaskIcon />
          </div>
        </div>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className="accordion-label">Links</IonLabel>
        <div style={{ display: "flex", marginLeft: 20, flexDirection: "row" }}>
          <div className="ion-icon">
            <MediumIcon />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 10,
            }}
          >
            <IonLabel className="ion-label">
              Sphere Bio Technologies Unveils Breakthrough Science That
              Regenerates Necrotic Cells{" "}
            </IonLabel>
            <IonLabel style={{ fontWeight: 400, marginTop: 5 }}>
              Access Article on Medium
            </IonLabel>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: 20,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <div className="ion-icon">
            <SoundCloudIcon />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 10,
            }}
          >
            <IonLabel className="ion-label">
              Cellular Science Chat With Kenji Awurama
            </IonLabel>
            <IonLabel style={{ fontWeight: 400, marginTop: 5 }}>
              Access Audio on SoundCloud
            </IonLabel>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginLeft: 20,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
          <div className="ion-icon">
            <DriveIcon />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 10,
            }}
          >
            <IonLabel className="ion-label">
              Sphere Bio Customer Spec Sheet
            </IonLabel>
            <IonLabel style={{ fontWeight: 400, marginTop: 5 }}>
              Access File on Google Drive
            </IonLabel>
          </div>
        </div>
      </IonCard>

      <IonButton className="outline-btn" fill="outline" expand="block">
        Create Your Free Profile
      </IonButton>
    </>
  );
};

export default ContactTab;
