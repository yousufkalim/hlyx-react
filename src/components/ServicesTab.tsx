import { IonCard, IonLabel } from "@ionic/react";
import React from "react";
import { AdvanceCellIcon } from "../assets/icons";
import LinkCard from "./LinkCard";

const LinksData = [
  {
    icon: <AdvanceCellIcon />,
    title: "Advanced Cell Research & Analysis",
    description: "View Service Details",
  },
  {
    icon: <AdvanceCellIcon />,
    title: "Cell Anatomic Molecular Splicing",
    description: "View Service Details",
  },
  {
    icon: <AdvanceCellIcon />,
    title: "Bio-Technology Design & Implementation",
    description: "View Service Details",
  },
  {
    icon: <AdvanceCellIcon />,
    title: "Scientific Program Management",
    description: "View Service Details",
  },
  {
    icon: <AdvanceCellIcon />,
    title: "Cell Programming and Rejuvenation",
    description: "View Service Details",
  },
  {
    icon: <AdvanceCellIcon />,
    title: "Advanced Molecular Splicing Interpolization ",
    description: "View Service Details",
  },
];

const ServicesTab = () => {
  return (
    <IonCard className="tab_card">
      {/* <IonCard style={{ paddingTop: "21.58px" }}> */}
      <IonLabel className="accordion-label">
        Services Offered by Sphere Bio Tech
      </IonLabel>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          marginTop: 5,
        }}
      >
        {LinksData.map(({ icon, title, description }, index) => (
          <LinkCard icon={icon} title={title} description={description} />
        ))}
      </div>
      {/* </IonCard> */}
    </IonCard>
  );
};

export default ServicesTab;
