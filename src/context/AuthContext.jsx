import { createContext, useContext, useState } from "react"

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

  const signup = (user) => {
    setUser(user)
  }
    return (
    <AuthContext.Provider value={{signup, user, isAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}
