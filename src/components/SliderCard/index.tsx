import { IonLabel } from "@ionic/react";
import { ISliderCard } from "../../interface";
import "../../style/components/Silder/slider.css";

const SliderCard = ({ img, imgAlt, title, publishDate }: ISliderCard) => {
  return (
    <div className="flex flex-col slider-card-container">
      <img alt={imgAlt} src={img} className="slide-image-container" />

      <div className="flex flex-col slider-padding align-left">
        <IonLabel className="slider-title">{title}</IonLabel>
        <IonLabel className="slider-description">{publishDate}</IonLabel>
      </div>
    </div>
  );
};

export default SliderCard;
