// AuthContext.js
import React from 'react';
import { ACCESS_TOKEN } from './constants';
import { createContext, useContext, useEffect, useMemo, useState } from "react";


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [isAuthorized, setIsAuthorized] = React.useState(null);

    useMemo(() => {
        // Kiểm tra token từ localStorage
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token === null) {
            // console.log("Change to False");
            setIsAuthorized(false);

        } else {
            console.log("Change to True");
            setIsAuthorized(true);
        }
    }, []);

    useEffect(()=>{
        console.log(isAuthorized);
    },[isAuthorized]);

    const value = {
        isAuthorized,
        setIsAuthorized,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
