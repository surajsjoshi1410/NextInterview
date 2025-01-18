import React from "react";
import {
  Container,
  StatCard,
  StatLabel,
  StatValue,
  Divider,
} from "./SupportQueryStats.styles";

const SupportQueryStats = () => {
  const stats = {
    totalQueries: 1501,
    openQueries: 15,
    resolvedQueries: 135,
    avgResolutionTime: "2h",
  };

  return (
    <Container>
      <StatCard>
        <StatLabel>Total Queries</StatLabel>
        <StatValue>{stats.totalQueries}</StatValue>
      </StatCard>
      <Divider />
      <StatCard>
        <StatLabel>Open Queries</StatLabel>
        <StatValue>{stats.openQueries}</StatValue>
      </StatCard>
      <Divider />
      <StatCard>
        <StatLabel>Resolved Queries</StatLabel>
        <StatValue>{stats.resolvedQueries}</StatValue>
      </StatCard>
      <Divider />
      <StatCard>
        <StatLabel>Avg. Resolution Time</StatLabel>
        <StatValue>{stats.avgResolutionTime}</StatValue>
      </StatCard>
    </Container>
  );
};

export default SupportQueryStats;
