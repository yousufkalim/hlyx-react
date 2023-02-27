import "../style/components/MediaCard/mediaCard.css";
import { IonCard, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import PortfolioCard from "./PortfolioCard";
import UserDetailCard from "./Profile/UserDetailCard/UserDetailCard";

const PortfolioTab = () => {
  return (
    <>
      <UserDetailCard />
      <IonCard className="portfolio_container">
        <IonSegment className="portfolio-btn-tab-container" value="Photos">
          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Photos"
          >
            <IonLabel className="portfolio-tab-segment-button">
              Featured
            </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Video"
          >
            <IonLabel className="portfolio-tab-segment-button">
              Research
            </IonLabel>
          </IonSegmentButton>

          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Audio"
          >
            <IonLabel className="portfolio-tab-segment-button">
              Splicing
            </IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonCard>
      <PortfolioCard />
    </>
  );
};

export default PortfolioTab;
