import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import { userData } from "../../data/userData";
import "../../style/page/professional.css";

const Professional = () => {
  const { id = "james-oriyn" } = useParams();
  const x = userData.find((x) => x.id === id);

  return (
    <IonPage>
      <IonContent class="overflow-hidden">
        <ProfileCard
          blend={x?.blend}
          id={x?.id || "james-oriyn"}
          companyName={x?.jobTitle?.companyName}
          backgroundImage={x?.backgroundImage?.url || ""}
          name={x?.name || ""}
          position={x?.jobTitle.position || ""}
          location={x?.address || ""}
          companyLogo={x?.companyLogo.url || ""}
          link={x?.name || ""}
        />
      </IonContent>
    </IonPage>
  );
};

export default Professional;
