import { createContext, useContext, useEffect, useState } from "react"
import api from "../config/site.config";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState({username: [], email: [], password:[], password_confirmation:[]})

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5500);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const signup = async (user) => {
    try {
      const res = await api.post('registro', user)
      if(res.status === 200){
        setUser(user)
        window.location.replace('/verificar-correo')
        //setIsAuthenticated(true)
      }
    } catch (error){
      console.log(error.response)
      setErrors(error.response.data.errors)
    }
  }
    return (
    <AuthContext.Provider value={{signup, user, isAuthenticated, errors}}>
        {children}
    </AuthContext.Provider>
  )
}
