import "../style/components/MediaCard/mediaCard.css";
import { IonButton, IonCard, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import PortfolioCard from "./PortfolioCard";

const PortfolioTab = () => {

  return (
    <>
      <IonCard className="portfolio_container">
        <IonSegment className="portfolio-btn-tab-container" value="Photos">
          <IonSegmentButton className="portfolio-tab-segment-button-container" value="Photos">
            <IonLabel className="portfolio-tab-segment-button">Photos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton className="portfolio-tab-segment-button-container" value="Video">
            <IonLabel  className="portfolio-tab-segment-button">Video</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton className="portfolio-tab-segment-button-container" value="Audio">
            <IonLabel  className="portfolio-tab-segment-button">Audio</IonLabel>
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
