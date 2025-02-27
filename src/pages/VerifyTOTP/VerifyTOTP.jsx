import React, { useState, useEffect } from 'react';
import { useUser,useSignIn, useSignUp  } from '@clerk/clerk-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserByClerkId, getUserBySessionId } from '../../api/userApi';

const VerifyTOTP = () => {
  const { user } = useUser();
  const [otpCode, setOtpCode] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location= useLocation();
  
    const {
      isLoaded: signInLoaded,
      signIn,
      setActive: setSignInActive,
    } = useSignIn();

  // Handle TOTP verification
  const handleVerifyTOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        console.log(user); 
        console.log("location",location);
      const verificationResponse = await  signIn.attemptSecondFactor({
        strategy: "totp",
        code: otpCode,
      });
      console.log("verificationResponse", verificationResponse);
      if (verificationResponse.status === "complete") {
        navigate("/validation", {
            state: {
              sessionId: verificationResponse.createdSessionId,
            },
          });
      } else {
        setError("Incorrect TOTP code. Please try again.");
      }
    } catch (err) {
      console.log(err);
      setError("Failed to verify the TOTP code. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!user) {
      // Redirect to login if no user is found
    //   history('/login');
    }
  }, [user, history]);

  return (
    <div style={{ marginLeft: "60px", padding: "20px" }}>
      <h1>Verify Your TOTP Code</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleVerifyTOTP}>
        <div>
          <label>Enter the code from your Authenticator app:</label>
          <input 
            type="text" 
            value={otpCode} 
            onChange={(e) => setOtpCode(e.target.value)} 
            placeholder="Enter OTP" 
            required 
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify Code'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyTOTP;
