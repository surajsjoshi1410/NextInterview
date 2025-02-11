import React, { useState } from 'react'
import { ProfileUserWrapper } from './ProfileUser.styles'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import UserSubscriptionInfo from '../../components/UserSubscriptionInfo/UserSubscriptionInfo'
import UserPastInterviews from '../../components/UserPastInterviews/UserPastInterviews'
import { useUser } from '@clerk/clerk-react'
import { updatePassword } from '../../../../api/userApi'

export default function ProfileUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
    const { isSignedIn, user, isLoaded } = useUser()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleClose = () => {
    setIsOpen(false);
    // Optionally clear fields: setPasswords({oldPassword:'', newPassword:'', confirmPassword:''});
  };

  const handleResetPassword = async () => {
    // Perform validation or API call here
    console.log("Old:", passwords.oldPassword);
    console.log("New:", passwords.newPassword);
    console.log("Confirm:", passwords.confirmPassword);
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    const response = await updatePassword({ clerk_id: user.id, oldPassword:  passwords.oldPassword, newPassword: passwords.confirmPassword });
    console.log("response", response);
    alert("Password reset Successfull !");
    handleClose();
  };
  return (
    <ProfileUserWrapper>
      <ProfileCard />
      <UserSubscriptionInfo />
      <UserPastInterviews />
      <div className='password-reset-container'>
        <button className='password-reset-button' onClick={() => setIsOpen(true)}>Reset Password</button>
      </div>
      {isOpen && (
        <div className="password-reset-modal-overlay">
          <div className="password-reset-modal-content">
            <div className="password-reset-modal-content-details">


              <button className="password-reset-close-modal" onClick={handleClose}>
                &times;
              </button>

              <h2 className="password-reset-modal-title">Reset Password?</h2>
              <p className="password-reset-modal-subtext">
                Password must be alphanumeric and contain at least 8 characters.
              </p>

              <label className="password-reset-modal-label">Old Password</label>
              <input
                type="password"
                placeholder="Enter your current password"
                name="oldPassword"
                value={passwords.oldPassword}
                onChange={handleInputChange}
                className="password-reset-modal-input"
              />

              <label className="password-reset-modal-label">New Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handleInputChange}
                className="password-reset-modal-input"
              />

              <label className="password-reset-modal-label">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your new password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handleInputChange}
                className="password-reset-modal-input"
              />

              <button className="password-reset-modal-reset-btn" onClick={handleResetPassword} disabled={passwords.newPassword === "" && passwords.confirmPassword === "" && passwords.oldPassword === ""}>
                Reset Password
              </button>
            </div>
          </div>
        </div>
      )}
    </ProfileUserWrapper>

  )
}
