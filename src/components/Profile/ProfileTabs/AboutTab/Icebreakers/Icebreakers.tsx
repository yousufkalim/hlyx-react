import { IonChip } from "@ionic/react";
import { useContext } from "react";
import { ProfileContext } from "../../../../../context/profileContext";
import "../../../../../style/components/Icebreakers.css";

const Icebreakers = () => {
  const { userProfile } = useContext(ProfileContext);
  const { hobbies, interest, skills, motto } = userProfile?.about?.icebreakers;
  return (
    <div className="icebreakers-block">
      {hobbies && (
        <div className="section">
          <div className="Icebreakers-Sub-heading">Hobbies</div>
          <div className="points">
            {hobbies?.map((hobbies: any, index: number) => (
              <IonChip key={index} className="custom-chip" color="dark">
                {hobbies}
              </IonChip>
            ))}
          </div>
        </div>
      )}

      {interest && (
        <div className="section">
          <div className="Icebreakers-Sub-heading">Interest</div>
          <div className="points">
            {interest?.map((interest: any, index: number) => (
              <IonChip key={index} className="custom-chip" color="dark">
                {interest}
              </IonChip>
            ))}
          </div>
        </div>
      )}

      {skills && (
        <div className="section">
          <div className="Icebreakers-Sub-heading">Skills</div>
          <div className="points">
            {skills?.map((skill: any, index: number) => (
              <IonChip key={index} className="custom-chip" color="dark">
                {skill}
              </IonChip>
            ))}
          </div>
        </div>
      )}

      <div className="moto-point">
        <div className="Icebreakers-Sub-heading">Motto</div>
        <div className="content-five">{motto}</div>
      </div>
    </div>
  );
};

export default Icebreakers;
