import { IonLabel } from "@ionic/react";
import { ChevronIcon } from "../assets/icons";
import "../style/components/servicesCardLink.css";

export interface LinkCardProps {
  icon: JSX.Element;
  title: string;
  description?: string;
  hyperaddress?: string;
}

const ServicesCardsLink = ({
  icon,
  title,
  hyperaddress,
  description,
}: LinkCardProps) => {
  return (
    <div className="services_card_links">
      <div style={{ display: "flex" }}>
        {icon}
        <div className="service_links_head">
          <a href={hyperaddress} className="anchor-clear" target={"_blank"}>
            <IonLabel className="service-title">{title}</IonLabel>
          </a>
          <IonLabel className="service-title-descripttion">
            {description}
          </IonLabel>
        </div>
      </div>
      <div style={{ flexShrink: 0 }}>
        <ChevronIcon />
      </div>
    </div>
  );
};

export default ServicesCardsLink;
