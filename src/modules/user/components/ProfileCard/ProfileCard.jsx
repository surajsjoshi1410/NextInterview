import React, { useState, useRef } from "react";
import { ProfileCardWrapper } from "./ProfileCard.styles";
import { Clerk } from '@clerk/clerk-js'
import { useUser } from '@clerk/clerk-react'

const ProfileCard =  () => {
    const clerk = new Clerk("pk_test_bW9kZXN0LW11ZGZpc2gtMTguY2xlcmsuYWNjb3VudHMuZGV2JA")

     const { isSignedIn, user, isLoaded } = useUser()
     const loaderFunction=async()=>{
        await clerk.load()
     }
     loaderFunction();
     console.log("user", user);
    const [formData, setFormData] = useState({
        username: "Krishna Kumar",
        email: "krishna@samplemailid.com",
        linkedIn: "www.linkedin.krishna_kumar",
        phone: "+91 9999999999",
        experience: "3 years",
        profilePhoto:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    });
    const [imageUrl, setImageUrl] = useState("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg");
    const imageInputRef = useRef(null);
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
        if (file && file.type.startsWith("image/")) {

            //   setButtonDisabled(true);
            const reader = new FileReader();
            reader.onloadend = () => {
                // setModuleImage(reader.result);
                setFormData({ ...formData, profilePhoto: reader.result });
            };
            reader.readAsDataURL(file);

            //   const Url = await uploadFileToFirebase(file, "moduleImage");
            //   setImageUrl(Url);
            //   setButtonDisabled(false);
            //   setImageError("");
        } else {
            //   setModuleImage(null);
            //   setImageUrl(null);
            //   setImageError("Please select a valid image file.");
        }
    };
    return (
        <ProfileCardWrapper>
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
                            onChange={
                                (e) => {
                                    handleImageChange(e)
                                }}
                        />
                        <button className="change-photo-btn" onClick={handleImageClick}>Change photo</button>
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
                            <button className="save-btn">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
