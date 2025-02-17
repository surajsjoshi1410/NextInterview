import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { getUserByClerkId, getUserBySessionId } from "../api/userApi";
import { useClerk } from '@clerk/clerk-react';

const ProtectedRoute = ({ component: Component, roles }) => {
  const { isSignedIn, isLoaded, sessionId, } = useUser();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
    const { signOut } = useClerk();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionVar = JSON.parse(localStorage.getItem("sessionId"));
        if (!sessionVar) {
          setError("No session found");
          return;
        }

        // Fetch user ID based on session ID
        const userId = await getUserBySessionId({ sessionId: sessionVar });
        if (!userId?.userId) {
          setError("Invalid user data");
          return;
        }

        // Fetch user data based on user ID
        const userResponse = await getUserByClerkId(userId.userId);
        setUserData(userResponse.data.user);

        // After data is loaded, stop loading
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchData();
  }, [sessionId]);

  if (loading) {
    return <div>Loading...</div>; // Optionally, show loading state while checking if the user is loaded
  }

  // If there is an error, return an error message
  if (error) {
    return <div>Error: {error}</div>;
  }
  

  // If the user is not signed in or doesn't have the proper role, redirect to login
  if (!isSignedIn || !userData || !roles.includes(userData.user_role)) {
     signOut()
    return <Navigate to="/login" />;
  }

  // If the user is signed in and has the proper role, render the protected component
  return <Component />;
};

export default ProtectedRoute;
