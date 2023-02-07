import React from "react";
import { IonCard, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { TabsProps } from "../../interface";
import "../../style/components/Tabs.css";

const Tabs = ({ tabList, activeTab, setActiveTab }: TabsProps) => {
  return (
    <>
      <IonCard className="tab_container">
        <IonSegment value={activeTab} swipeGesture={false} scrollable>
          {tabList.map((tab, index) => (
            <IonSegmentButton
              color="primary"
              onClick={() => {
                setActiveTab(`${index}`);
              }}
              value={index.toString()}
              key={index}
            >
              <IonLabel className="segment-btn-label">{tab}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonCard>
    </>
  );
};

export default Tabs;
