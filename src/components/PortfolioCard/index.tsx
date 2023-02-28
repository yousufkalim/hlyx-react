import { IonButton, IonCard, IonLabel } from "@ionic/react";
import { galleryData, sliderData } from "../../constants";
import "../../style/components/Silder/slider.css";
import GalleryCard from "../GalleryCard";
import SliderCard from "../SliderCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { useRef, useState } from "react";
import { Navigation, Scrollbar, Swiper as SwiperType } from "swiper";
import { NextImageIcon, PrevImageIcon } from "../../assets/icons";

const PortfolioCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>();

  return (
    <>
      <IonCard>

        <div className="swiper-image-container">
          <Swiper
            onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar, Navigation]}
            className="mySwiper"
            slidesPerView={2.3}
            onSlideChange={() => console.log("")}
            onSwiper={() => console.log("")}
          >
            {sliderData.map(({ img, imgAlt, publishDate, title }, index) => (
              <SwiperSlide>
                <SliderCard
                  img={img}
                  imgAlt={imgAlt}
                  publishDate={publishDate}
                  title={title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div style={{ marginTop: 27.42 }} />
        <IonLabel className="slider-card-heading">Photo Gallery</IonLabel>
        <div className="gallery-container flex flex-wrap justify-between">
          {galleryData.map(({ img, imgAlt, publishDate, title }, index) => (
            <GalleryCard
              img={img}
              imgAlt={imgAlt}
              publishDate={publishDate}
              title={title}
            />
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
