import "../style/components/MediaCard/mediaCard.css";
import { IonButton, IonCard, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import PortfolioCard from "./PortfolioCard";

const PortfolioTab = () => {

  return (
    <>
      <IonCard className="tab_container">
        <IonSegment style={{ margin: "-11px 11px 0px 11px" }} value="Photos">
          <IonSegmentButton value="Photos">
            <IonLabel>Photos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Video">
            <IonLabel>Video</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="Audio">
            <IonLabel>Audio</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonCard>

      <PortfolioCard />

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

export default PortfolioTab;
