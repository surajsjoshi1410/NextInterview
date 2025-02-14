import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { getUserByClerkId } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function ValidationPage() {
  const { isSignedIn, user, isLoaded, sessionId } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // Only run the effect if the user is signed in and the user data has been loaded
    const apiCaller = async () => {
      console.log("isSignedIn", isSignedIn,"user",user,"isLoaded",isLoaded,"sessionId",sessionId);
      if (isSignedIn && isLoaded && user) {
        console.log("User:", user, "Session ID:", sessionId);
        
        try {
          const data = await getUserByClerkId(user.id);
          console.log(data.data);

          if (data.data.user.user_role === "user") {
            if (data.data.user.profile_status === true) {
              navigate("/user");
            } else {
              navigate("/personalInfo");
            }
          } else if (data.data.user.user_role === "admin") {
            navigate("/admin");
          }

        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    // Only call the API if the user is signed in and loaded
    if (isSignedIn && isLoaded) {
      apiCaller();
    }

  }, [isSignedIn, isLoaded, user, sessionId, navigate]); // Add dependencies to re-run the effect when values change

  // Optional: Show a loading indicator while the user data is being loaded
  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div>Validating...</div>
  );
}
