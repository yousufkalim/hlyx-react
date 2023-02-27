import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";
import { useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import "../../style/page/professional.css";
import { userData } from "../../data/userData";

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const Professional = () => {
  const [, setSlideNumber] = useState(0);

  const handleNextSlide = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
  };

  const handlePrevSlide = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
  };

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
            {userData.map((x, index) => (
              <IonSlide key={index} id={`index-{index}`}>
                <ProfileCard
                  blend={x?.blend}
                  id={x.id}
                  companyName={x?.jobTitle?.companyName}
                  backgroundImage={x?.backgroundImage?.url}
                  name={x?.name}
                  position={x?.jobTitle.position}
                  location={x?.address}
                  companyLogo={x?.companyLogo.url}
                  link={x?.name}
                />
              </IonSlide>
            ))}
          </IonSlides>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Professional;
