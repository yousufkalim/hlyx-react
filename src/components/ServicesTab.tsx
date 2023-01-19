import { IonCard, IonCardTitle} from "@ionic/react";
import "./ServicesTab.css";
import React from "react";
import { AdvanceCellIcon, ServiceIcon } from "../assets/icons/index";
import cellAnatomic from "../assets/cellAnatomic.png"
import bioTech from "../assets/bioTech.png"
import LinkCard from "./LinkCard";
import scientific from "../assets/scientific.png"
import cellProg from "../assets/cellprog.png"
import advanced from "../assets/advanced.png"
import { IonButton } from "@ionic/react";

const LinksData = [
  {
    icon: <AdvanceCellIcon />,
    title: "Advanced Cell Research & Analysis",
    description: "View Service Details",
  },
  {
    icon: <img src={cellAnatomic} alt="Cell IMG" height={45} width={45} />,
    title: "Cell Anatomic Molecular Splicing",
    description: "View Service Details",
  },
  {
    icon: <img src={bioTech} alt="Cell IMG" height={45} width={45}/>,
    title: "Bio-Technology Design & Implementation",
    description: "View Service Details",
  },
  {
    icon: <img src={scientific} alt="Cell IMG" height={45} width={45}/>,
    title: "Scientific Program Management",
    description: "View Service Details",
  },
  {
    icon: <img src={cellProg} alt="Cell IMG" height={45} width={45}/>,
    title: "Cell Programming and Rejuvenation",
    description: "View Service Details",
  },
  {
    icon: <img src={advanced} alt="Cell IMG" height={45} width={45}/>,
    title: "Advanced Molecular Splicing Interpolization ",
    description: "View Service Details",
  },
];
const ServiceCard = () => {
  return (
    <IonCard style={{ marginTop: -10, borderRadius: "0px 0px 10px 10px" }}>
      <div className="flex align-center br-btm justify-contain">
        <div className="flex align-center">
          <div className="card-icon">
            <ServiceIcon />
          </div>
          <IonCardTitle className="card-title">
            Services Offered by <strong>Sphere Bio Tech</strong>
          </IonCardTitle>
        </div>
      </div>
      <div className="content-container">
        <div className="cards-list">
          {LinksData.map(({ icon, title, description }, index) => (
            <LinkCard
              icon={icon}
              title={title}
              key={index}
              description={description}
            />
          ))}
        </div>
      </div>
    </IonCard>
  );
};
const ServicesTab = () => {
  return (
    <div>
      <ServiceCard />
      <IonButton
        className="outline-btn"
        fill="outline"
        expand="block"
        style={{ marginBlock: 20, fontWeight: 600 }}
      >
        Create Your Free Profile
      </IonButton>
    </div>
  );
};

export default ServicesTab;
