import { IonButton, IonContent, IonModal, IonCard } from "@ionic/react";
import React, { useState } from "react";
import {
  BagIcon,
  // BookMarkIcon,
  // ChatIcon,
  // HeartIcon,
  LocationIcon,
  // SendIcon,
  SwipeBar
} from "../../assets/icons";
import "../../style/components/profileCard.css";

// export const floatingIcons = [
//   <HeartIcon />,
//   <BookMarkIcon />,
//   <ChatIcon />,
//   <SendIcon />,
// ];
// Floating Component Removed
// export const FloatingButtonGroup = ({ icons }: { icons: JSX.Element[] }) => {
//   return (
//     <section className="floatingButton-container">
//       {icons.map((icon, index) => (
//         <div className="floating-btn" key={index}>
//           {icon}
//         </div>
//       ))}
//     </section>
//   );
// };

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
    class="overflow-hidden"
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

      {/* <FloatingButtonGroup icons={floatingIcons} /> Floating icons remove  */}
      <article className="cardContainer">
        <section
        className="logoName"
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
      <section className="link-Button">
      <SwipeBar/>
        <IonCard
          className="linkButton-Card"
          style={{
            background: "none",
            border: "none",
            outline: "none",
          }}
        >
          <IonButton
            expand="block"
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "18px",
              transform: "rotate(-360deg)",
            }}
            color="light"
            routerLink="/profile"
          >
            Link with Me
          </IonButton>
        </IonCard>
      </section>
    </IonContent>
  );
};

export default ProfileCard;
