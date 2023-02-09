import React from "react";
import { brakerData } from "../../../../../constants";
import { IonChip } from "@ionic/react";
import "../../../../../style/components/Icebreakers.css";

const Icebreakers = () => {
  return (
    <>
      {brakerData?.map(({ description, tags }) => (
        <div className="section">
          <div className="Icebreakers-Sub-heading">{description}</div>
          <div>
            {tags?.map((item) => (
              <>
                <IonChip className="custom-chip" color="dark">
                  {item}
                </IonChip>
              </>
            ))}
          </div>
        </div>
      ))}
      <div className="Icebreakers-Sub-heading">Motto</div>
      <div className="content-five">
        Science is an oyster, serve it up tastefully.
      </div>
    </>
  );
};

export default Icebreakers;
