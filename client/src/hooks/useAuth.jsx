import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import axios from "axios";
import userService from "../services/user.service";
import localStorageService, {
  setTokens, getUserId
} from "../services/localStorage.service";
import { useHistory } from "react-router-dom";
import config from "../config.json";

export const httpAuth = axios.create({
  baseURL: config.apiEndpoint + "/auth/",
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY,
  },
});
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();

  async function logIn({ email, password }) {
    try {
      const { data } = await httpAuth.post(
        `signInWithPassword`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      setTokens(data);
      await getUserData(data);
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        switch (message) {
          case "INVALID_PASSWORD":
            throw new Error("Email или пароль введены некорректно");

          default:
            throw new Error("Слишком много попыток входа. Попробуйте позднее");
        }
      }
    }
  }
  function logOut() {
    localStorageService.removeAuthData();
    setUser(null);
    history.push("/");
  }
  async function signUp(payload) {
    try {
      const { data } = await httpAuth.post(`signUp`, payload);
      setTokens(data);
      await getUserData(data)
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const errorObject = {
            email: "Пользователь с таким Email уже существует",
          };
          throw errorObject;
        }
      }
    }
  }
  function errorCatcher(error) {
    console.log(error);
    // const { message } = error.response.data;
    // setError(message);
  }
  async function getUserData(data) {
    try {
        const { content } = await userService.get();
        if(data){setUser(content.find((c)=>c._id===data.userId));}
        else{setUser(content.find((c)=>c._id===getUserId()));}
      } catch (error) {
        errorCatcher(error);
      }
  }
  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData();
    } else {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    if (error !== null) {
      toast(error);
      setError(null);
    }
  }, [error]);
  return (
    <AuthContext.Provider value={{ signUp, logIn, currentUser, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AuthProvider;
