import { IonButton, IonCard, IonLabel } from "@ionic/react";
import { useContext } from "react";
import { ProfileContext } from "../../../context/profileContext";
import "../../../style/components/portfolio.css";
import UserDetailCard from "../UserDetailCard/UserDetailCard";

const Portfolio = () => {
  const { userProfile } = useContext(ProfileContext);
  return (
    <>
      <UserDetailCard />
      <IonCard className="service-card-container border_none">
        <div className="service-card-title">
          <IonLabel className="card-heading-lg">Portfolio</IonLabel>

          <IonButton fill="outline" shape="round" className="view-all-button">
            View All
          </IonButton>
        </div>

        {userProfile?.portfolioTitle && (
          <div style={{ display: "flex", gap: 11 }}>
            <div style={{ width: 4, backgroundColor: "#236BFE", height: 42 }} />
            <p
              style={{
                fontSize: 15,
                lineHeight: "20px",
                letterSpacing: "0.04em",
                fontWeight: 600,
                color: "#9899A0",
                maxWidth: 188,
              }}
            >
              {userProfile?.portfolioTitle}
            </p>
          </div>
        )}

        {userProfile?.portfolio && (
          <div className="container">
            {userProfile?.portfolio?.map((src: any, index: number) => (
              <div className="box" key={index}>
                <img src={src} alt="portfolio" />
              </div>
            ))}
          </div>
        )}
      </IonCard>
    </>
  );
};

export default Portfolio;
