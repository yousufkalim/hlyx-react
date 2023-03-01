import "../style/components/MediaCard/mediaCard.css";
import {
  IonCard,
  IonLabel,
  IonButton,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import PortfolioCard from "./PortfolioCard";
import UserDetailCard from "./Profile/UserDetailCard/UserDetailCard";

const PortfolioTab = () => {
  return (
    <>
      <UserDetailCard />
      <IonCard className="portfolio_container">
        <div className="portfoli-card-title">
          <IonLabel className="card-heading-lg">Portfolio</IonLabel>
          <IonButton fill="outline" shape="round" className="view-all-button">
            View All
          </IonButton>
        </div>
        <IonSegment className="portfolio-btn-tab-container" value="Featured">
          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Featured"
          >
            Featured
          </IonSegmentButton>
          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Research"
          >
            Research
          </IonSegmentButton>

          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Splicing"
          >
            Splicing
          </IonSegmentButton>
        </IonSegment>
      </IonCard>
      <PortfolioCard />
    </>
  );
};

export default PortfolioTab;
