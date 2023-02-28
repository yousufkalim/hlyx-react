import { IonButton, IonCard, IonLabel } from "@ionic/react";
import React, { useContext } from "react";
import { RightArrowIcon } from "../assets/icons/ServiceTabIcons";
import { ServicesIcons } from "../constants";
import { ProfileContext } from "../context/profileContext";
import { ImageType, ServiceCardProps } from "../interface";
import FeaturedServices from "./FeaturedServices";
import UserDetailCard from "./Profile/UserDetailCard/UserDetailCard";
import "./ServicesTab.css";

export const ServiceCard = ({
  title,
  children,
  button,
  ...rest
}: ServiceCardProps) => {
  const { className } = rest;
  return (
    <IonCard className={`service-card-container ${className}`}>
      <div className="service-card-title">
        <IonLabel className="card-heading-lg">{title}</IonLabel>
        {button && (
          <IonButton fill="outline" shape="round" className="view-all-button">
            {button}
          </IonButton>
        )}
      </div>
      {children}
    </IonCard>
  );
};

const MainServiceCard = ({
  title,
  icon,
  image,
}: {
  title: string;
  image?: ImageType;
  icon?: string;
}) => {
  return (
    <div className="dashboard-icon-section">
      {icon && <div className="dashboard-icon">{ServicesIcons[icon]}</div>}
      {image && (
        <div className="dashboard-image">
          <img src={image.url} alt={image.altText} height={55} width={57} />
        </div>
      )}

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
      <ServiceCard
        title="Business Services"
        button="View All"
        className="border_none"
      >
        {service?.featuredServices && (
          <>
            <h6 className="feature-services-title">Featured Services</h6>
            <div className="featured-services-cards">
              {service?.featuredServices?.map(
                ({ title, description, lineColor }: any, index: number) => (
                  <FeaturedServices
                    lineColor={lineColor}
                    title={title}
                    description={description}
                  />
                )
              )}
            </div>
          </>
        )}

        {service?.title && (
          <div style={{ display: "flex", gap: 11 }}>
            <div style={{ width: 4, backgroundColor: "#9C2626", height: 42 }} />
            <p
              style={{
                fontSize: 15,
                lineHeight: "20px",
                letterSpacing: "0.04em",
                fontWeight: 600,
                color: "#9899A0",
                maxWidth: 168,
              }}
            >
              {service?.title}
            </p>
          </div>
        )}
        {service?.mainServices && (
          <div>
            <h6 className="feature-services-title">Main Services</h6>
            <div className="cards-list">
              {service?.mainServices?.map(
                ({ title, type, image }: any, index: number) => (
                  <MainServiceCard title={title} icon={type} image={image} />
                )
              )}
            </div>
          </div>
        )}
      </ServiceCard>
    </>
  );
};

export default ServicesTab;
