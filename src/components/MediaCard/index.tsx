import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonRouterOutlet, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonBadge, IonSegmentButton, IonSegment, IonAccordionGroup, IonAccordion, IonItem } from '@ionic/react';
import profileOne from "../../assets/media/media-image.png";
import sphere from "../../assets/sphere.png";
import { chevronForward, star } from 'ionicons/icons';
import '../../style/components/MediaCard/mediaCard.css';
import { Route, Redirect } from "react-router";


const MediaCard = () => {
  return (
    <>
      <IonCard style={{ margin: 10 }}>
        <div style={{position:"relative"}}>
          <img alt="Silhouette of mountains" src={profileOne} />
          <img alt="" className='avatar-icon' src={sphere} />
        </div>
        <IonCardHeader>
          <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Here's a small text description for the card content. Nothing more, nothing less.
        </IonCardContent>
      </IonCard>

      <IonCard style={{ margin: "5px 10px 5px 10px" }}>
        <IonButton color="light" expand='block'>
          <IonIcon slot="start" icon={star}></IonIcon>
          Add New Link
        </IonButton>
      </IonCard>

      <IonCard style={{ margin: "5px 10px 5px 10px" }}>
        <IonSegment value="custom">
          <IonSegmentButton value="custom">
            <IonLabel>Contact</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="segment">
            <IonLabel>About</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="buttons">
            <IonLabel>Service</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="buttons">
            <IonLabel>Portflio</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonCard>

      <IonCard style={{ margin: "5px 10px 5px 10px" }}>
        <IonLabel>Email</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion  toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonLabel>First Accordion</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ margin: "5px 10px 5px 10px" }}>
      <IonLabel>Phone</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion  toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonLabel>First Accordion</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
          <IonAccordion  toggleIcon={chevronForward} value="second">
            <IonItem slot="header" color="rose">
              <IonLabel>Second Accordion</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Second Content
            </div>
          </IonAccordion>
          <IonAccordion  toggleIcon={chevronForward} value="third">
            <IonItem slot="header" color="rose">
              <IonLabel>Third Accordion</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Third Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ margin: "5px 10px 5px 10px" }}>
        <IonLabel>Calendar</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion  toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonLabel>First Accordion</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>

      <IonCard style={{ margin: "5px 10px 5px 10px" }}>
        <IonLabel>Website</IonLabel>
        <IonAccordionGroup expand="compact">
          <IonAccordion  toggleIcon={chevronForward} value="first">
            <IonItem slot="header" color="rose">
              <IonLabel>First Accordion</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              First Content
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonCard>
    </>
  );
}
export default MediaCard;