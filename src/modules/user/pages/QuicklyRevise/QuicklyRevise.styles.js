import styled from "styled-components";

export const Container = styled.div`
  display: flex;
//   height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const Image = styled.div`
  .rocket-launch {
    position: relative;
`;  


export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  line-height: 1;
`;
