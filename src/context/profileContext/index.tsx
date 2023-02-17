import React, { createContext, useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { userData } from "../../data/userData";
import { childrenProps } from "../../interface";

export const ProfileContext = createContext<any>({});

const ProfileProvider = ({ children }: childrenProps) => {
  const { name } = useParams();
  const history = useHistory();

  const [userProfile, setUserProfile] = useState<any>({});

  const getUser = () => {
    const data = userData.find((user) => user.contact.name === name);
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
  }, [name]);
  const store = useMemo(() => ({ userProfile, setUserProfile }), [userProfile]);

  console.log(userProfile, name);
  return (
    <ProfileContext.Provider value={{ ...store }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
