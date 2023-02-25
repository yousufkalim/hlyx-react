import { IonCard, IonCardTitle, IonLabel } from "@ionic/react";
import "./ServicesTab.css";
import React, { useContext } from "react";
import { AdvanceCellIcon } from "../assets/icons/index";
import cellAnatomic from "../assets/cellAnatomic.png";
import bioTech from "../assets/bioTech.png";
import scientific from "../assets/scientific.png";
import { IonButton } from "@ionic/react";
import UserDetailCard from "./Profile/UserDetailCard/UserDetailCard";
import FeaturedServices from "./FeaturedServices";
// import { userData } from "../data/userData";
import {
  BiDashboardIcon,
  RightArrowIcon,
} from "../assets/icons/ServiceTabIcons";
import { ProfileContext } from "../context/profileContext";
import { ServicesIcons } from "../constants";

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

const MainServiceCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="dashboard-icon-section">
      <div className="dashboard-icon">{ServicesIcons[icon]}</div>

      <div className="dashboard-report-section">
        <div>
          <h6>{title}</h6>
          <p style={{}}>View Service Details</p>
        </div>
        <RightArrowIcon />
      </div>
    </div>
  );
};

const ServicesTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { service } = userProfile;
  return (
    <>
      <UserDetailCard />
      <ServiceCard title="Business Services" button="View All">
        <h6 className="feature-services-title">Featured Services</h6>
        {service?.featuredServices && (
          <div className="featured-services-cards">
            {service?.featuredServices?.map(
              ({ title, description,lineColor }: any, index: number) => (
                <FeaturedServices lineColor={lineColor} title={title} description={description} />
              )
            )}
          </div>
        )}
        {service?.mainServices && (
          <div>
            <h6 className="feature-services-title">Main Services</h6>
            <div className="cards-list">
              {service?.mainServices?.map(
                ({ title, type }: any, index: number) => (
                  <MainServiceCard title={title} icon={type} />
                )
              )}
            </div>
          </div>
        )}
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
