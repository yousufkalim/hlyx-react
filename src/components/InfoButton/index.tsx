import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { colorPalette, document, globe, linkOutline } from "ionicons/icons";
// import { LinkInfoButton } from "../../assets/icons";
import { LinkIcon } from '../../assets/icons/index';

const InfoButton = () => {
  return (
    <>
      <IonFab className="info-button">
        <IonFabButton >
           <LinkIcon color="#fff"/>
        </IonFabButton>
        <IonFabList side="top" >
          <IonFabButton>
            <IonIcon icon={document}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={colorPalette}></IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon icon={globe}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </>
  )
}

export default InfoButton