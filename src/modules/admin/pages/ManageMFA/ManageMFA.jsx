import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const ManageMFA = () => {
  const { user } = useUser();
  const [showBackupCodes, setShowBackupCodes] = useState(false);
  const [backupCodes, setBackupCodes] = useState(null);

  useEffect(() => { 
    console.log("user", user   );  
  }, [user]);

  const generateBackupCodes = async () => {
    try {
      const response = await user.createBackupCode();
      setBackupCodes(response.codes);
      console.log("response", response);
    } catch (error) {
      console.error("Error generating backup codes", error);
    }
  };

 
  const disableTOTP = async () => {
    try {
      await user.disableTOTP();
      alert("TOTP Disabled Successfully");
    } catch (error) {
      console.error("Error disabling TOTP", error);
    }
  };
  if (!user) {
    return <p>You must be logged in to access this page.</p>;
  }

  return (
    <div style={{marginLeft:"60px"}}>
      <h1>Manage Multi-Factor Authentication (MFA)</h1>

      {/* If TOTP is enabled, show option to disable it */}
      {user.totpEnabled ? (
        <div>
          <p>TOTP is enabled via Authenticator App.</p>
          <button onClick={disableTOTP}>Disable TOTP</button>
        </div>
      ) : (
        <div>
          <p>TOTP is not enabled.</p>
          <Link to="/admin/manage-mfa/add">
            <button>Enable TOTP</button>
          </Link>
        </div>
      )}

      {/* Generate backup codes */}
      {user.backupCodeEnabled && user.twoFactorEnabled && (
        <div>
          <button onClick={generateBackupCodes}>Generate Backup Codes</button>
          {showBackupCodes && backupCodes && (
            <ul>
              {backupCodes.map((code, index) => (
                <li key={index}>{code}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageMFA;
