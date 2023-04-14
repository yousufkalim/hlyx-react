import { IonButton, IonCard, IonLabel } from "@ionic/react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { ProfileContext } from "../../../context/profileContext";
import "../../../style/components/portfolio.css";
import UserDetailCard from "../UserDetailCard/UserDetailCard";
import { PortfolioProps } from "../../../interface/index"

export const CopyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5229 8.38386V11.1139C10.5229 13.3939 9.61285 14.3039 7.33285 14.3039H4.61285C2.34285 14.3039 1.42285 13.3939 1.42285 11.1139V8.38386C1.42285 6.11386 2.33285 5.20386 4.61285 5.20386H7.34285C9.61285 5.20386 10.5229 6.11386 10.5229 8.38386Z"
      stroke="#9899A0"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.4232 4.48396V7.21395C14.4232 9.49395 13.5132 10.404 11.2332 10.404H10.5232V8.38396C10.5232 6.11396 9.61324 5.20395 7.33324 5.20395H5.32324V4.48396C5.32324 2.20396 6.23324 1.30396 8.51324 1.30396H11.2432C13.5132 1.30396 14.4232 2.21396 14.4232 4.48396Z"
      stroke="#9899A0"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ArrowIcon = () => (
  <svg
    width="7"
    height="16"
    viewBox="0 0 7 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.998047 1.30383L5.99805 7.80383L0.998047 14.3038"
      stroke="#868FA0"
      stroke-width="1.72135"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Portfolio = () => {
  const { userProfile } = useContext(ProfileContext);
  const [portfolio, setPortfolio] = useState<PortfolioProps[]>([])


  useEffect(() => {
    const token = localStorage.getItem("token")
    const cardId = localStorage.getItem("cardId")
    axios.get(`https://dev.api.hlyx.me/api/v1/card/find/portfolio-page/${cardId}`, {
      headers: {
        Authorization: token
      }
    }).then((res) => {
      setPortfolio(res.data.card.portfolio)
      console.log("resofportfolio", res.data.card.portfolio)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
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

        {portfolio && (
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
              {portfolio.map((item) => item.title)}
            </p>
          </div>
        )}

        {portfolio && (
          <div className="container">
            {portfolio?.map((item: PortfolioProps) => (
              <div className="box">
                <img src={item.image} alt="portfolio" />
              </div>
            ))}
          </div>
        )}

        {userProfile?.mslLink && (
          <div
            style={{
              display: "flex",
              gap: 17,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
              }}
            >
              <CopyIcon />
              <p style={{ color: "#9899A0" }}>View My MLS Listings</p>
            </div>
            <ArrowIcon />
          </div>
        )}
      </IonCard>
    </>
  );
};

export default Portfolio;
