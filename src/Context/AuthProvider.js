import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/firebase.config';

export const AUTH_CONTEXT = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // login user with email and password 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // update user name and photo 
    const updateUserName = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };

    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // log out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);


    const value = {
        user,
        loading,
        createUser,
        loginUser,
        updateUserName,
        logOut,
        googleSignIn,
        
    }



    return (
        <AUTH_CONTEXT.Provider value={value}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

export default AuthProvider;