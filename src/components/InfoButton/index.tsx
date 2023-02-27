import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import {
  bookmark,
  chatbubble, helpCircle, send
} from "ionicons/icons";
import { LinkIcon } from "../../assets/icons/index";
import "./fabbtn.css";

const InfoButton = () => {
  return (
    <>
      <IonFab className="info-button">
        <IonFabButton>
          <LinkIcon color="#fff" />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton>
            <IonIcon className="help icon-colour" icon={helpCircle}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon className="icon-colour" icon={chatbubble}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon className="send" icon={send}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={bookmark}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  );
};

export default InfoButton;
