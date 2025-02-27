import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
// import QRCode from "qrcode.react";  // You'll need to install `qrcode.react` package
import { useNavigate } from "react-router-dom";
import { QRCodeSVG } from 'qrcode.react';

const AddTOTP = () => {
    const { user } = useUser();
    const [qrCodeUrl, setQrCodeUrl] = useState(null);
    const [secret, setSecret] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [otpCode, setOtpCode] = useState(null);
    const [manageBtn, setManageBtn] = useState(false);
    const[enableQrCode, setEnableQrCode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTOTP = async () => {
            console.log(user);
            setLoading(true);
            setError(null);
            try {
                const response = await user.createTOTP();
                console.log("asdfghjkl", response);
                setQrCodeUrl(response.uri);
                setSecret(response.secret);
                setLoading(false);
            } catch (err) {
                if (err.errors[0].code === "totp_already_enabled") {
                    setManageBtn(true);
                    // setError("Authenticator is already added.");
                } else {
                    console.log("Error generating TOTP setup:", err.errors);
                    setError(` ${err.errors[0].message}`);
                }

                setLoading(false);
            }
        };

        fetchTOTP();
    }, [user]);

    const handleVerifyTOTP = async (code) => {
        try {
            if (!secret || !code) {
                setError("Both the secret and the OTP code are required.");
                return;
            }
            const data = await user.verifyTOTP({ secret, code });
            console.log("data", data);
            if (data) {
                alert("TOTP setup successful!");
                history.push("/manage-mfa"); // Redirect to MFA management page
            }
        } catch (err) {
            setError("Incorrect code or expired. Please try again.");
            console.error("Verification error:", err);
        }
    };
    const disableTOTP = async () => {
        try {
          await user.disableTOTP();
          window.location.reload();
          alert("TOTP Disabled Successfully");
        } catch (error) {
          console.error("Error disabling TOTP", error);
        }
      };

    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ marginLeft: "60px" }}>
            <h1>Setup TOTP (Authenticator App)</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {qrCodeUrl &&
             <QRCodeSVG  value={qrCodeUrl} />
             }


            {manageBtn ? <>
                <p> Authenticator is already added.</p>

                {
                    user.totpEnabled &&
                    (
                        <div>
                            <p>TOTP is enabled via Authenticator App.</p>
                            <button onClick={disableTOTP}>Disable TOTP</button>
                        </div>
                    )
                }
            </> : (
                <>
                    <p>Scan this QR code with your authenticator app (e.g., Google Authenticator, Authy).</p>
                    <input
                        type="text"
                        placeholder="Enter code from app"
                        onChange={(e) => setOtpCode(e.target.value)}
                    />
                    <button onClick={() => handleVerifyTOTP(otpCode)}>Verify</button>
                </>
            )


            }
        </div>
    );
};

export default AddTOTP;
