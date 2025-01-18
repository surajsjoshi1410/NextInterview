import React from "react";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";
import { Question7Wrapper } from "./Question7.styles";
import { useNavigate } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Input } from "../../Login/Login.styles";

function Question7() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/question2");
  };

  return (
    <Question7Wrapper>
      <HeaderWithLogo />
      <div className="Container">
        <div className="BackIcon" onClick={handleGoBack}>
          <IoIosArrowRoundBack />
        </div>
        <div className="Title">
          Companies you are planning to interview with
        </div>
        <div className="Form">
          <label className="Label">Company Name</label>
          <select className="Dropdown">
            <option value="" disabled selected>
              Select Company name
            </option>
            <option value="Amazon">Amazon</option>
            <option value="Flipkart">Flipkart</option>
            <option value="Google">Google</option>
          </select>

          <label className="Label">Role</label>
          <select className="Dropdown">
            <option value="" disabled selected>
              Select Role
            </option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
          <label className="label">What went well?</label>

          <button className="NextButton">Next</button>
          <button className="SkipButton">Skip</button>
        </div>
      </div>
    </Question7Wrapper>
  );
}

export default Question7;
