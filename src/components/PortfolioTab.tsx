import "../style/components/MediaCard/mediaCard.css";
import { IonCard, IonLabel,IonButton, IonSegment, IonSegmentButton } from "@ionic/react";
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
        <IonSegment className="portfolio-btn-tab-container" value="Photos">
          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Photos"
          >
            <IonButton fill="clear"  className="portfolio-tab-segment-button">
              Featured
            </IonButton>
          </IonSegmentButton>
          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Video"
          >
             <IonButton fill="clear"  className="portfolio-tab-segment-button">
              Research
            </IonButton>
          </IonSegmentButton>

          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Audio"
          >
            <IonButton fill="clear"  className="portfolio-tab-segment-button">
              Splicing
            </IonButton>
          </IonSegmentButton>
        </IonSegment>
        <PortfolioCard />
      </IonCard>
    
    </>
  );
};

export default PortfolioTab;
