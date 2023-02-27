import { IonButton, IonCard, IonLabel } from "@ionic/react";
import React, { useContext } from "react";
import { RightArrowIcon } from "../assets/icons/ServiceTabIcons";
import { ServicesIcons } from "../constants";
import { ProfileContext } from "../context/profileContext";
import FeaturedServices from "./FeaturedServices";
import UserDetailCard from "./Profile/UserDetailCard/UserDetailCard";
import "./ServicesTab.css";

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
          <IonButton fill="outline" shape="round" className="view-all-button">
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
              ({ title, description, lineColor }: any, index: number) => (
                <FeaturedServices
                  lineColor={lineColor}
                  title={title}
                  description={description}
                />
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
