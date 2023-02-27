import { IonLabel } from "@ionic/react";
import { IGalleryCard } from "../../interface";
import "../../style/components/Silder/slider.css";

const GalleryCard = ({ img, imgAlt, title, publishDate }: IGalleryCard) => {
  return (
    <div className="flex flex-wrap gallery-card-container">
      <img alt={imgAlt} src={img} className="gallery-image-container" />

      <div className="flex flex-col gallery-padding align-left">
        <IonLabel className="gallery-title">{title}</IonLabel>
        <IonLabel className="gallery-description">{publishDate}</IonLabel>
      </div>
    </div>
  );
};

export default GalleryCard;
