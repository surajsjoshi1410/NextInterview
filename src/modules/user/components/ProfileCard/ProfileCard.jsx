import React, { useState, useRef, useEffect } from "react";
import { ProfileCardWrapper } from "./ProfileCard.styles";
import { Clerk } from "@clerk/clerk-js";
import { useUser } from "@clerk/clerk-react";
import {
  createUserProfile,
  getUserByClerkId,
  getUserQuestionariesByUserId,
  updateUser,
} from "../../../../api/userApi";

const ProfileCard = () => {
  const clerk = new Clerk(
    "pk_test_bW9kZXN0LW11ZGZpc2gtMTguY2xlcmsuYWNjb3VudHMuZGV2JA"
  );
  const [profileFile, setProfileFile] = useState(null);
  const [userId, setUserId] = useState(null);
  const { isSignedIn, user, isLoaded } = useUser();
  const loaderFunction = async () => {
    await clerk.load();
  };
  loaderFunction();
  console.log("user", user);
  const [formData, setFormData] = useState({});
  const [imageUrl, setImageUrl] = useState(
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
  );
  const imageInputRef = useRef(null);

  useEffect(() => {
    const apiCaller = async () => {
      const response = await getUserByClerkId(user.id);
      setUserId(response.data.user._id);
      console.log("response", response);
      const questionariesResponse = await getUserQuestionariesByUserId(
        response.data.user._id
      );
      console.log("questionariesResponse", questionariesResponse);
      setFormData({
        username: response.data.user.user_name,
        email: response.data.user.user_email,
        linkedIn: response.data.user.user_linkedin_profile_link,
        phone: response.data.user.user_phone_number,
        experience: questionariesResponse.data.data_experience_response,
        profilePhoto: response.data.clerkUserData.imageUrl,
      });
    };
    apiCaller();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageClick = () => {
    imageInputRef.current.click();
  };
  const handleImageChange = async (e) => {
    console.log("function Called", e);
    const file = e.target.files[0];
    console.log("file", file);
    setProfileFile(file);
    if (file && file.type.startsWith("image/")) {
      //   setButtonDisabled(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        // setModuleImage(reader.result);
        setFormData({ ...formData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
    }
  };
  const handleSave = async () => {
    console.log("formData", formData);
    console.log("profileFile", profileFile);
    const formDataSub = new FormData();
    console.log("profileFile", profileFile);
    formDataSub.append("clerk_id", user.id);
    formDataSub.append("user_name", formData.username);
    if (profileFile) {
      formDataSub.append("user_profile_pic", profileFile);
    }

    formDataSub.append("user_Phone_number", formData.phone);
    formDataSub.append("user_email", formData.email);
    const data = await updateUser(formDataSub);
    const dataProfile = await createUserProfile({
      user_linkedin_profile_link: formData.linkedIn,
      data_experience_response: formData.experience,
      user_id: userId,
    });
  };
  return (
    <ProfileCardWrapper>
      {formData.profilePhoto && (
        <div className="profile-container">
          <div className="profile-header">
            <h2 className="profile-title">Basic Info</h2>

            {/* Profile Photo Section */}
            <div className="profile-photo-section">
              <h3 className="profile-photo-title">Profile Photo</h3>
              <img
                src={formData.profilePhoto}
                alt="Profile"
                className="profile-photo"
              />
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                style={{ display: "none" }}
                onChange={(e) => {
                  handleImageChange(e);
                }}
              />
              <button className="change-photo-btn" onClick={handleImageClick}>
                Change photo
              </button>
            </div>
          </div>
          {/* Form Fields */}
          <div className="profile-content">
            <div className="form-fields">
              <div className="form-group">
                <label>User name</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>User mail ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Linked profile link</label>
                <input
                  type="text"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Years of experience in data science</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>

              {/* Save Button */}
              <div className="save-btn-container">
                <button className="save-btn" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ProfileCardWrapper>
  );
};

export default ProfileCard;
