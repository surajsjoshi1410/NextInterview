import React from "react";
import { Container } from "./SupportQuery.styles";
import SupportQueryStats from "../../components/SupportQueryComponents/SupportQueryStats/SupportQueryStats";
import SupportQueryListView from "../../components/SupportQueryComponents/SupportQueryListView/SupportQueryListView";

const SupportQuery = () => {
  return (
    <Container>
      {/* Support Query Statistics Section */}
      <SupportQueryStats />
      
      {/* Support Query List View Section */}
      <SupportQueryListView/>
    </Container>
  );
};

export default SupportQuery;
