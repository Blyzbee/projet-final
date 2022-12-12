import { createContext, useState } from "react";

const UserDataContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
