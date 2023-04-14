import { IonChip } from "@ionic/react";
import { FC, useContext } from "react";
import { ProfileContext } from "../../../../../context/profileContext";
import "../../../../../style/components/Icebreakers.css";
import { AboutProps } from "../../../../../interface";



interface IIcebreakers {
  aboutData: AboutProps
}

const Icebreakers: FC<IIcebreakers> = ({ aboutData }) => {
  const { userProfile } = useContext(ProfileContext);
  const { hobbies, interest, skills, motto } = userProfile?.about?.icebreakers;
  return (
    <div className="icebreakers-block">
      {aboutData && (
        <div className="section">
          <div className="Icebreakers-Sub-heading">Hobbies</div>
          <div className="points">
            {aboutData.hobbies?.map((hobbies: any, index: number) => (
              <IonChip key={index} className="custom-chip" color="dark">
                {hobbies}
              </IonChip>
            ))}
          </div>
        </div>
      )}

      {aboutData && (
        <div className="section">
          <div className="Icebreakers-Sub-heading">Interest</div>
          <div className="points">
            {aboutData.interests?.map((interest: any, index: number) => (
              <IonChip key={index} className="custom-chip" color="dark">
                {interest}
              </IonChip>
            ))}
          </div>
        </div>
      )}

      {aboutData && (
        <div className="section">
          <div className="Icebreakers-Sub-heading">Skills</div>
          <div className="points">
            {aboutData.skills?.map((skill: any, index: number) => (
              <IonChip key={index} className="custom-chip" color="dark">
                {skill}
              </IonChip>
            ))}
          </div>
        </div>
      )}

      <div className="moto-point">
        <div className="Icebreakers-Sub-heading">Motto</div>
        <div className="content-five">{aboutData?.motto}</div>
      </div>
    </div>
  );
};

export default Icebreakers;
