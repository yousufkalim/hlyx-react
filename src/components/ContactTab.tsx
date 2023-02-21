import { IonButton, IonCard, IonLabel, IonAccordionGroup } from "@ionic/react";
import "../style/components/ContactTab.css";
import {
  CalendarIcon,
  CallIcon,
  ChevronIcon,
  LocateFillIcon,
  MailIcon,
  MobileIcon,
  WorldIcon,
} from "../assets/icons";
import LinkCard from "./LinkCard";
import HeroSession from "./MediaCard/heroSession";
import { SocialData, SocialMediaIcons } from "../constants/index";
import { useContext } from "react";
import { ProfileContext } from "../context/profileContext";

const ContactCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <IonCard className="card-container">
      <IonLabel className="content-card-heading">{title}</IonLabel>
      {children}
    </IonCard>
  );
};

const ContactTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { contact } = userProfile;
  return (
    <>
      <HeroSession />
      {contact?.email && (
        <ContactCard title="Email">
          <a href="mailto: {contact?.email}" className="anchor-clear">
            <div className="flex align-center justify-contain">
              <div className="flex align-center">
                <MailIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <IonLabel className="icon_text">{contact?.email}</IonLabel>
              </div>

              <ChevronIcon />
            </div>
          </a>
        </ContactCard>
      )}

      {contact?.phone && (
        <ContactCard title="Phone">
          <IonAccordionGroup expand="compact" className="phone-card-container">
            <a href="tel:{contact?.phone?.number}" className="anchor-clear">
              <div className="flex align-center justify-contain mb-11">
                <div className="flex align-center">
                  <MobileIcon
                    color={"var(--icon-back)"}
                    white={"var(--text-color)"}
                  />
                  <IonLabel className="icon_text">
                    {contact?.phone?.number}
                  </IonLabel>
                </div>

                <ChevronIcon />
              </div>
            </a>
            {contact?.phone?.faxNumber.map((number: any, index: number) => (
              <a href="tel:{number}" className="anchor-clear">
                <div
                  className="flex align-center justify-contain mx-19 mb-11"
                  key={index}
                >
                  <div className="flex align-center ">
                    <CallIcon
                      color={"var(--icon-back)"}
                      white={"var(--text-color)"}
                    />
                    <IonLabel className="icon_text">{number}</IonLabel>
                  </div>
                  <ChevronIcon />
                </div>
              </a>
            ))}

            {/* <div className="flex align-center justify-contain mx-19 mb-11">
              <div className="flex align-center">
                <FaxIcon white={"var(--text-color)"} />
                <a href="tel:+16503456789" className="anchor-clear">
                  <IonLabel className="icon_text">
                    +1 (888) 796-7496 Ext 700
                  </IonLabel>
                </a>
              </div>
              <ChevronIcon />
            </div> */}
          </IonAccordionGroup>
        </ContactCard>
      )}
      {contact?.calendar && (
        <a
          href="https://calendly.com/wajeehaslam/30min"
          className="anchor-clear"
          target={"_blank"}
          rel="noreferrer"
        >
          <ContactCard title="Calendar">
            <div className="flex align-center justify-contain mx-19">
              <div className="flex align-center">
                <CalendarIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <IonLabel className="icon_text">{contact?.calendar}</IonLabel>
              </div>
              <ChevronIcon />
            </div>
          </ContactCard>
        </a>
      )}

      {contact?.website && (
        <a
          className="anchor-clear"
          href={contact.website}
          target={"_blank"}
          rel="noreferrer"
        >
          <ContactCard title="Website">
            <div className="flex align-center justify-contain mx-19">
              <div className="flex align-center">
                <WorldIcon
                  color={"var(--icon-back)"}
                  white={"var(--text-color)"}
                />
                <IonLabel className="icon_text">{contact.website}</IonLabel>
              </div>

              <ChevronIcon />
            </div>
          </ContactCard>
        </a>
      )}

      {contact?.officeAddress && (
        <ContactCard title="Office">
          <a
            href={`http://maps.google.com/?q=lahore`}
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
                <IonLabel
                  className="icon_text office_icon_text"
                  style={{ maxWidth: 200 }}
                >
                  {contact?.officeAddress}
                </IonLabel>
              </div>

              <ChevronIcon />
            </div>
          </a>
        </ContactCard>
      )}

      {contact?.socialMedia && (
        <ContactCard title="Social Media">
          <div className="Social-icons-list">
            {contact?.socialMedia?.map(
              ({ link, label }: any, index: number) => (
                <a
                  href={link}
                  className="anchor-clear"
                  target={"_blank"}
                  rel="noreferrer"
                  key={index}
                >
                  <div className="icon-card">
                    <>
                      {SocialMediaIcons[label]}
                      <IonLabel className="iconlabel">{label}</IonLabel>
                    </>
                  </div>
                </a>
              )
            )}
          </div>
        </ContactCard>
      )}
      {contact?.blogLink && (
        <ContactCard title="Links">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            {contact?.blogLink?.map(
              ({ type, link, title, description }: any, index: number) => (
                <LinkCard
                  key={index}
                  icon={type}
                  title={title}
                  hyperaddress={link}
                  description={description}
                />
              )
            )}
          </div>
        </ContactCard>
      )}
      <div style={{ paddingBlock: 20, backgroundColor: "var(--bg-color)" }}>
        <IonButton
          className="outline-btn"
          fill="outline"
          expand="block"
          shape="round"
          style={{
            fontWeight: 600,
            fontSize: 15,
            lineHeight: "17px",
            fontFamily: "Poppins",
          }}
        >
          Create Your Free Profile
        </IonButton>
      </div>
    </>
  );
};

export default ContactTab;
