import { IonCard, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React, { useState } from "react";
import { TabsProps } from "../../../interface";
import "../../../style/components/toggleButton.css";
import AchievedTab from "./tabs/AchievedTab";
import ActiveTab from "./tabs/ActiveTab";
import AssistTab from "./tabs/AssistTab";

export const BusinessGoalsTabs = ["Active", "Achieved", "Assist"];

export const BusinessGoalsContent = [
  <ActiveTab />,
  <AchievedTab />,
  <AssistTab />,
];

export const ToggleButton = ({
  tabList,
  activeTab,
  setActiveTab,
}: TabsProps) => {
  return (
    <IonSegment className="toggle-container" value={activeTab}>
      {tabList.map((tab, index) => (
        <IonSegmentButton
          className="toggle-button"
          onClick={() => {
            setActiveTab(`${index}`);
          }}
          value={index.toString()}
          key={index}
        >
          <IonLabel className="label">{tab}</IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};

const BusinessGoals = () => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <>
      <ToggleButton
        tabList={BusinessGoalsTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {BusinessGoalsContent[+activeTab]}
    </>
  );
};

export default BusinessGoals;
