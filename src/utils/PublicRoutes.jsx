import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/clerk-react";
import { getUserByClerkId, getUserBySessionId } from '../api/userApi';
import { Navigate } from 'react-router-dom';

export default function PublicRoutes({ Component, roles }) {
    const { isSignedIn, user, isLoaded, sessionId, } = useUser();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const apiCaller = async () => {
            const dd=await user?.getSessions();
            let sessionVar;
            if ( isLoaded &&sessionId) {
                sessionVar = sessionId||(dd && dd.length > 0 ? dd[0].id : null);
            } else {
                sessionVar = (dd && dd.length > 0 ? dd[0].id : null);
            }
            try {
                console.log("sessionVar",sessionVar);
                if (!sessionVar) {
                    setLoading(false);
                    return   ;
                }
                const userId = await getUserBySessionId({ sessionId: sessionVar });
                console.log("jjj",userId);
                const userResponse = await getUserByClerkId(userId.userId);
                setUserData(userResponse.data.user);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Error fetching user data:", error);
            }
        }
        apiCaller();
    }, [isLoaded, sessionId, user]);
    if (userData) {
        if (userData.user_role) {
            localStorage.clear();
            if (userData.user_role == "admin") {
                return <Navigate to="/admin" />;
            } else if (userData.user_role == "user") {
                return <Navigate to="/user" />;
            }
            signOut()
             return <Component />;
        }
    }


    if (loading) {

        return <div>Loading...</div>; // Optionally, show loading state while checking if the user is loaded
    }
    return <Component />;
}
