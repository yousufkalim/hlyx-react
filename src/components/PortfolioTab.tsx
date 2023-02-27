import "../style/components/MediaCard/mediaCard.css";
import {
  IonButton,
  IonCard,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import PortfolioCard from "./PortfolioCard";


const PortfolioTab = () => {
  return (
    <>
      <IonCard className="portfolio_container">
       
        <IonSegment className="portfolio-btn-tab-container" value="Photos">
          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Photos"
          > 
            <IonLabel className="portfolio-tab-segment-button">Featured</IonLabel>
            
          </IonSegmentButton>
          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Video"
          >
            <IonLabel className="portfolio-tab-segment-button">Research</IonLabel>
          </IonSegmentButton>

          <IonSegmentButton
            className="portfolio-tab-segment-button-container"
            value="Audio"
          >
            <IonLabel className="portfolio-tab-segment-button">Splicing</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonCard>
      <PortfolioCard />
      <div style={{ paddingBlock: 20, backgroundColor: "var(--bg-color)" }}>
        <IonButton
          className="outline-btn"
          fill="outline"
          expand="block"
          shape="round"
          style={{
            fontWeight: 600,
            fontSize: 15,
            lineHeight: "17px",
            fontFamily: "Poppins",
          }}
        >
          Create Your Free Profile
        </IonButton>
      </div>
    </>
  );
};

export default PortfolioTab;
