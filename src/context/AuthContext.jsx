import { createContext, useContext, useEffect, useState } from "react"
import api from "../config/site.config";

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [verificationError, setVerificationError] = useState(null);
  const [errors, setErrors] = useState({ username: [], email: [], password: [], password_confirmation: [] });

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
      const userData = JSON.parse(localStorage.getItem('userData'));
      !userData.access_token ? setIsAuthenticated(false) : setIsAuthenticated(true);
    };
    checkLogin();
  }, []);

  useEffect(() => {
    if (verificationError) {
      const timer = setTimeout(() => {
        setVerificationError('');
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [verificationError]);

  const verificarCodigo = async (verificationCode) => {
    try {
      const response = await api.post("registro/verificar", { codigo: verificationCode.join('') });
      delete response.data.message;
      localStorage.setItem('userData', JSON.stringify(response.data));
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      setVerificationError('El código de verificación ingresado es incorrecto.');
    }
  };

  const signup = async (user) => {
    try {
      const res = await api.post('registro', user)
      if (res.status === 200) {
        // setUser(user)
        window.location.replace('/verificar-correo')
        //setIsAuthenticated(true)
      }
    } catch (error) {
      console.log(error.response)
      setErrors(error.response.data.errors)
    }
  }

  const logout = () => {
    localStorage.removeItem('userData');
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated, errors, verificarCodigo, verificationError, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
