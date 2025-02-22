import React, { useState, useEffect, useRef } from "react";
import { RxArrowLeft } from "react-icons/rx";
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
  SubmitButton,
  ResendMessage,
} from "./Otp.styles";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [hiddenOtp, setHiddenOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    let newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    setHiddenOtp((prev) => {
      let newHidden = [...prev];
      newHidden[index] = value.substring(value.length - 1);
      return newHidden;
    });

    setTimeout(() => {
      setHiddenOtp((prev) => {
        let newHidden = [...prev];
        if (newOtp[index] !== "") newHidden[index] = "●";
        return newHidden;
      });
    }, 500);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      let newOtp = [...otp];
      let newHiddenOtp = [...hiddenOtp];
      newOtp[index] = "";
      newHiddenOtp[index] = "";
      setOtp(newOtp);
      setHiddenOtp(newHiddenOtp);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const [countdown, setCountdown] = useState(15);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResend = () => {
    if (canResend) {
      setCountdown(15);
      setCanResend(false);
    }
  };

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
  const [email, setEmail] = useState("");

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
    navigate("/loginPhone", { state: { flow: location.state.flow } });
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
    const otpCode = otp.join("");
    if (otpCode.trim().length === 0) {
      alert("Please enter the OTP code you received");
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
        if (verifications?.phoneNumber?.status === "verified") {
          // Successfully signed up & automatically signed in
          await setSignUpActive({ session: createdSessionId });
          alert("You Phone Number has been successfully verified!");
          navigate("/otpEmail", {
            state: {
              flow: "SIGN_UP",
              phoneNumber: phoneNumber,
              email: email,
            },
          });
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
            <RxArrowLeft className="back-icon" />
          </BackIcon>

          <OTPMessage>OTP has been sent to {phoneNumber}</OTPMessage>

          <OTPInputContainer>
            <label htmlFor="otp">Enter OTP</label>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={hiddenOtp[index]}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  style={{
                    width: "45px",
                    height: "45px",
                    textAlign: "center",
                    fontSize: "20px",
                    border: "1px solid #1A1C1E",
                    borderRadius: "5px",
                  }}
                />
              ))}
            </div>
          </OTPInputContainer>

          <ResendMessage onClick={handleResend} disabled={!canResend}>
            {canResend ? (
              <a className="resendotp">Resend OTP</a>
            ) : (
              <>
                Resend OTP in <span>{countdown} secs</span>
              </>
            )}
          </ResendMessage>

          <SubmitButton onClick={handleVerifyOTP}>Submit</SubmitButton>
        </Section>
      </Container>
    </>
  );
};

export default Otp;
