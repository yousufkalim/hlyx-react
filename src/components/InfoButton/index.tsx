import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { colorPalette, document, globe, linkOutline } from "ionicons/icons";
// import { LinkInfoButton } from "../../assets/icons";

const InfoButton = () => {
  return (
    <>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonIcon icon={linkOutline}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
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