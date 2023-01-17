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
      <IonCard
        style={{
          marginTop: "-10px",
          borderRadius: "0 0 10px 10px",
          paddingTop: 25,
        }}
      >
        <IonLabel className="accordion-label">Email</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <MailIcon />

              <IonLabel className="icon_text">
                kenji.awurama@sperebio.tech
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>
      <IonCard style={{ paddingBlock: 20 }}>
        <IonLabel className="accordion-label">Phone</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose" className="accordion-header">
              <MobileIcon />
              <IonLabel className="icon_text">+1 (650) 123-4567</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
          <IonAccordion toggleIcon={chevronForward} value="second">
            <IonItem slot="header" color="rose" className="accordion-header">
              <CallIcon />

              <IonLabel className="icon_text">
                +1 (650) 345-6789 Ext 700
              </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
          <IonAccordion toggleIcon={chevronForward} value="third">
            <IonItem slot="header" color="rose" className="accordion-header">
              <FaxIcon />
              <IonLabel className="icon_text">+1 (650) 345-6789</IonLabel>
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
              <CalendarIcon />
              <IonLabel className="icon_text">
                Calendly {">"} Kenji Awurama{" "}
              </IonLabel>
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
              <WorldIcon />
              <IonLabel className="icon_text">www.sperebio.tech</IonLabel>
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
              <LocateFillIcon />
              <IonLabel className="icon_text">
                1886 Globe Trotter Court Palo Alto, CA 95051{" "}
              </IonLabel>
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
            marginInline: 20,
            marginTop: 10,
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
          <div className="blog_links">
            <MediumIcon />
            <div className="blog_links_head">
              <IonLabel className="ion-label">
                Sphere Bio Technologies Unveils Breakthrough Science That
                Regenerates Necrotic Cells{" "}
              </IonLabel>
              <IonLabel>Access Article on Medium</IonLabel>
            </div>
          </div>
          <div className="blog_links">
            <SoundCloudIcon />
            <div className="blog_links_head">
              <IonLabel className="ion-label">
                Cellular Science Chat With Kenji Awurama
              </IonLabel>
              <IonLabel>Access Audio on SoundCloud</IonLabel>
            </div>
          </div>

          <div className="blog_links">
            <DriveIcon />
            <div className="blog_links_head">
              <IonLabel className="ion-label">
                Sphere Bio Customer Spec Sheet
              </IonLabel>
              <IonLabel>Access File on Google Drive</IonLabel>
            </div>
          </div>
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
