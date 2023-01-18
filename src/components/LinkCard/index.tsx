import React from "react";
import { IonLabel } from "@ionic/react";

export interface LinkCardProps {
  icon: JSX.Element;
  title: string;
  description?: string;
}

const LinkCard = ({ icon, title, description }: LinkCardProps) => {
  return (
    <div className="blog_links">
      {icon}
      <div className="blog_links_head">
        <IonLabel className="ion-label">{title}</IonLabel>
        <IonLabel className="ion-label-descripttion">{description}</IonLabel>
      </div>
    </div>
  );
};

export default LinkCard;
