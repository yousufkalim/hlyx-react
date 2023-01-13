import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonIcon, IonLabel, IonSegmentButton, IonSegment, IonAccordionGroup, IonAccordion, IonItem } from '@ionic/react';
import profileOne from "../../assets/media/media-image.png";
import sphere from "../../assets/sphere.png";
import { briefcaseOutline, calendarNumber, call, chevronForward, globe, location, locationOutline, logoDiscord, logoLinkedin, logoReddit, logoSlack, logoYoutube, mail, mailOutline, phonePortrait, print } from 'ionicons/icons';
import '../../style/components/MediaCard/mediaCard.css';
import linkIcon from "../../assets/icons/link-icon.png";

const MediaCard = () => {
  return (
    <>
      <IonCard style={{ borderRadius: "35px 35px 10px 10px", margin: "10px" }}>
        <div style={{ position: "relative" }}>
          <img alt="Silhouette of mountains" src={profileOne} />
          <img alt="" className='avatar-icon' src={sphere} />
        </div>
        <IonCardHeader>
          <IonCardSubtitle>Dr. Kenji Awurama
            /
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonIcon slot='start' icon={briefcaseOutline}></IonIcon>
          Executive Director at <b>Sphere Bio Tech</b>
        </IonCardContent>

        <IonCardContent>
          <IonIcon slot='start' icon={locationOutline}></IonIcon>
          Palo Alto, California
        </IonCardContent>
      </IonCard>

      <IonCard style={{ paddingBottom: 0 }}>
        <IonButton expand='block' style={{
          margin: 0,
          fontFamily: 'Poppins',
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px"
        }}>
          <img src={linkIcon} style={{ marginRight: 5 }} />
          Link with Me
        </IonButton>
      </IonCard>

      <IonCard style={{ margin: 10, padding: "0px 0px 10px 5px" }}>
        <IonSegment value="1">
          <IonSegmentButton color="primary" value="1">
            <IonLabel>Contact</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2">
            <IonLabel>About</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="3">
            <IonLabel>Service</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="4">
            <IonLabel>Portflio</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <IonLabel className='accordion-label'>Email</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonIcon slot='start' icon={mail}></IonIcon>
              <IonLabel>kenji.awurama@sperebio.tech</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px", paddingBottom: 10, marginBottom: 10 }}>
        <IonLabel className='accordion-label'>Phone</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonIcon slot='start' icon={phonePortrait}></IonIcon>
              <IonLabel>+1 (650) 123-4567</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonIcon slot='start' icon={call}></IonIcon>
              <IonLabel>+1 (650) 345-6789   Ext 700</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonIcon slot='start' icon={print}></IonIcon>
              <IonLabel>+1 (650) 345-6789</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className='accordion-label'>Calendar</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonIcon slot='start' icon={calendarNumber}></IonIcon>
              <IonLabel>Calendly Kenji Awurama </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className='accordion-label'>Website</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonIcon slot='start' icon={globe}></IonIcon>
              <IonLabel>www.sperebio.tech</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className='accordion-label'>Office</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonIcon slot='start' icon={location}></IonIcon>
              <IonLabel>1886 Globe Trotter Court
                Palo Alto, CA 95051 </IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className='accordion-label'>Social Media</IonLabel>
        <div style={{ display: "flex", marginLeft: 20, marginTop: 10, justifyContent: "space-around" }}>
          <IonIcon className='social-media-icon' slot='start' icon={logoLinkedin}></IonIcon>
          <IonIcon className='social-media-icon' slot='start' icon={logoYoutube}></IonIcon>
          <IonIcon className='social-media-icon' slot='start' icon={logoSlack}></IonIcon>
          <IonIcon className='social-media-icon' slot='start' icon={logoReddit}></IonIcon>
          <IonIcon className='social-media-icon' slot='start' icon={logoDiscord}></IonIcon>

        </div>
      </IonCard>

      <IonCard style={{ paddingTop: "21.58px" }}>
        <IonLabel className='accordion-label'>Links</IonLabel>
        <div style={{ display: "flex", marginLeft: 20, marginTop: 10, flexDirection: "row" }}>
          <IonIcon slot='start' icon={calendarNumber}></IonIcon>
          <div style={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}>
            <IonLabel>Cellular Science Chat With Kenji Awurama</IonLabel>
            <IonLabel style={{ fontWeight: 400, marginTop: 5 }}>Access Article on Medium</IonLabel>
          </div>
        </div>

        <div style={{ display: "flex", marginLeft: 20, marginTop: 10, flexDirection: "row" }}>
          <IonIcon slot='start' icon={calendarNumber}></IonIcon>
          <div style={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}>
            <IonLabel>Cellular Science Chat With Kenji Awurama</IonLabel>
            <IonLabel style={{ fontWeight: 400, marginTop: 5 }}>Access Article on Medium</IonLabel>
          </div>
        </div>

        <div style={{ display: "flex", marginLeft: 20, marginTop: 10, flexDirection: "row" }}>
          <IonIcon slot='start' icon={calendarNumber}></IonIcon>
          <div style={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}>
            <IonLabel>Cellular Science Chat With Kenji Awurama</IonLabel>
            <IonLabel style={{ fontWeight: 400, marginTop: 5 }}>Access Article on Medium</IonLabel>
          </div>
        </div>
      </IonCard>

      <IonButton fill="outline" expand='block' style={{ marginLeft: 10, marginRight: 10, marginTop: 20 }}>Create Your Free Profile</IonButton>
    </>
  );
}
export default MediaCard;