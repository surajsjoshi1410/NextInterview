import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  margin-left: ${(props) => (props.isExpanded ? "200px" : "60px")};
  padding: 20px;
  transition: margin-left 0.3s ease;
  overflow-y: auto;
  background-color: #f9f9f9; /* Optional */
`;
