import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext(); 

export function AuthProvider({children}){
    
    const [isAuthenticated,setIsAuthenticated] = useState(
        () => localStorage.getItem('isAuthenticated') === 'true'
    );
    
    useEffect(() => {
        // Update local storage when isAuthenticated changes
        localStorage.setItem('isAuthenticated', isAuthenticated);
      }, [isAuthenticated]);

    const login = () => {
        setIsAuthenticated(true);
      };
    
      const logout = () => {
        setIsAuthenticated(false);
      };

    return <AuthContext.Provider value={{isAuthenticated, login, logout}}>{children}</AuthContext.Provider>
}


export const useAuth = () => useContext(AuthContext); //Guarda el contexto de forma global
