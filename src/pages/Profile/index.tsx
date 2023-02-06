import {
  IonContent,
  IonPage,
} from "@ionic/react";
import MediaCard from "../../components/MediaCard";
import "../../style/page/profile.css";

const Profile = () => {
  return (
    <>
      <IonPage>
        <IonContent className="overflow-auto profile-container">
          <MediaCard />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Profile;
