import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { FC, useState } from "react";
import { TabsProps } from "../../../../../interface";
import "../../../../../style/components/toggleButton.css";
import AchievedTab from "./tabs/AchievedTab";
import ActiveTab from "./tabs/ActiveTab";
import AssistTab from "./tabs/AssistTab";
import { AboutProps } from "../../../../../interface";



interface IBusinessGoals {
  aboutData: AboutProps
}


export const BusinessGoalsTabs = ["Active", "Achieved"];

// export const BusinessGoalsContent = [
//   <ActiveTab  />,
//   <AchievedTab aboutData={aboutData} />,
//   <AssistTab aboutData={aboutData} />,
// ];

export const ToggleButton = ({
  tabList,
  activeTab,
  setActiveTab,
}: TabsProps) => {
  return (
    <IonSegment
      className="toggle-container"
      swipeGesture={false}
      value={activeTab}
    >
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

const BusinessGoals: FC<IBusinessGoals> = ({ aboutData }) => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <>
      <ToggleButton
        tabList={BusinessGoalsTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* {BusinessGoalsContent[+activeTab]}
       */}

      {activeTab === '0' ?
        <ActiveTab aboutData={aboutData} />
        :
        activeTab === '1' &&
        <AchievedTab aboutData={aboutData} />

      }
    </>
  );
};

export default BusinessGoals;
