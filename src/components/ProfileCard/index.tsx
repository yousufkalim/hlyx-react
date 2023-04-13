import { useState, useEffect } from "react";
import { IonButton, IonCard, IonContent } from "@ionic/react";
import { ProfileCardProps } from "../../interface";
import { BagIcon, LocationIcon, SwipeBar } from "../../assets/icons";
import "../../style/components/profileCard.css";
import axios from "axios";


const ProfileCard = ({
  backgroundImage,
  companyName,
  companyLogo,
  name,
  id,
  position,
  location,
  link,
  blend,
}: ProfileCardProps) => {

  const[user ,setUser]=useState({})

  useEffect(()=>{
    const token = localStorage.getItem("token")
    axios.get('https://dev.api.hlyx.me/api/v1/user/find/me', {
      headers:{
        Authorization: token
      }
    }).then((res)=>{
      setUser(res?.data?.user)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

console.log(user,"user")

  const [btn, setbtn] = useState(true);
  console.log(blend);
  return (
    <IonContent class="overflow-hidden" fullscreen>
      <img
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -3,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          background: "#000",
        }}
        src={backgroundImage}
        alt="user profile"
      />

      <section className={blend ?? `linear-bg`}></section>

      <article className="cardContainer">
        <section
          className="logoName"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingInline: 24,
            paddingBottom: 49,
          }}
        >
          {name === "Joel Calvillo" ? (
            <div className="joi-company-logo-section">
              <img
                src={companyLogo}
                alt="company logo"
                className="joi-company-logo"
              />
            </div>
          ) : (
            <div className="company-logo-section">
              <img
                src={companyLogo}
                alt="company logo"
                className="company-logo"
              />
            </div>
          )}

          <h1>{name}</h1>
          <section className="detail-container">
            <section className="detail">
              <BagIcon />
              <p className="position-text">
                {position} at{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {companyName}
                </span>
              </p>
            </section>
            <section className="detail">
              <LocationIcon />
              <p className="location-text">{location}</p>
            </section>
          </section>
        </section>
      </article>
      <section className="link-Button-section">
        <button
          style={{ all: "unset", marginInline: "auto", display: "block" }}
          onClick={() => {
            setbtn(!btn);
          }}
        >
          <SwipeBar />
        </button>
        <IonCard className="button-section">
          {btn ? (
            <IonButton
              expand="block"
              className="profile-footer-button"
              size="large"
              routerLink={`link/${id}`}
            >
              Link with Me
            </IonButton>
          ) : (
            <section className="buttons">
              <IonButton
                color="primary"
                shape="round"
                size="large"
                className="inner-btn"
              >
                Add Link
              </IonButton>
              <IonButton
                color="light"
                shape="round"
                fill="outline"
                size="large"
                className="inner-btn"
              >
                Message
              </IonButton>
            </section>
          )}
        </IonCard>
      </section>
    </IonContent>
  );
};

export default ProfileCard;
