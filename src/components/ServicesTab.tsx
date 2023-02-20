import { IonCard, IonCardTitle, IonLabel } from "@ionic/react";
import "./ServicesTab.css";
import React from "react";
import {
  AdvanceCellIcon,
  ChevronIcon,
  ForwardIcon,
  ServiceIcon,
} from "../assets/icons/index";
import cellAnatomic from "../assets/cellAnatomic.png";
import bioTech from "../assets/bioTech.png";
import LinkCard from "./LinkCard";
import scientific from "../assets/scientific.png";
import cellProg from "../assets/cellprog.png";
import advanced from "../assets/advanced.png";
import { IonButton } from "@ionic/react";
import UserDetailCard from "./Profile/UserDetailCard/UserDetailCard";
import FeaturedServices from "./FeaturedServices";
import ServicesCardsLink from "./ServicesCardsLink";
import {
  BiDashboardIcon,
  RightArrowIcon,
} from "../assets/icons/AboutTabsIcons";

const LinksData = [
  {
    icon: <AdvanceCellIcon />,
    title: "Advanced Cell Research & Analysis",
    description: "View Service Details",
  },
  {
    icon: <img src={cellAnatomic} alt="Cell IMG" height={45} width={45} />,
    title: "Cell Anatomic Molecular Splicing",
    description: "View Service Details",
  },
  {
    icon: <img src={bioTech} alt="Cell IMG" height={45} width={45} />,
    title: "Bio-Technology Design & Implementation",
    description: "View Service Details",
  },
  {
    icon: <img src={scientific} alt="Cell IMG" height={45} width={45} />,
    title: "Scientific Program Management",
    description: "View Service Details",
  },
];

export const ServiceCard = ({
  title,
  children,
  button,
}: {
  title: string;
  children: React.ReactNode;
  button?: string;
}) => {
  return (
    <IonCard className="service-card-container">
      <div className="service-card-title">
        <IonLabel className="card-heading-lg">{title}</IonLabel>
        {button && (
          <IonButton
            fill="outline"
            shape="round"
            // color="var(--card-button-color)"
            className="view-all-button"
          >
            {button}
          </IonButton>
        )}
      </div>
      {children}
    </IonCard>
  );
};

const MainServiceCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#2A2C31",
        paddingBlock: 5,
        paddingInline: "5px 14px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        borderRadius: 18,
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          width: 57,
          height: 55,
          backgroundColor: "rgba(60, 62, 70 , 0.5)",
          borderRadius: 18,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BiDashboardIcon />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h6
            style={{
              fontSize: 15,
              lineHeight: "20px",
              fontWeight: 600,
              color: "white",
            }}
          >
            BI Dashboard Report
          </h6>
          <p
            style={{
              fontSize: 13,
              lineHeight: "16px",
              color: "#8C93A1",
              paddingTop: 4,
            }}
          >
            View Service Details
          </p>
        </div>

        <RightArrowIcon />
      </div>
    </div>
  );
};

const ServicesTab = () => {
  return (
    <>
      <UserDetailCard />
      <ServiceCard title="Business Services" button="View All">
        <h6 className="feature-services-title">Featured Services</h6>
        <div className="featured-services-cards">
          <FeaturedServices />
          <FeaturedServices />
        </div>
        <div>
          <h6 className="feature-services-title">Main Services</h6>
          <div className="cards-list">
            <MainServiceCard />
          </div>
        </div>
      </ServiceCard>
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

export default ServicesTab;
