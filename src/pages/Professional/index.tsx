import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";
import React from "react";
import ProfileCard from "../../components/ProfileCard";
import "../../style/page/professional.css";
import profileOne from "../../assets/physician_male_01.png";
import profileTwo from "../../assets/physician_girl_01.png";
import sphere from "../../assets/sphere.png";
import scendia from "../../assets/scendia.png";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

export const profileData = [
  {
    backgroundImage: profileOne,
    companyLogo: sphere,
    name: "Dr. Kenji Awurama",
    position: "Dr. Kenji Awurama",
    location: "Palo Alto, California",
  },
  {
    backgroundImage: profileTwo,
    companyLogo: scendia,
    name: "Susan Martinez",
    position: "Chief Financial Officer at Scendia Bio",
    location: "Irvine, California",
  },
];

const Professional = () => {
  return (
    <IonPage>
      <IonContent>
        <IonSlides pager={false} options={slideOpts}>
          {profileData.map(
            (
              { backgroundImage, companyLogo, name, position, location },
              index
            ) => (
              <IonSlide key={index}>
                <ProfileCard
                  backgroundImage={backgroundImage}
                  name={name}
                  position={position}
                  location={location}
                  companyLogo={companyLogo}
                />
              </IonSlide>
            )
          )}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Professional;
