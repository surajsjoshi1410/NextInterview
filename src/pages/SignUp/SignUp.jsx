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
import { Link } from 'react-router';
import { FaEye, FaEyeSlash, FaLinkedin, FaMobileAlt } from 'react-icons/fa';

// Import the new header component
import HeaderWithLogo from '../../components/HeaderWithLogo/HeaderWithLogo';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Toggles the visibility of the password field.
   * @returns {void}
   */
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
  };

  return (
    <Container>
      <HeaderWithLogo />
<div style={{
  display: 'flex',
  flexDirection: 'row',
}}>
      <FormSection>
        <Heading>Welcome to Next Interview</Heading>
        <Form onSubmit={handleFormSubmit}>
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

          <Button type="submit">Log In</Button>

          <AlternativeLogin>
            <Link to="/login">
              <button>
                <FaMobileAlt /> Log in with Mobile
              </button>
            </Link>
            <button>
              <img src={google} alt="Google Logo" style={{ height: '20px', marginRight: '10px' }} />
              Log in with Google
            </button>
          </AlternativeLogin>

          <LinkedInButton>
            <button>
              <FaLinkedin /> Log in with LinkedIn
            </button>
          </LinkedInButton>
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

export default SignUp;
