import React, { useState, useEffect } from "react";
import {
  Container,
  StatCard,
  StatLabel,
  StatValue,
  Divider,
} from "./SupportQueryStats.styles";
import { getSupportQueryStats } from "../../../../../api/supportQueryApi";
const SupportQueryStats = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getSupportQueryStats();
        setStats(response);
        console.log("Response", response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);
  if (loading) {
    return <div style={{ textAlign: "center" }}>Fetching Statistics</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <StatCard>
        <StatLabel>Total Queries</StatLabel>
        <StatValue>{stats.data.totalQueries}</StatValue>
      </StatCard>
      <Divider />
      <StatCard>
        <StatLabel>Open Queries</StatLabel>
        <StatValue>{stats.data.openQueries}</StatValue>
      </StatCard>
      <Divider />
      <StatCard>
        <StatLabel>Solved Queries</StatLabel>
        <StatValue>{stats.data.solvedQueries}</StatValue>
      </StatCard>
      <Divider />
      <StatCard>
        <StatLabel>Avg. Resolution Time</StatLabel>
        <StatValue>{stats.data.avgTimeToSolve}</StatValue>
      </StatCard>
    </Container>
  );
};

export default SupportQueryStats;
