import { IonCard, IonCardTitle, IonChip } from "@ionic/react";
import { FunctionComponent, PropsWithChildren } from "react";
import { AboutCardProps } from "../../interface";
import "../../style/components/AboutCard/aboutCard.css";

const AboutCard: FunctionComponent<AboutCardProps> = ({
  cardTitle,
  icon,
  cardTagTitle,
  children,
  isTagTitle,
  style,
}) => {
  return (
    <IonCard style={style}>
      <div className="flex align-center br-btm justify-contain">
        <div className="flex align-center">
          <div className="card-icon">{icon}</div>
          <IonCardTitle className="card-title">{cardTitle}</IonCardTitle>
        </div>
        {isTagTitle && (
          <IonChip className="chip-container" color="primary">
            {cardTagTitle}
          </IonChip>
        )}
      </div>
      <div className="content-container">{children}</div>
    </IonCard>
  );
};

export default AboutCard;
