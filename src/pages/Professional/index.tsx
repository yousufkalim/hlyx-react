import {
  IonButton,
  IonContent,
  IonModal,
  IonPage,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React, { useRef, useState } from "react";
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
import MediaCard from "../../components/MediaCard";

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
  {
    backgroundImage: AmberNguyen,
    companyLogo: cx,
    name: "Amber Nguyen",
    position: "CEO & Chief Stylist at Fashion CX",
    location: "New York, New York",
  },
  {
    backgroundImage: TerranceBryant,
    companyLogo: RealtyGroup,
    name: "Terrance Bryant",
    position: "Founder at Bryant Realty Group",
    location: "San Jose, New Mexico",
  },
  {
    backgroundImage: LeenaAcoladae,
    companyLogo: HorizonMedia,
    name: "Leena Acoladae",
    position: "CEO at New Horizon Media",
    location: "San Jose, New Mexico",
  },
  {
    backgroundImage: TerrancetBryant,
    companyLogo: HamiltonRestaurant,
    name: "Terrance Bryant",
    position: "Executive Chef at Hamilton Restaurant",
    location: "San Mateo, California",
  },
];

const Professional = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [open, setOpen] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleNextSlide = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
  };

  const handlePrevSlide = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
  };

  console.log(slideNumber);

  const userData = profileData.filter((_, index) => index === slideNumber);
  console.log(userData);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <IonPage>
        <IonContent>
          <IonSlides
            pager={false}
            options={slideOpts}
            onIonSlidePrevStart={handlePrevSlide}
            onIonSlideNextStart={handleNextSlide}
          >
            {profileData.map(
              (
                { backgroundImage, companyLogo, name, position, location },
                index
              ) => (
                <IonSlide key={index} id={`index-{index}`}>
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

      <IonModal
        ref={modal}
        className="detail-modal"
        isOpen={open}
        onDidDismiss={handleCloseModal}
        breakpoints={[0.14, 0.5, 1]}
        initialBreakpoint={0.14}
        backdropBreakpoint={0.14}
      >
        <section className="card-footer">
          <IonButton  className="footer-btn">Add Contact</IonButton>
          <IonButton className="footer-btn">View Info</IonButton>
        </section>

        <section>
          <img src={userData[0].companyLogo} alt={userData[0].name} />
          <h2 style={{ color: "white" }}>{userData[0].name}</h2>
        </section>
      </IonModal>
    </>
  );
};

export default Professional;
