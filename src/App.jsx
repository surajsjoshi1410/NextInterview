import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/Theme";
import BaseLayout from "./layout/BaseLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import QuestionPage4 from "./pages/Questions/Question4/Question4";
import Otp from "./pages/Otp/Otp";
import HeaderWithLogo from "./components/HeaderWithLogo/HeaderWithLogo";
import QuestionPage1 from "./pages/Questions/Question1/Question1";
import QuestionPage2 from "./pages/Questions/Question2/Question2";
import QuestionPage3 from "./pages/Questions/Question3/Question3";
import LearningModules from "./modules/admin/pages/Learning modules/Learningmodules";
import Userdetails from "./modules/admin/pages/User details/Userdetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
         <Route path="/question1" element={<QuestionPage1 />} />
         <Route path="/question2" element={<QuestionPage2 />} />
         <Route path="/question3" element={<QuestionPage3 />} />
          <Route path="/question4" element={<QuestionPage4 />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/learning" element={<LearningModules />} />
          <Route path="/Diagnosing-and-Investigating-Metrics" element={<Userdetails />} />
          

          <Route path="/" element={<BaseLayout>rajat</BaseLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );


}

export default App;
