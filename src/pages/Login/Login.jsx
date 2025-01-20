import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignIn, useSignUp, useAuth } from "@clerk/clerk-react";
import { IoIosArrowRoundBack, IoMdArrowBack } from "react-icons/io";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
// import { IoIosArrowRoundBack } from "react-icons/io";

// import your styled components
import {
  Loginmobilewrapper,
  Subtitle,
  InputContainer,
  Label,
  Button,
} from "./Login.styles";
import { Input } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Clerk hooks
  const {
    isLoaded: signInLoaded,
    signIn,
    setActive: setSignInActive,
  } = useSignIn();
  const {
    isLoaded: signUpLoaded,
    signUp,
    setActive: setSignUpActive,
  } = useSignUp();
  const { isLoaded: authLoaded } = useAuth();

  // Local state
  const [phoneNumber, setPhoneNumber] = useState("");

  // Optional: you can check if Clerk is loaded
  if (!signInLoaded || !signUpLoaded || !authLoaded) {
    return <div>Loading Clerk...</div>;
  }

  const handleSendOTP = async () => {
    // Basic validation: check for 10 digits
    if (phoneNumber.trim().length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Format with +91 for India
    const fullPhoneNumber = `+91${phoneNumber.trim()}`;
    if (location.state.flow === "SIGN_UP") {
      console.log("flow", location.state.flow);
      try {
        await signUp.create({
          phoneNumber: fullPhoneNumber,
        });

        // Prepare phone verification for sign-up
        await signUp.preparePhoneNumberVerification({
          strategy: "phone_code",
        });

        alert("Sign-up OTP has been sent to your phone number.");

        // Navigate to /otp with state
        navigate("/otp", {
          state: {
            flow: "SIGN_UP",
            phoneNumber: fullPhoneNumber,
          },
        });
      } catch (signUpError) {
        console.log("Sign-up error:", signUpError);
        alert("Something went wrong while sending OTP. Please try again.");
      }
    } else if (location.state.flow === "SIGN_IN") {
      console.log("flow", location.state.flow);
      try {
        // 1) Try Sign In first
        await signIn.create({
          identifier: fullPhoneNumber,
          strategy: "phone_code",
        });

        // If we're here, user is found → flow = SIGN_IN
        alert("Sign-in OTP has been sent to your phone number.");

        // Navigate to /otp with state
        navigate("/otp", {
          state: {
            flow: "SIGN_IN",
            phoneNumber: fullPhoneNumber,
          },
        });
      } catch (error) {
        console.log("Sign-in error:", error);

       

      }
    }


  };

  const handleGoBack = () => {
    if (location.state.flow === "SIGN_UP") {
      navigate("/signup");
    } else if (location.state.flow === "SIGN_IN") {
      navigate("/login");
    }
  };

  return (
    <>
      <Loginmobilewrapper>
        <HeaderWithLogo />
        <div className="Container">
          <div className="BackIcon" onClick={handleGoBack}>
            <IoIosArrowRoundBack />
          </div>

          <div className="Title">Login with Mobile number</div>
          <Subtitle>OTP will be sent to your mobile number.</Subtitle>
          <div className="Form">
            <Label className="Label">Mobile Number</Label>

            <Input
              className="Input"
              type="tel"
              value={phoneNumber}
              placeholder="Enter your Mobile Number"
              onChange={(e) => {
                // Only allow digits (0-9)
                const re = /^[0-9\b]+$/;
                if (re.test(e.target.value) || e.target.value === "") {
                  // Limit to 10 digits
                  setPhoneNumber(e.target.value.slice(0, 10));
                }
              }}
            />
          </div>

          <Button className="Button" onClick={handleSendOTP}>
            Send OTP
          </Button>
        </div>
      </Loginmobilewrapper>
    </>
  );
};

export default Login;
