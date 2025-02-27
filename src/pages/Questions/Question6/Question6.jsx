import React, { useEffect, useState } from "react";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";
import { Question6Wrapper } from "./Question6.Styles";
import { useNavigate } from "react-router";
import { RxArrowLeft } from "react-icons/rx";
import { useUser } from "@clerk/clerk-react";
import { getJobById, getJobs } from "../../../api/jobApi";
import { createUserProfile, getUserByClerkId } from "../../../api/userApi";
import { getCompanies } from "../../../api/comapniesApi";
import { getDesignations } from "../../../api/designationApi";
import { getInterviewRounds } from "../../../api/interviewRoundApi";
import Select from "react-select";

function Question6() {
  const [comapnyData, setCompanyData] = useState([]);
  const [designationData, setDesignationData] = useState([]);
  const [interviewData, setInterviewData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [companyImageList, setCompanyImageList] = useState([]);
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const apiCaller = async () => {
      const data = await getCompanies();
      console.log("data", data);
      setCompanyData(data.data);
      const desgnation = await getDesignations();
      console.log("desgnation", desgnation);
      setDesignationData(desgnation.data);
      const interviewRound = await getInterviewRounds();
      console.log("interviewRound", interviewRound);
      setInterviewData(interviewRound);
    };
    apiCaller();
  }, []);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/question4");
  };
  const handleCompanySelect = (companies) => {
    setSelectedCompany(companies.map((company) => company.value));
    const datad = companies.map((company) => {
      return comapnyData.find((copm) => {
        if (copm._id === company.value) {
          return copm;
        }
      });
    });
    setCompanyImageList(datad);
    console.log("datad", datad);
  };
  const handleDesignationSelect = (designation) => {
    setSelectedDesignation(designation.value);
  };

  const companyOptions = comapnyData.map((company) => ({
    value: company._id,
    label: (
      <div style={{ display: "flex", alignItems: "center", color: "black" }}>
        <img
          src={company.company_image_url}
          alt={company.company_name}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        {company.company_name}
      </div>
    ),
  }));
  const designationOptions = designationData.map((desgnation) => ({
    value: desgnation._id,
    label: desgnation.designation_name,
  }));
  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "white",
      borderColor: "#ccc",
      borderRadius: "4px",
    }),
    singleValue: (base) => ({
      ...base,
      color: "black", // Change text color of selected value
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#3399cc" : "white",
      color: state.isSelected ? "white" : "black", // Change text color of options
      padding: "10px",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999, // Ensure the dropdown is above other elements
    }),
  };
  const handleNext = async () => {
    const data = await getUserByClerkId(user.id);
    const submissionData = {
      user_id: data.data.user._id,
      data_planned_interview_response: {
        companies: selectedCompany,
        designations: selectedDesignation,
      },
    };
    const responseData = await createUserProfile(submissionData);
    console.log("data", responseData);
    navigate("/question7");
  };

  return (
    <Question6Wrapper>
      <HeaderWithLogo />
      <div className="Container">
        <div className="BackIcon" onClick={handleGoBack}>
          <RxArrowLeft />
        </div>
        <div className="Title">Companies you plan to interview with</div>
        <div className="Form">
          <label className="Label">Company Name</label>
          <Select
            options={companyOptions}
            onChange={handleCompanySelect}
            placeholder="Select Company Name"
            value={companyOptions.find(
              (option) => option.value === selectedCompany
            )}
            styles={customStyles}
            isMulti
          />
          <label className="Label">Role</label>

          <Select
            options={designationOptions}
            onChange={handleDesignationSelect}
            placeholder="Select Role"
            styles={customStyles}
          />

          <div className="Selected">
            Selected – {selectedCompany ? selectedCompany.length : 0}
            <div className="SelectedList">
              {companyImageList &&
                companyImageList.map((company) => {
                  return (
                    <img
                      className="image"
                      // src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      src={company.company_logo}
                      alt="Amazon"
                      height="30px"
                    />
                  );
                })}
            </div>
          </div>

          <button className="NextButton" onClick={handleNext}>
            Next
          </button>

          <button
            className="anotherCompany"
            onClick={() => {
              navigate("/question7");
            }}
          >
            Not sure yet
          </button>
        </div>
      </div>
    </Question6Wrapper>
  );
}

export default Question6;
