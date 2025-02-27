import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  FormSection,
  Form,
  FormField,
  Label,
  Input,
  Button,
  BackIcon,
} from "./CompaniesPlan.styles";
import logo from "../../../assets/Logo.png";
import { useNavigate } from "react-router";
import { RxArrowLeft } from "react-icons/rx";
import { getCompanies } from "../../../api/comapniesApi";
import { getDesignations } from "../../../api/designationApi";
import { getInterviewRounds } from "../../../api/interviewRoundApi";
import Select from "react-select";
import { useUser } from "@clerk/clerk-react";
import { getJobById, getJobs } from "../../../api/jobApi";
import { createUserProfile, getUserByClerkId } from "../../../api/userApi";
import HeaderWithLogo from "../../../components/HeaderWithLogo/HeaderWithLogo";

const CompaniesPlan = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [selectedInterview, setSelectedInterview] = useState("");
  const [comapnyData, setCompanyData] = useState([]);
  const [designationData, setDesignationData] = useState([]);
  const [interviewData, setInterviewData] = useState([]);
  const [interviewDate, setInterviewDate] = useState([]);
  const navigate = useNavigate();
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const apiCaller = async () => {
      const data = await getCompanies();
      setCompanyData(data.data);
      const desgnation = await getDesignations();
      setDesignationData(desgnation.data);
      const interviewRound = await getInterviewRounds();
      setInterviewData(interviewRound);
    };
    apiCaller();
  }, []);

  const handleCompanySelect = (company) => {
    setSelectedCompany(company.value);
  };
  const handleDesignationSelect = (designation) => {
    setSelectedDesignation(designation.value);
  };

  const handleInterviewSelect = (interview) => {
    setSelectedInterview(interview.value);
  };
  const handleGoBack = () => {
    navigate("/question4");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected Company:", selectedCompany);
    console.log("Selected Designation:", selectedDesignation);
    console.log("Selected Interview:", selectedInterview);
    console.log("Interview Date:", interviewDate);
    const data = await getUserByClerkId(user.id);

    const subisstionData = {
      company: selectedCompany,
      designation: selectedDesignation,
      interviewRound: selectedInterview,
      interviewDate: interviewDate,
    };
    console.log("data", data);
    const submissionData = {
      user_id: data.data.user._id,
      data_interview_scheduled_response: subisstionData,
      // profile_status:true
    };
    await createUserProfile(submissionData);

    navigate("/question7");
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

  const interviewRoundOptions = interviewData.map((interview) => ({
    value: interview._id,
    label: interview.roundName,
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

  return (
    <>
      <HeaderWithLogo />

      <Container>
        <BackIcon onClick={handleGoBack}>
          <RxArrowLeft className="BackIcon" />
        </BackIcon>

        <FormSection>
          <Title>Tell us about your Interview Schedule</Title>

          <Form>
            <FormField>
              <Label>Company Name</Label>
              <Select
                options={companyOptions}
                onChange={handleCompanySelect}
                placeholder="Select Company Name"
                value={companyOptions.find(
                  (option) => option.value === selectedCompany
                )}
                styles={customStyles}
              />
            </FormField>

            <FormField>
              <Label>Date of Interview (Optional)</Label>
              <Input
                type="date"
                value={interviewDate}
                onChange={(e) => setInterviewDate(e.target.value)}
              />
            </FormField>

            <FormField>
              <Label>Role type</Label>
              <Select
                options={designationOptions}
                onChange={handleDesignationSelect}
                placeholder="Select Role"
                styles={customStyles}
              />
            </FormField>

            <FormField>
              <Label>Round type</Label>
              <Select
                options={interviewRoundOptions}
                onChange={handleInterviewSelect}
                placeholder="Select Round"
                styles={customStyles}
              />
            </FormField>

            <Button type="submit" onClick={handleSubmit}>
              Next
            </Button>
            <Button
              secondary
              onClick={() => {
                navigate("/question7");
              }}
            >
              Not scheduled yet
            </Button>
          </Form>
        </FormSection>
      </Container>
    </>
  );
};

export default CompaniesPlan;
