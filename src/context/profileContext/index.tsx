import { createContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { userData } from "../../data/userData";
import { childrenProps } from "../../interface";
// import axios from "axios";


export const ProfileContext = createContext<any>({});

const ProfileProvider = ({ children }: childrenProps) => {

  const { id } = useParams();

  const [userProfile, setUserProfile] = useState<any>({});

  const getUser = () => {
    const data = userData.find((user) => user.id === id);

    return data;
  };

  useEffect(() => {
    (async () => {
      const users = await getUser();
      console.log("user::::", users);
      if (!users && users === undefined) {
        window.location.replace("/page-not-found");
      }
      setUserProfile(users);
    })();

    return () => {
      setUserProfile({});
    };
    // eslint-disable-next-line
  }, [id]);
  const store = useMemo(() => ({ userProfile, setUserProfile }), [userProfile]);

  return (
    <ProfileContext.Provider value={{ ...store }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
