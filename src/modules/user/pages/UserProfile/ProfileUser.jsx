import React, { useState } from 'react'
import { ProfileUserWrapper } from './ProfileUser.styles'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import UserSubscriptionInfo from '../../components/UserSubscriptionInfo/UserSubscriptionInfo'
import UserPastInterviews from '../../components/UserPastInterviews/UserPastInterviews'

export default function ProfileUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleClose = () => {
    setIsOpen(false);
    // Optionally clear fields: setPasswords({oldPassword:'', newPassword:'', confirmPassword:''});
  };

  const handleResetPassword = () => {
    // Perform validation or API call here
    console.log("Old:", passwords.oldPassword);
    console.log("New:", passwords.newPassword);
    console.log("Confirm:", passwords.confirmPassword);
    alert("Password reset request sent!");
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

              <button className="password-reset-modal-reset-btn" onClick={handleResetPassword}disabled={passwords.newPassword ===""&& passwords.confirmPassword==="" && passwords.oldPassword===""}>
                Reset Password
              </button>
            </div>
          </div>
        </div>
      )}
    </ProfileUserWrapper>

  )
}
