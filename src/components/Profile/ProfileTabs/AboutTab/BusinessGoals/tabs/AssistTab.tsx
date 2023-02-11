import React from "react";
import { IonAvatar, IonButton, IonCard, IonIcon, IonLabel } from "@ionic/react";
import { MoreOptions, Plus } from "../../../../../../assets/icons";
import "../../../../../../style/components/assistTab.css";

const AssistTab = () => {
  return (
    <div className="assist_card_container">
      <div className="more_options">
        <MoreOptions />
      </div>
      <div className="color_line" />
      <div className="assist_details_container">
        <div className="assist_details">
          <h6>Create DNA Nano-Map</h6>
          <p>Create DNA nano-map sequencing</p>
        </div>
        <div className="supporters">
          <p>Goal Supporters </p>
        </div>
        <div className="assist_avatar">
          {[...Array(5).keys()].map((index) => (
            <div className="ionAvatar_container">
              <IonAvatar className="ion_avatar">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonLabel className="ionlabel">Avatar</IonLabel>
            </div>
          ))}
        </div>
        <div className="invite-button">
          <IonButton className="Button">
            <Plus />
            Invite
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default AssistTab;
