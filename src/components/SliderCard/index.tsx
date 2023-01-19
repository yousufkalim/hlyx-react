import {
  IonCard,
  IonLabel,
} from "@ionic/react";

import "../../style/components/Silder/slider.css"

interface SliderCard {
  img: string;
  imgAlt: string;
  title: string;
  publishDate: string;
}

const SliderCard = ({ img, imgAlt, title, publishDate }: SliderCard) => {
  return (
    <div className="flex flex-col slider-card-container">
      <img
        alt={imgAlt}
        src={img}
        className="slide-image-container"
      />

      <div className="flex flex-col slider-padding align-left">
        <IonLabel className="slider-title">{title}</IonLabel>
        <IonLabel className="slider-description">{publishDate}</IonLabel>
      </div>
    </div>
  );
};
export default SliderCard;
