import { IonCard, IonCardTitle, IonChip, IonIcon } from "@ionic/react";
import { FunctionComponent, PropsWithChildren, } from "react";
import "../../style/components/AboutCard/aboutCard.css"

type AboutCardProps = PropsWithChildren & {
  icon: JSX.Element;
  cardTitle: string;
  cardTagTitle?: string;
  isTagTitle: boolean;
}

const AboutCard: FunctionComponent<AboutCardProps> = ({ cardTitle, icon, cardTagTitle, children, isTagTitle }) => {
  return (
    <IonCard>
      <div>
        <div className="">
          {icon}
        </div>
        <IonCardTitle className="">{cardTitle}</IonCardTitle>
        {isTagTitle && <IonChip className="" color="primary">{cardTagTitle}</IonChip>}
      </div>
      <div>
        {children}
      </div>
    </IonCard>
  );
};

export default AboutCard