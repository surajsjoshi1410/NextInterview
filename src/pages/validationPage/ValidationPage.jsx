import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import { getUserByClerkId } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function ValidationPage() {
     const { isSignedIn, user, isLoaded } = useUser();
     const navigate=useNavigate();
     useEffect(() => {
        const apiCaller=async()=>{
            if (isSignedIn && isLoaded) {
                console.log(user);
                const data = await getUserByClerkId(user.id);
                console.log(data.data);
                if(data.data.user_role === "user") {
                    navigate("/user")
                }else if(data.data.user_role === "admin") {
                    navigate("/admin")
                }
 
           }

        }
        apiCaller();
         
     })


  return (
    <div>Validating</div>
  )
}
