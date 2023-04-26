import { IonButton, IonCard, IonLabel } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { RightArrowIcon } from "../assets/icons/ServiceTabIcons";
import { ServicesIcons } from "../constants";
import { ProfileContext } from "../context/profileContext";
import { ImageType, ServiceCardProps, ServiceProps } from "../interface";
import FeaturedServices from "./FeaturedServices";
import UserDetailCard from "./Profile/UserDetailCard/UserDetailCard";
import "./ServicesTab.css";
import axios from "axios";
import { featuredServices, userData } from "../data/userData";

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
          <p>View Service Details</p>
        </div>
        <RightArrowIcon />
      </div>
    </div>
  );
};

const ServicesTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { service } = userProfile;
  const [servicesData, setServicesData] = useState<ServiceProps[]>([])

  useEffect(() => {
    const token = localStorage.getItem("token")
    const cardId = localStorage.getItem("cardId")
    axios.get(`https://dev.api.hlyx.me/api/v1/card/find/services-page/${cardId}`, {
      headers: {
        Authorization: token
      }
    }).then((res) => {
      setServicesData(res.data.card.services)
      console.log("resofservices", res.data.card.services)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <>
      <UserDetailCard />
      <ServiceCard
        title="Business Services"
        button="View All"
        className="border_none"
      >
        {servicesData && (
          <>
            <h6 className="feature-services-title">Featured Services</h6>
            <div className="featured-services-cards">
              {servicesData?.map((item, index) => (
                item.type === "featured" &&
                <FeaturedServices
                  //@t
                  lineColor={featuredServices[index % (featuredServices.length)]?.lineColor}
                  title={item.title}
                  description={item.details}
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
        {servicesData && (
          <div>
            <h6 className="feature-services-title">Main Services</h6>
            <div className="cards-list">
              {servicesData.map((item) => (
                item.type === "main" &&
                < MainServiceCard title={item.title} icon={item.type} />
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
