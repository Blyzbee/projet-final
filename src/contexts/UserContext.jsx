import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const UserDataContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token) fetchUserData();
  }, [token]);

  const fetchUserData = async () => {
    setLoading(true);
    const userInfos = await jwt_decode(token);
    setUserData(userInfos);
    setLoading(false);
  };

  return (
    <UserDataContext.Provider value={{ userData, loading, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
