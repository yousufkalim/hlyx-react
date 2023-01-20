import {
  IonCard,
  IonLabel,
} from "@ionic/react";

import "../../style/components/Silder/slider.css"

interface GalleryCard {
  img: string;
  imgAlt: string;
  title: string;
  publishDate: string;
}

const GalleryCard = ({ img, imgAlt, title, publishDate }: GalleryCard) => {
  return (
    <div className="flex flex-wrap gallery-card-container">
      <img
        alt={imgAlt}
        src={img}
        className="gallery-image-container"
      />

      <div className="flex flex-col gallery-padding align-left">
        <IonLabel className="gallery-title">{title}</IonLabel>
        <IonLabel className="gallery-description">{publishDate}</IonLabel>
      </div>
    </div>
  );
};
export default GalleryCard;
