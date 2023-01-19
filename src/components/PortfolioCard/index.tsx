import SliderCard from "../SliderCard";
import { galleryData, sliderData } from "../../constants";
import "../../style/components/Silder/slider.css"
import { IonButton, IonCard, IonLabel } from "@ionic/react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import GalleryCard from "../GalleryCard";

const PortfolioCard = () => {
  return (
    <>
      <IonCard style={{marginTop:-10, borderRadius: "0px 0px 10px 10px"}}>
        <IonLabel className="slider-card-heading">Featured Photos</IonLabel>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          emulateTouch={true}
          autoPlay={false}
          className="carosal-container"
          useKeyboardArrows
          transitionTime={1000}
          centerMode={true}
          centerSlidePercentage={44}
        // width="600px"
        >
          {sliderData.map(({ img, imgAlt, publishDate, title }, index) => (
            <SliderCard img={img} imgAlt={imgAlt} publishDate={publishDate} title={title} />
          ))}
        </Carousel>
        <div style={{ marginTop: 27.42 }} />
        <IonLabel className="slider-card-heading">Photo Gallery</IonLabel>
        <div className="gallery-container flex flex-wrap justify-between">
          {galleryData.map(({ img, imgAlt, publishDate, title }, index) => (
            <GalleryCard img={img} imgAlt={imgAlt} publishDate={publishDate} title={title} />
          ))}
        </div>

        <div className="flex align-center justify-center">
        <IonButton className="load-more-btn">Load More</IonButton>
        </div>
      </IonCard>
    </>
  );
};

export default PortfolioCard;
