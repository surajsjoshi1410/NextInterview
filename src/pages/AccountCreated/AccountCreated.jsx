import React from "react";
import { AccountCreatedWrapper } from "./AccountCreated.styles";
import HeaderWithLogo from "../../components/HeaderWithLogo/HeaderWithLogo";
import Completed from "../../assets/Lottie/Animation - 1737179105636.json";
// import { useLottie } from "lottie-react";
import Lottie from "lottie-react";

function AccountCreated() {
  return (
    <AccountCreatedWrapper>
      <HeaderWithLogo />
      <div className="Container">
        <Lottie
          className="Lottie"
          animationData={Completed}
          loop={true}
          style={{ width: "60%", height: "20%" }}
        />
        <div className="Heading">Account Created Successfully</div>
        <div className="SubHeading">
          You can now access our vast data science Library
        </div>{" "}
        <div className="Button">Go to Homepage</div>
      </div>
    </AccountCreatedWrapper>
  );
}

export default AccountCreated;
