import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import { userData } from "../../data/userData";
import { getBasicCardInfo } from "../../lib/card";
import "../../style/page/professional.css";

const Professional = () => {
  const [cardInfo, setCardInfo] = useState({});
  const { id = "james-oriyn" } = useParams();
  const x = userData.find((x) => x.id === id);

  //f51721a2-ae41-48f3-a700-6dfc57701ee5

  useEffect(() => {
    (async () => {
      const response = await getBasicCardInfo(id);

      if (response) {
        setCardInfo(response);
      }

      console.log(response, "Basic card info response");
    })();
  }, []);

  return (
    <IonPage>
      <IonContent class="overflow-hidden">
        <ProfileCard
          blend={x?.blend}
          id={x?.id || "james-oriyn"}
          companyName={"response?.company"}
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
