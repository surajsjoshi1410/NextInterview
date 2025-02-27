import React, { useState } from "react";
import {
  Container,
  FormSection,
  Heading,
  Form,
  Input,
  Button,
  AlternativeLogin,
  LinkedInButton,
  Footer,
  Signupage,
} from "../SignUp/SignUp.styles";
import signup from "../../assets/login&signupimage.svg";
import google from "../../assets/google.png";
import { Link, useNavigate } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { PiEyeLight } from "react-icons/pi";
import { IoEyeOffOutline } from "react-icons/io5";

// Import the new header component
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import {
  useSignIn,
  useSignUp,
  useAuth,
  useClerk,
  UserProfile,
  UserButton,
} from "@clerk/clerk-react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { openSignUp } = useClerk();

  const {
    isLoaded: signUpLoaded,
    signUp,
    setActive: setSignUpActive,
  } = useSignUp();

  // If false, user is not authenticated

  /**
   * Toggles the visibility of the password field.
   * @returns {void}
   */
  const togglePasswordVisibility = async () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const fullPhoneNumber = `+91${phoneNumber.trim()}`;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone Number:", fullPhoneNumber);

    const datas = await signUp.create({
      phoneNumber: fullPhoneNumber,
      password: password,
      emailAddress: email,
      phone_number: fullPhoneNumber,
      // username: username,
      email_address: email,
    });
    console.log("datas", datas);
    const data = await signUp.preparePhoneNumberVerification({
      strategy: "phone_code",
    });
    console.log("data", data);
    const data2 = await signUp.prepareEmailAddressVerification({
      strategy: "email_code",
    });
    console.log("data2", data2);
    alert("Sign-up OTP has been sent to your phone number.");
    // Navigate to /otp with state
    navigate("/otp", {
      state: {
        flow: "SIGN_UP",
        phoneNumber: fullPhoneNumber,
        email: email,
      },
    });
    // console.log('Email:', email);
    // console.log('Password:', password);
  };
  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    try {
      // console.log("handleGoogleSignUp");
      const data = await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: window.location.origin + "/signup", // Optional
        redirectUrlComplete: window.location.origin + "/verification", // Where to go after successful sign-up
      });
      console.log("data", data);
    } catch (err) {
      console.error("Google Sign-Up Error:", err);
    }
  };

  const handleLinkedInSignUp = async () => {
    try {
      //  openSignUp( {
      //    strategy: 'oauth_linkedin_oidc',
      //  })
      // const popup = window.open('', 'linkedinPopup', 'width=600,height=600');
      const data = await signUp.authenticateWithRedirect({
        strategy: "oauth_linkedin_oidc",
        redirectUrl: window.location.origin + "/signup",
        redirectUrlComplete: window.location.origin + "/verification",
      });
      console.log("data", data);
    } catch (err) {
      console.error("LinkedIn Sign-Up Error:", err);
      alert("LinkedIn sign-up failed. Check console for details.");
    }
  };
  return (
    <Container>
      <HeaderWithLogo />
      <UserButton />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FormSection>
          <Heading>Welcome to Next Interview</Heading>
          <Form onSubmit={handleFormSubmit}>
            {/* <Input>
              <label>User Name</label>
              <input
                type="text"
                placeholder="Enter your userName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Input> */}
            <Input>
              <label>Phone Number</label>
              <input
                type="tel"
                inputMode="numeric"
                pattern="\d{10}"
                placeholder="Enter your phone number"
                value={phoneNumber}
                maxLength={10}
                onChange={(e) => {
                  const onlyNumbers = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                  setPhoneNumber(onlyNumbers);
                }}
              />
            </Input>
            <Input>
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input>
            <Input>
              <label>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? (
                    <IoEyeOffOutline
                      style={{ fontSize: "20px", marginTop: "5px" }}
                    />
                  ) : (
                    <PiEyeLight
                      style={{ fontSize: "20px", marginTop: "5px" }}
                    />
                  )}
                </button>
              </div>
            </Input>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Link
                to="/forgot-password"
                style={{
                  color: "#007bff",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                Forgot Password ?
              </Link>
            </div>

            <Button type="submit">Sign Up</Button>

            <AlternativeLogin></AlternativeLogin>
            <AlternativeLogin>
              <button onClick={handleGoogleSignUp}>
                <img
                  src={google}
                  alt="Google Logo"
                  style={{ height: "20px", marginRight: "10px" }}
                />
                Sign up with Google
              </button>

              <LinkedInButton>
                <button onClick={handleLinkedInSignUp}>
                  <FaLinkedin style={{ color: "#0076B2" }} /> Sign up with
                  LinkedIn
                </button>
              </LinkedInButton>
            </AlternativeLogin>
          </Form>

          <Footer>
            By signing in, I agree to Next Interview's{" "}
            <a href="/privacy-policy">Privacy Policy </a>
            and <a href="/terms">Terms of Service</a>.
          </Footer>
        </FormSection>

        <Signupage>
          <img src={signup} alt="Sign Up Illustration" />
        </Signupage>
      </div>
    </Container>
  );
};

export default SignUpPage;
