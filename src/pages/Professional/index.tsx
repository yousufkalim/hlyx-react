import { IonContent, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../../components/ProfileCard";
import { userData } from "../../data/userData";
import { Card } from "../../interface";
import { getBasicCardInfo } from "../../lib/card";
import "../../style/page/professional.css";
import BGPicturePlaceholder from "../../assets/bgPlaceholder.jpg";
import CompanyPlaceholder from "../../assets/companyPlaceholder.png";

const Professional = () => {
  const [cardInfo, setCardInfo] = useState<Card>({} as Card);
  const { id = "james-oriyn" } = useParams();
  const x = userData.find((x) => x.id === id);
  //f51721a2-ae41-48f3-a700-6dfc57701ee5

  useEffect(() => {
    (async () => {
      const response = await getBasicCardInfo(id);
      if (typeof response !== "string") {
        setCardInfo(response);
        console.log(cardInfo);
        return;
      }
      // window.location.replace("/page-not-found");
      console.log("Card Info: ", cardInfo);
    })();
  }, [id]);

  return (
    <IonPage>
      <IonContent class="overflow-hidden">
        <ProfileCard
          blend={x?.blend || "blue"}
          id={cardInfo?.templateId || "ID"}
          companyName={cardInfo?.company || "Company Name"}
          backgroundImage={cardInfo?.userAvatar || BGPicturePlaceholder}
          name={cardInfo?.fullName || "User Name"}
          position={cardInfo?.profTitle || "Job Position"}
          location={cardInfo?.state || "Address"}
          companyLogo={CompanyPlaceholder}
          link={x?.name || ""}
        />
      </IonContent>
    </IonPage>
  );
};

export default Professional;
