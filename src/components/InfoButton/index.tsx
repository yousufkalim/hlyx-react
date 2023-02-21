import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { bookmark, chatbubble, colorPalette, document, globe, helpCircle, linkOutline, send, text } from "ionicons/icons";
// import { LinkInfoButton } from "../../assets/icons";
import { LinkIcon } from '../../assets/icons/index';
import "./fabbtn.css"

const InfoButton = () => {
  return (
    <>
      <IonFab className="info-button">
        <IonFabButton >
           <LinkIcon color="#fff"/>
        </IonFabButton>
        <IonFabList side="top" >
          <IonFabButton>
            <IonIcon className="help" icon={helpCircle}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon  icon={chatbubble}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon   className="send" icon={send}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={bookmark}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  )
}

export default InfoButton