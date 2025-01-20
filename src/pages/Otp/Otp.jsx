import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignIn, useSignUp } from "@clerk/clerk-react";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";

// import your styled components
import {
  Container,
  Section,
  BackIcon,
  OTPMessage,
  OTPInputContainer,
  OTPInput,
  SubmitButton,
  ResendMessage,
} from "./Otp.styles";

const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  const [otpCode, setOtpCode] = useState("");
  const [flow, setFlow] = useState(""); // "SIGN_IN" or "SIGN_UP"
  const [phoneNumber, setPhoneNumber] = useState("");
  const[email, setEmail] = useState("");

  // Extract flow + phoneNumber from react-router location.state
  useEffect(() => {
    if (location?.state) {
      setFlow(location.state.flow || "");
      setPhoneNumber(location.state.phoneNumber || "");
      setEmail(location.state.email || "");
    }
  }, [location.state]);

  // Wait until Clerk is loaded
  if (!signInLoaded || !signUpLoaded) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    // If user wants to change phone number, navigate back
    navigate("/loginPhone",{state:{flow:location.state.flow}});
  };

  // Only allow digits in the OTP field
  const handleKeyPress = (e) => {
    const isDigit = /[0-9]/.test(e.key);
    if (!isDigit) {
      e.preventDefault();
    }
  };

  // Verify OTP
  const handleVerifyOTP = async () => {
    if (otpCode.trim().length === 0) {
      alert("Please enter the OTP code you received.");
      return;
    }

    try {
      console.log("flow", flow);
      if (flow === "SIGN_IN") {

        // Attempt signIn
        const result = await signIn.attemptFirstFactor({
          strategy: "phone_code",
          code: otpCode,
        });

        if (result.status === "complete") {
          // Successfully signed in
          await setSignInActive({ session: result.createdSessionId });
          alert("You have successfully signed in!");
          navigate("/validation");
        } else {
          alert("Incorrect OTP. Please try again.");
        }
      } else if (flow === "SIGN_UP") {
        // Attempt signUp phone verification
        console.log("otpCode", otpCode);
        const attempt = await signUp.attemptPhoneNumberVerification({
          code: otpCode,
        });
        console.log("attempt", attempt);  

        const { verifications, status, createdSessionId } = attempt;

        // Check if signUp is complete
        if (
          verifications?.phoneNumber?.status === "verified"
        ) {
          // Successfully signed up & automatically signed in
          await setSignUpActive({ session: createdSessionId });
          alert("You Phone Number hasbeen successfully verified!");
          navigate("/otpEmail",
            {
              state: {
                flow: "SIGN_UP",
                phoneNumber: phoneNumber,
                email: email,
              },
            }
          );
        } else {
          alert("Incorrect OTP. Please try again. one");
        }
      } else {
        alert("Unknown flow. Please try again.");
      }
    } catch (error) {
      console.log("OTP verification error:", error);
      alert("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <>
      <HeaderWithLogo />
      <Container>
        <Section>
          <BackIcon
            onClick={handleGoBack}
            style={{
              borderRadius: "10%",
              border: "1px solid grey",
              padding: "8px",
            }}
          >
            <FaArrowLeft className="back-icon" />
          </BackIcon>

          <OTPMessage>OTP has been sent to {phoneNumber}.</OTPMessage>

          <OTPInputContainer>
            <label htmlFor="otp">Enter OTP</label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                width: "100%",
              }}
            >
              {/* Single input for OTP or multiple inputs – up to you */}
              <OTPInput
                id="otp"
                type="text"
                maxLength="6"
                placeholder="6-digit OTP"
                onKeyPress={handleKeyPress}
                onChange={(e) => setOtpCode(e.target.value)}
                style={{ width: "100%" }}
              />
              <SubmitButton onClick={handleVerifyOTP}>Submit</SubmitButton>
            </div>
          </OTPInputContainer>

          <ResendMessage>
            Resend OTP in <span>12 secs</span>{" "}
            {/* Implement your countdown or resend flow */}
          </ResendMessage>
        </Section>
      </Container>
    </>
  );
};

export default Otp;
