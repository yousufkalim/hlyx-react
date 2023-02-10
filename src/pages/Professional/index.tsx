import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";
import React, { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import "../../style/page/professional.css";
import profileOne from "../../assets/physician_male_01.png";
import profileTwo from "../../assets/physician_girl_01.png";
import AmberNguyen from "../../assets/AmberNguyen.png";
import TerranceBryant from "../../assets/TerranceBryant.png";
import TerrancetBryant from "../../assets/TerrancetBryant.png";
import LeenaAcoladae from "../../assets/LeenaAcoladae.png";
import sphere from "../../assets/sphere.png";
import scendia from "../../assets/scendia.png";
import cx from "../../assets/cx_logo.png";
import RealtyGroup from "../../assets/RealtyGroup.png";
import HorizonMedia from "../../assets/HorizonMedia.png";
import HamiltonRestaurant from "../../assets/HamiltonRestaurant.png";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

export const profileData = [
  {
    backgroundImage: profileOne,
    companyLogo: sphere,
    name: "Dr. Kenji Awurama",
    position: "Executive Director at ",
    companyName: "Sphere Bio Tech",
    location: "Palo Alto, California",
  },
  {
    backgroundImage: profileTwo,
    companyLogo: scendia,
    name: "Susan Martinez",
    companyName: "Scendia Bio",
    position: "Chief Financial Officer",
    location: "Irvine, California",
  },
  {
    backgroundImage: AmberNguyen,
    companyName: "Fashion CX",
    companyLogo: cx,
    name: "Amber Nguyen",
    position: "CEO & Chief Stylist",
    location: "New York, New York",
  },
  {
    backgroundImage: TerranceBryant,
    companyLogo: RealtyGroup,
    companyName: "Bryant Realty Group",
    name: "Terrance Bryant",
    position: "Founder",
    location: "San Jose, New Mexico",
  },
  {
    backgroundImage: LeenaAcoladae,
    companyLogo: HorizonMedia,
    companyName: "New Horizon Media",
    name: "Leena Acoladae",
    position: "CEO",
    location: "San Jose, New Mexico",
  },
  {
    backgroundImage: TerrancetBryant,
    companyLogo: HamiltonRestaurant,
    companyName: "Hamilton Restaurant",
    name: "Terrance Bryant",
    position: "Executive Chef",
    location: "San Mateo, California",
  },
];

const Professional = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const handleNextSlide = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
  };

  const handlePrevSlide = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
  };

  const userData = profileData.filter((_, index) => index === slideNumber);
  console.log(userData);

  return (
    <>
      <IonPage>
        <IonContent class="overflow-hidden">
          <IonSlides
            pager={false}
            options={slideOpts}
            onIonSlidePrevStart={handlePrevSlide}
            onIonSlideNextStart={handleNextSlide}
          >
            {profileData.map(
              (
                {
                  backgroundImage,
                  companyLogo,
                  name,
                  position,
                  companyName,
                  location,
                },
                index
              ) => (
                <IonSlide key={index} id={`index-{index}`}>
                  <ProfileCard
                    companyName={companyName}
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
    </>
  );
};

export default Professional;
