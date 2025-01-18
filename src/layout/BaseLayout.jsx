import React, { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { PageWrapper, ContentWrapper } from "./BaseLayout.style";
import { useAuth } from "@clerk/clerk-react";

const BaseLayout = () => {

  const { getToken } = useAuth()
  useEffect(() => {

      const apiallert = async () => {
          const token = await getToken()
          const data = await fetch(
'http://localhost:3000/user/getUsers',
              {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                      mode: 'cors',
                  },
              }

          )
          const user = await( await data.json())
          console.log(user)
      }
      apiallert();
  }, []);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <PageWrapper>
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <ContentWrapper isExpanded={isExpanded}>
        rajat
        <Outlet />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default BaseLayout;
