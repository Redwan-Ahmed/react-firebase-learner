import React, { useEffect, useState } from "react";
import firebase from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        setLoading(false);
      });
    }, []);
  
    if (loading) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <h1>Loading...</h1>
        </div>
      );
    }
  
    return (
      <AuthContext.Provider
        value={[isSignedIn, setIsSignedIn]}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  