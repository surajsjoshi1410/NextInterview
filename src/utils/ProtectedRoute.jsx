import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { getUserByClerkId, getUserBySessionId } from "../api/userApi";
import { useClerk } from '@clerk/clerk-react';

const ProtectedRoute = ({ component: Component, roles }) => {
  const { isSignedIn, user,isLoaded, sessionId, } = useUser();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { signOut } = useClerk();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("isSignedIn", isSignedIn, "isLoaded", isLoaded, "sessionId", sessionId, "user", user);
        const dd=await user?.getSessions();
        let sessionVar;
        if ( !isLoaded || !sessionId) {
         
          sessionVar = JSON.parse(localStorage.getItem("sessionId"))||(dd && dd.length > 0 ? dd[0].id : null);
          console.log(" v ",sessionVar,sessionVar==null );
          
        } else {

          console.log(sessionId, "ho ho ho");
          sessionVar = sessionId||(dd && dd.length > 0 ? dd[0].id : null);
        }
        // Get session ID from local storage
       
        if (!sessionVar) {
          
          setError("No session found");
          
          return   <Navigate to="/login" />;
        }
        if(sessionVar==null){
          return   <Navigate to="/login" />;
        }
        if(sessionVar){
          setError(null);
        }

        // Fetch user ID based on session ID
        const userId = await getUserBySessionId({ sessionId: sessionVar });
        console.log(userId);  
        if (!userId?.userId) {
          setError("Invalid user data");
          return;
        }

        // Fetch user data based on user ID
        const userResponse = await getUserByClerkId(userId.userId);
        console.log(userResponse);
        setUserData(userResponse.data.user);
        if(roles){
          if (!roles.includes(userResponse.data.user.user_role)) {
            localStorage.clear(); 
            if (userResponse.data.user.user_role == "admin") {
              return <Navigate to="/admin" />;
            } else if (userResponse.data.user.user_role == "user") {
              return <Navigate to="/user" />;
            }
            signOut()
            return <Navigate to="/login" />;
          }
  
        }
        
          localStorage.clear(); 
          if (userResponse.data.user.user_role == "admin") {
            setLoading(false);
            return <Navigate to="/admin" />;
          } else if (userResponse.data.user.user_role == "user") {
            setLoading(false);
            return <Navigate to="/user" />;
          }
         
      

        // After data is loaded, stop loading
        
      } catch (err) {
        setError(err.message || "An error occurred");
        console.log("error",err);
        setLoading(false);
      }
      finally {
        setLoading(false);
        
      }
    };

    fetchData();
  }, [sessionId,isLoaded,user,isSignedIn]);

  if (loading) {
   
    return <div>Loading...</div>; // Optionally, show loading state while checking if the user is loaded
  }

  // If there is an error, return an error message
  if (error) {
    if (error === "No session found") {
      return <Navigate to="/login" />;
    }
    return <div>Error: {error}</div>;
  }

if(userData){
  // If the user is not signed in or doesn't have the proper role, redirect to login  !isSignedIn || !userData ||
  if (!roles.includes(userData?.user_role)) {
    localStorage.clear(); 
    if (userData.user_role == "admin") {
      return <Navigate to="/admin" />;
    } else if (userData.user_role == "user") {
      return <Navigate to="/user" />;
    }
    signOut()
    return <Navigate to="/login" />;
  }
}
  // If the user is signed in and has the proper role, render the protected component
  return <Component />;
};

export default ProtectedRoute;
