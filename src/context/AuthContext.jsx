import { createContext, useContext, useEffect, useState } from "react";
import api from "../config/site.config";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [verificationError, setVerificationError] = useState(null);
  const [errors, setErrors] = useState({});
  const [signinErrors, setSigninErrors] = useState(null);
  const [emptyErrors, setEmptyErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      !userData.access_token
        ? setIsAuthenticated(false)
        : setIsAuthenticated(true);
    };
    checkLogin();
  }, [isAuthenticated]);

  useEffect(() => {
    if (verificationError) {
      const timer = setTimeout(() => {
        setVerificationError("");
      }, 5500);
      return () => clearTimeout(timer);
    }
    if (signinErrors) {
      const timer = setTimeout(() => {
        setSigninErrors("");
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [verificationError, signinErrors]);

  const verificarCodigo = async (verificationCode) => {
    try {
      const response = await api.post("registro/verificar", {
        codigo: verificationCode.join(""),
      });
      delete response.data.message;
      localStorage.setItem("userData", JSON.stringify(response.data));
      setUser(response.data);
      setIsAuthenticated(true);
      api.setAuthorizationToken(response.data.access_token);
    } catch (error) {
      setVerificationError(
        error.response.data.errors
      );
    }
  };

  const signup = async (user) => {
    try {
      const res = await api.post("registro", user);
      if (res.status === 200) {
        // setUser(user)
        navigate("/verificar-correo", { state: { emailValue: user.email } });
        //setIsAuthenticated(true)
        console.log(user.email)
      }
    } catch (error) {
      console.error(error.response);
      setErrors(error.response.data.errors);
    }
  };

  const signin = async (user) => {
    try {
      const res = await api.post("autenticacion/iniciarSesion", user);
      if (res.status === 200) {
        delete res.data.message;
        localStorage.setItem("userData", JSON.stringify(res.data));
        setIsAuthenticated(true);
        api.setAuthorizationToken(res.data.access_token);
        //setUser(user)
        window.location.replace("/mis_playlists");
      }
    } catch (error) {
      console.error(error.response);
      if (
        typeof error.response.data.errors === "object" &&
        !Array.isArray(error.response.data.errors)
      ) {
        setEmptyErrors(error.response.data.errors);
      } else if (
        typeof error.response.data.errors === "string" ||
        Array.isArray(error.response.data.errors)
      ) {
        setSigninErrors(error.response.data.errors);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    setIsAuthenticated(false);
    api.clearAuthorizationToken();
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        errors,
        verificarCodigo,
        verificationError,
        logout,
        signin,
        signinErrors,
        emptyErrors,
        setEmptyErrors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
