import { IonButton } from '@ionic/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BackBtnIcon, HlyxHeaderLogo } from '../../../assets/icons';
import { ProfileContext } from '../../../context/profileContext';
import './avatarimage.css';
import { baseUrl } from '../../../config';

const Header = () => {
  const { userProfile } = useContext(ProfileContext);
  const { Avatar } = userProfile;
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(`${baseUrl}/api/v1//user/find/me`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setUser(res?.data?.user);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="sticky-header">
      <div className="profile-header-container">
        <Link to="/" replace={true}>
          <IonButton expand="full" className="back-btn">
            <BackBtnIcon color={'var(--text-color)'} />
          </IonButton>
        </Link>
        <HlyxHeaderLogo color={'var(--text-color)'} />
        {user && (
          <img
            className="avatarimage"
            src={user?.profileAvatar}
            alt="avatar-header-icon"
            style={{
              top: 21,
              right: 24.89,
              width: 61,
              height: 61,
              borderRadius: 25,
              objectFit: 'cover',
              padding: 2,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
