import React from "react";
import { IonLabel } from "@ionic/react";
import "./LinkCard.css";
import { BlogLinkIcons } from "../../constants";

export interface LinkCardProps {
  icon: string;
  title: string;
  description?: string;
  hyperaddress?: string;
}

const LinkCard = ({
  icon,
  title,
  hyperaddress,
  description,
}: LinkCardProps) => {
  return (
    <div className="blog_links">
      {BlogLinkIcons[icon]}
      <div className="blog_links_head">
        <a
          href={hyperaddress}
          className="anchor-clear"
          target={"_blank"}
          rel="noreferrer"
        >
          <IonLabel className="ion-label">{title}</IonLabel>
        </a>
        <IonLabel className="ion-label-descripttion">{description}</IonLabel>
      </div>
    </div>
  );
};

export default LinkCard;
