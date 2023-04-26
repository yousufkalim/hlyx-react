import { IonAccordionGroup, IonCard, IonLabel } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  CalendarIcon,
  CallIcon,
  ChevronIcon,
  LocateFillIcon,
  MailIcon,
  MobileIcon,
  WorldIcon,
} from "../assets/icons";
import { SocialMediaIcons } from "../constants/index";
// import { ProfileContext } from "../context/profileContext";
import { ContactCardProps } from "../interface";
import "../style/components/ContactTab.css";
import LinkCard from "./LinkCard";
import HeroSession from "./MediaCard/heroSession";

const ContactCard = ({ title, children, ...rest }: ContactCardProps) => {

  const { className } = rest;
  return (
    <IonCard className={`card-container ${className}`}>
      <IonLabel className="content-card-heading">{title}</IonLabel>
      {children}
    </IonCard>
  );
};

const ContactTab = () => {
  // const { userProfile } = useContext(ProfileContext);

  const [contactData, setContactData] = useState<any>()

  useEffect(() => {
    const token = localStorage.getItem("token")
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

  // const { contact } = userProfile;
  return (
    <>
      <HeroSession />
      {contactData?.emails && (
        <ContactCard title="Email">
          <a
            href={`mailto:${contactData.emails[0].email}`}
            target={"_blank"}
            rel="noreferrer"
            className="anchor-clear"
          >
            <div className="flex align-center justify-contain">
              <div className="flex align-center">
                <MailIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <IonLabel className="icon_text">{contactData?.emails[0].email}</IonLabel>
              </div>
              <ChevronIcon />
            </div>
          </a>
        </ContactCard>
      )}

      {contactData?.phones && (
        <ContactCard title="Phone">
          <IonAccordionGroup expand="compact" className="phone-card-container">
            <a href={`tel:${contactData.phones[0].phone}`} className="anchor-clear">
              <div className="flex align-center justify-contain mb-11">
                <div className="flex align-center">
                  <MobileIcon
                    color={"var(--icon-back)"}
                    white={"var(--text-color)"}
                  />
                  <IonLabel className="icon_text">
                    {contactData.phones[0].phone}
                  </IonLabel>
                </div>

                <ChevronIcon />
              </div>
            </a>
            {contactData.phones.slice(1, contactData.phones.length).map((item: any) => {
              return (
                <a href={`tel:${item.phone}`} className="anchor-clear">
                  <div
                    className="flex align-center justify-contain mx-19 mb-11"
                  >
                    <div className="flex align-center ">
                      <CallIcon
                        color={"var(--icon-back)"}
                        white={"var(--text-color)"}
                      />
                      <IonLabel className="icon_text">{item.phone}</IonLabel>
                    </div>
                    <ChevronIcon />
                  </div>
                </a>
              )
            })}
          </IonAccordionGroup>
        </ContactCard>
      )}
      {contactData?.calendar && (
        <a
          href={`https://calendly.com/${contactData?.calender}`}
          className="anchor-clear"
          target={"_blank"}
          rel="noreferrer"
        >
          <ContactCard title="Calender">
            <div className="flex align-center justify-contain mx-19">
              <div className="flex align-center">
                <CalendarIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <IonLabel className="icon_text">{contactData?.calendar}</IonLabel>
              </div>
              <ChevronIcon />
            </div>
          </ContactCard>
        </a>
      )}

      {contactData?.websites && (
        <a
          className="anchor-clear"
          target={"_blank"}
          rel="noreferrer"
          href={`https://${contactData?.websites[0].url}`}
        >
          <ContactCard title="Website">
            <div className="flex align-center justify-contain mx-19">
              <div className="flex align-center">
                <WorldIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <IonLabel className="icon_text">{contactData.websites[0].url}</IonLabel>
              </div>

              <ChevronIcon />
            </div>
          </ContactCard>
        </a>
      )}

      {contactData?.streetAddress && (
        <ContactCard title="Office">
          <a
            href={`https://www.google.com/maps/place/${contactData?.streetAddress}`}
            className="anchor-clear"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="flex align-center justify-contain mx-19">
              <div className="flex align-center">
                <LocateFillIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <IonLabel className="icon_text office_icon_text">
                  {contactData?.streetAddress}
                </IonLabel>
              </div>
              <ChevronIcon />
            </div>
          </a>
        </ContactCard>
      )}

      {contactData?.socialMedias && (
        <ContactCard title="Social Media">
          <div className="Social-icons-list">
            {contactData?.socialMedias?.map(
              ({ handle, platform }: any, index: number) => (
                <a
                  href={handle}
                  className="anchor-clear"
                  target={"_blank"}
                  rel="noreferrer"
                  key={index}
                >
                  <div className="icon-card">
                    <>
                      {SocialMediaIcons[platform.toLowerCase()]}
                      <IonLabel className="iconlabel">{platform}</IonLabel>
                    </>
                  </div>
                </a>
              )
            )}
          </div>
        </ContactCard>
      )}
      {contactData?.additionalLinks && (
        <ContactCard title="Links" className="border_none">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            {contactData?.additionalLinks?.map(
              ({ typeContent, url, title, description }: any, index: number) => (
                <LinkCard
                  key={index}
                  icon={"GoogleDrive"}
                  title={title}
                  hyperaddress={url}
                  description={description ? description : "Description not available"}
                />
              )
            )}
          </div>
        </ContactCard>
      )}
    </>
  );
};

export default ContactTab;
