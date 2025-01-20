import React, { useState } from 'react';
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
} from '../SignUp/SignUp.styles';
import signup from '../../assets/signup.png';
import google from '../../assets/google.png';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash, FaLinkedin, FaMobileAlt } from 'react-icons/fa';

// Import the new header component
import HeaderWithLogo from '../../components/HeaderWithLogo/HeaderWithLogo';
import { useSignIn, useSignUp, useAuth, useClerk, UserProfile, UserButton } from "@clerk/clerk-react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
      alert('Please fill in all fields.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', fullPhoneNumber);


    const datas = await signUp.create({
      phoneNumber: fullPhoneNumber,
      password: password,
      emailAddress: email,
      phone_number: fullPhoneNumber,
      // username: username,
      email_address: email
    });
    console.log("datas", datas);
    const data=await signUp.preparePhoneNumberVerification({
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
  const handleGoogleSignUp = async () => {
    try {
      await signUp.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: window.location.origin + '/',  // Optional
        redirectUrlComplete: window.location.origin + '/', // Where to go after successful sign-up
      });
    } catch (err) {
      console.error('Google Sign-Up Error:', err);
    }
  };

  const handleLinkedInSignUp = async () => {
    try {
      //  openSignUp( {
      //    strategy: 'oauth_linkedin_oidc',
      //  })
      // const popup = window.open('', 'linkedinPopup', 'width=600,height=600');
      const data = await signUp.authenticateWithRedirect({
        strategy: 'oauth_linkedin_oidc',
        redirectUrl: window.location.origin + '/',
        redirectUrlComplete: window.location.origin + '/',
      });
      console.log("data", data);
    } catch (err) {
      console.error('LinkedIn Sign-Up Error:', err);
      alert('LinkedIn sign-up failed. Check console for details.');
    }
  };
  return (
    <Container>
      <HeaderWithLogo />
      <UserButton />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
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
                placeholder="Enter your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Input>
            <Input>
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input>
            <Input>
              <label>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </Input>


            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <label htmlFor="rememberMe" style={{ fontSize: '0.9rem' }}>
                <input id="rememberMe" type="checkbox" /> Remember Me
              </label>
              <Link to="/forgot-password" style={{ color: '#007bff', fontSize: '0.9rem' }}>
                Forgot Password
              </Link>
            </div>

            <Button type="submit">Sign Up</Button>


            <AlternativeLogin>
            <Link to="/loginPhone" state={{flow: "SIGN_UP"}}>
              <button>
                <FaMobileAlt /> SignUp in with Mobile
              </button>
            </Link>
          </AlternativeLogin>
          <AlternativeLogin>
            <button onClick={handleGoogleSignUp}>
              <img src={google} alt="Google Logo" style={{ height: '20px', marginRight: '10px' }} />
              SignUp in with Google
            </button>


            <LinkedInButton>
              <button onClick={handleLinkedInSignUp}>
                <FaLinkedin /> SignUp in with LinkedIn
              </button>
            </LinkedInButton>
          </AlternativeLogin>
          </Form>
         

          <Footer>
            By signing in, I agree to Next Interview's{' '}
            <a href="/privacy-policy">Privacy Policy</a>
            <br />
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
