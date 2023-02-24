import { IonButton, IonCard, IonLabel } from "@ionic/react";
import React from "react";
import UserDetailCard from "../UserDetailCard/UserDetailCard";
import "../../../style/components/portfolio.css";

import OriyanVideo from "../../../assets/portfolio/oriyan_video.png";
import audio_interview from "../../../assets/portfolio/audio_interview.png";
import CEO from "../../../assets/portfolio/ceo.png";
import Kelly_Lan from "../../../assets/portfolio/Kelly_Lan.png";
import Jordan_Roessle from "../../../assets/portfolio/Jordan_Roessle.png";
import company_video from "../../../assets/portfolio/company_video.png";
import company_img from "../../../assets/portfolio/company_img.png";
import dashboard from "../../../assets/portfolio/dashboard.png";
import hlyx from "../../../assets/portfolio/hlyx.png";
import audio_memo from "../../../assets/portfolio/audio_memo.png";

const PortfolioData = [
  OriyanVideo,
  audio_interview,
  CEO,
  Kelly_Lan,
  Jordan_Roessle,
  company_video,
  company_img,
  dashboard,
  hlyx,
  audio_memo,
];

const Portfolio = () => {
  return (
    <>
      <IonCard className="service-card-container">
        <div className="service-card-title">
          <IonLabel className="card-heading-lg">Portfolio</IonLabel>

          <IonButton
            fill="outline"
            shape="round"
            // color="var(--card-button-color)"
            className="view-all-button"
          >
            View All
          </IonButton>
        </div>

        <div className="container">
          {PortfolioData.map((src, index) => (
            <div className="box" key={index}>
              <img src={src} alt="portfolio" />
            </div>
          ))}
        </div>
      </IonCard>
    </>
  );
};

export default Portfolio;
