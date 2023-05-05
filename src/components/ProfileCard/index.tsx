import { useState, useContext, useEffect, useMemo } from 'react';
import { IonButton, IonCard, IonContent } from '@ionic/react';
import { ProfileCardProps } from '../../interface';
import { BagIcon, LocationIcon, SwipeBar } from '../../assets/icons';
import '../../style/components/profileCard.css';
import { ProfileContext } from '../../context/profileContext';
import axios from 'axios';
import { baseUrl } from '../../config';

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
  const { userProfile } = useContext(ProfileContext);

  useEffect(() => {
    console.log('userProfile11', userProfile);
  }, [userProfile]);

  const [user, setUser] = useState<any>(null);
  const [contactData, setContactData] = useState<any>();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${baseUrl}/api/v1//user/find/me`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        localStorage.setItem(
          'cardId',
          res?.data?.user?.cards[0]?.cardId
            ? res?.data?.user?.cards[0]?.cardId
            : '',
        );
        setUser(res?.data?.user);
      })
      .catch((err) => {
        console.log(err);
      });

    const cardId = localStorage.getItem('cardId');
    axios
      .get(`${baseUrl}/api/v1/card/find/contact-page/${cardId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log('resofCard', res.data.card);
        setContactData(res.data.card);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [btn, setbtn] = useState(true);
  console.log('user', user);
  return (
    user && (
      <IonContent class="overflow-hidden" fullscreen>
        <img
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: -3,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            background: '#000',
          }}
          src={user?.profileAvatar}
          alt="user profile"
        />

        <section className={blend ?? `linear-bg`}></section>

        <article className="cardContainer">
          {user && (
            <section
              className="logoName"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingInline: 24,
                paddingBottom: 49,
              }}
            >
              {name === 'Joel Calvillo' ? (
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
                    src={contactData?.companyIcon}
                    alt="company logo"
                    className="company-logo"
                  />
                </div>
              )}

              <h1>{user?.firstName + ' ' + user?.lastName}</h1>
              <section className="detail-container">
                <section className="detail">
                  <BagIcon />
                  <p className="position-text">
                    {user?.profTitle} at{' '}
                    <span style={{ fontWeight: 'bold', color: 'white' }}>
                      {user?.company}
                    </span>
                  </p>
                </section>
                <section className="detail">
                  <LocationIcon />
                  <p className="location-text">
                    {user?.city + ', ' + user?.state}
                  </p>
                </section>
              </section>
            </section>
          )}
        </article>
        <section className="link-Button-section">
          <button
            style={{ all: 'unset', marginInline: 'auto', display: 'block' }}
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
    )
  );
};

export default ProfileCard;
