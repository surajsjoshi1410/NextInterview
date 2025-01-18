import React from "react";
import { AccountCreatedWrapper } from "./AccountCreated.styles";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import Completed from "../../assets/Lottie/Animation - 1737179105636.json";
// import { useLottie } from "lottie-react";
import Lottie from "lottie-react";
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from "react-router-dom";
import { createUserProfile, getUserByClerkId } from "../../api/userApi";

function AccountCreated() {
  const { isSignedIn, user, isLoaded } = useUser();
  const navigate= useNavigate();

  const handleClick = async() => {
     const data = await getUserByClerkId(user.id);
        const submissionData = {
          user_id: data.data._id,
          profile_status:true
        }
        const responseData = await createUserProfile(submissionData);
        console.log("data", responseData);
        navigate("/user");
    
  };
  return (
    <AccountCreatedWrapper>
      <HeaderWithLogo />
      <div className="Container">
        <Lottie
          className="Lottie"
          animationData={Completed}
          loop={true}
          style={{ width: "60%", height: "20%" }}
        />
        <div className="Heading">Account Created Successfully</div>
        <div className="SubHeading">
          You can now access our vast data science Library
        </div>{" "}
        <div className="Button" onClick={handleClick}>Go to Homepage</div>
      </div>
    </AccountCreatedWrapper>
  );
}

export default AccountCreated;
