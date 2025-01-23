import React, { useEffect, useState } from "react";
import Sidebar from "../../../../components/admin/Sidebar/Sidebar";
import { ContentWrapper } from "../../../../components/admin/Sidebar/Sidebar.styles";
import LearningModulesStats from "../../components/Learningmodulescomponents/LearningModulesStats/Learningmodulesstats";
import LearningModulesListView from "../../components/Learningmodulescomponents/LearningModulesListView/Learningmoduleslistview";
// import { Header } from "../../components/Learningmodulescomponents/LearningModulesStats/Learningmodulesstats.styles";
import Header from "../../../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { getModule } from "../../../../api/addNewModuleApi";
const LearningModules = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const[modules,setModules]=useState([])
  // let modules1;
  useEffect(() => {
    const apiCaller= async()=>{
      const data= await getModule()
      console.log("data",data)
      const response= data.data.map((item)=>{
        return({
          title: item.moduleName, topics: item.topicData.length||0
        })
      })
      setModules(response)
    }
    apiCaller();
    
  }, [])
  
  //rajatgit

  // const modules = [
  //   { title: "Diagnosing and Investigating Metrics", topics: 5 },
  //   { title: "Diagnosing and Investigating Metrics", topics: 5 },
  //   { title: "Diagnosing and Investigating Metrics", topics: 5 },
  //   { title: "Diagnosing and Investigating Metrics", topics: 5 },
  // ];

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      {/* <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} /> */}

      {/* Content */}
      <ContentWrapper isExpanded={isExpanded}>
        {/* <Header/> */}
        {/* <h2>Learning Modules</h2> */}
        <LearningModulesStats />
        <LearningModulesListView modules={modules} />
      </ContentWrapper>
      {/* <Outlet/> */}
    </div>
  );
};

export default LearningModules;
