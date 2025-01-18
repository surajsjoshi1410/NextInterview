import React from "react";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";
import { Question6Wrapper } from "./Question6.styles";
import { useNavigate } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";

function Question6() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/question2");
  };

  return (
    <Question6Wrapper>
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

          <div className="Selected">
            Selected – 3
            <div className="SelectedList">
              <img
                className="image"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Amazon"
                height="30px"
              />
              <img
                className="image"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Amazon"
              />
              <img
                className="image"
                src="https://th.bing.com/th/id/OIP.K0SmXuxU9qfUQf_ccYJQ_AHaHa?rs=1&pid=ImgDetMain"
                alt="Amazon"
              />
            </div>
          </div>

          <button className="NextButton">Next</button>
          <button className="SkipButton">Skip</button>
        </div>
      </div>
    </Question6Wrapper>
  );
}

export default Question6;
