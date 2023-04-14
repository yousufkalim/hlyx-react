import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
} from "@ionic/react";
import "../../style/components/MediaCard/mediaCard.css";
import { BreifIcon, LinkBtnIcon, LocateIcon } from "../../assets/icons";
import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/profileContext";
import axios from "axios";


const HeroSession = () => {
  const { userProfile } = useContext(ProfileContext);
  const { image, jobTitle, name, address, companyLogo } = userProfile;
  // const[jobTitle]=userProfile.contact[]
  const [user, setUser] = useState<any>(null)
  const [contactData, setContactData] = useState<any>()


  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get('https://dev.api.hlyx.me/api/v1//user/find/me', {
      headers: {
        Authorization: token
      }
    }).then((res) => {
      setUser(res?.data?.user)
    }).catch((err) => {
      console.log(err)
    })

    const cardId = localStorage.getItem("cardId")
    axios.get(`https://dev.api.hlyx.me/api/v1/card/find/contact-page/${cardId}`, {
      headers: {
        Authorization: token
      }
    }).then((res) => {
      console.log("resofCard", res.data.card)
      setContactData(res.data.card)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    user &&
    <>
      <div style={{ position: "relative" }}>
        <div className="cover_photo_container">
          <img alt={image?.altText} src={user?.profileAvatar} className="cover_photo" />
        </div>
        {name === "Joel Calvillo" ? (
          <img
            alt={companyLogo?.alttext}
            className="joi-avatar-icon"
            src={user?.companyLogo}
          />
        ) : (
          <img
            alt={companyLogo?.alttext}
            className="avatar-icon"
            src={contactData?.companyIcon}
          />
        )}
      </div>
      <IonCard className="cover_photo_card ion_Card">
        <IonCardSubtitle>{user?.firstName + " " + user?.lastName}</IonCardSubtitle>

        <IonCardContent className="ion-content">
          <div className="ion_text">
            <BreifIcon color="var(--text-color)" />
            <p>
              {user?.profTitle} at <b>{user?.company}</b>
            </p>
          </div>

          <div className="ion_text">
            <LocateIcon color="var(--text-color)" />
            <p>{user?.city + ", " + user?.state}</p>
          </div>
        </IonCardContent>
      </IonCard>

      <IonCard className="link_card">
        <IonButton color="primary" expand="block" className="ion-btn">
          <div style={{ marginRight: 5 }}>
            <LinkBtnIcon />
          </div>
          Link with Me
        </IonButton>
      </IonCard>
    </>
  );
};
export default HeroSession;
