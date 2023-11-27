import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
 isAuthenticated: false,
}); //Es utilizado para manejar estados de forma global

export function AuthProvider({children}){
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    return <AuthContext.Provider value={{isAuthenticated}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext); //Guarda el contexto de forma global