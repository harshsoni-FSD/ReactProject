import React ,{createContext,useContext}from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
}) //yha hm kuch value de skte if first time koi context bne toh 
                                        // means inital me value context first time bne toh kya kya value already feed ho
export const ThemeProvider=ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}

