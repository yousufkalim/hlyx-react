import { IonCard, IonCardContent } from '@ionic/react';
import React, { useState, useContext, useEffect } from 'react';
import { BreifIcon, LocateIcon } from '../../../assets/icons/index';
import '../../../style/components/userDetailCard.css';
import { ProfileContext } from '../../../context/profileContext';
import axios from 'axios';
import { baseUrl } from '../../../config';

const UserDetailCard = () => {
  const { userProfile } = useContext(ProfileContext);
  const { image, name, jobTitle, address } = userProfile;
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
  }, []);
  console.log(user, 'user===>');
  return (
    <>
      {user && (
        <IonCard className="user-detail-header">
          <IonCardContent className="user-detail">
            <img
              alt={image?.altText}
              src={user?.profileAvatar}
              className="user-image"
            />
          </IonCardContent>
          <IonCardContent className="user-detail">
            <h1>{user?.firstName + ' ' + user?.lastName}</h1>
            <div className="user-info">
              <BreifIcon height={10} width={12} color="var(--text-color)" />
              <p>
                {user?.profTitle} at <b>{user?.company}</b>
              </p>
            </div>
            <div className="user-info">
              <LocateIcon height={10} width={12} color="var(--text-color)" />
              <p>{user?.city + ', ' + user?.state}</p>
            </div>
          </IonCardContent>
        </IonCard>
      )}
    </>
  );
};

export default UserDetailCard;
