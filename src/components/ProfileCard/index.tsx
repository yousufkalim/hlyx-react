import { IonButton, IonContent, IonModal } from "@ionic/react";
import React, { useState } from "react";
import {
  BagIcon,
  BookMarkIcon,
  ChatIcon,
  HeartIcon,
  LocationIcon,
  SendIcon,
} from "../../assets/icons";
import "../../style/components/profileCard.css";

export const floatingIcons = [
  <HeartIcon />,
  <BookMarkIcon />,
  <ChatIcon />,
  <SendIcon />,
];

export const FloatingButtonGroup = ({ icons }: { icons: JSX.Element[] }) => {
  return (
    <section className="floatingButton-container">
      {icons.map((icon, index) => (
        <div className="floating-btn" key={index}>
          {icon}
        </div>
      ))}
    </section>
  );
};

export interface ProfileCardProps {
  backgroundImage: string;
  companyLogo: string;
  name: string;
  position: string;
  location: string;
}

const ProfileCard = ({
  backgroundImage,
  companyLogo,
  name,
  position,
  location,
}: ProfileCardProps) => {
  return (
    <IonContent
      // style={{
      //   "--background":
      //     'url("../../assets/physician_male_01.png") no-repeat top top / cover',
      // }}
      fullscreen
    >
      <img
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -3,
          width: "100%",
          height: "100%",
          objectPosition: "top",
          objectFit: "cover",
        }}
        src={backgroundImage}
        alt="user profile"
      />
      <section className="linear-bg"></section>

      <FloatingButtonGroup icons={floatingIcons} />
      <article className="cardContainer">
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingInline: 24,
            paddingBottom: 64,
          }}
        >
          <img src={companyLogo} alt="company logo" className="company-logo" />

          <h1>{name}</h1>
          <section className="detail-container">
            <section className="detail">
              <BagIcon />
              <p className="position-text">{position}</p>
            </section>
            <section className="detail">
              <LocationIcon />
              <p className="location-text">{location}</p>
            </section>
          </section>
        </section>
      </article>
    </IonContent>
  );
};

export default ProfileCard;
