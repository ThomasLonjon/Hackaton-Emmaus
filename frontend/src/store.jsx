import React, { createContext, useState, useContext, useEffect } from "react";
import api from "./services/api";

const store = createContext();
const useStore = () => useContext(store);
const initialState = {
  user: null,
  isLogged: false,
};

const getCurrentUser = () => {
  return api.get("http://localhost:8000/users/me");
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  useEffect(() => {
    (async () => {
      try {
        const result = await getCurrentUser();
        setAuth({ user: result.data[0], isLogged: true });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <store.Provider value={{ auth, setAuth }}>{children}</store.Provider>;
};

export { AuthProvider };
export default useStore;
