import styled from "styled-components";
import theme from "../../../theme/Theme";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
height: 100vh;
  background-color: ${theme.colors.light};

  @media (max-width: 768px) {
    padding: 10px;
    
  }

  @media (max-width: 480px){
    padding: 10px;
    justify-content: unset;
    }
`;

export const SkipButton = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.disabled ? `${theme.colors.primary}`:`${theme.colors.light}` )} !important;
  // background-color:${theme.colors.light}!important;
  color: ${theme.colors.black}; 
  border: 1px solid ${theme.colors.black} !important;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#cccccc" : "#28a745")};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 45px;
    margin-top: 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 12px;
  }`
  ;

export const BackIcon = styled.div`
//  position: absolute;
//   top: 190px; /* Adjust to place it near the top on mobile */
//   left: 635px;

  cursor: pointer;
  font-size: 24px;
 color:${theme.colors.text};
,,
  @media (max-width: 768px) {
    top: 200px;
    left: 20px;
    font-size: 28px;
  }
`;


export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
 color:${theme.colors.text};
//   margin: 80px 0 20px 0;
//   margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
    // margin: 60px 0 15px 0;
//     margin-right: 130px !important;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    // margin: 40px 0 10px 0;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px;
  margin: 10px 20px 10px 0;
  border: 2px solid ${(props) => (props.$isSelected ? "#68c184" : "#cccccc")};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "#e8f5e9" : "#ffffff")};
//   transition: all 0.3s ease;

  &:hover {
    border-color:${theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 45px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    height: 40px;
    padding: 5px;
  }
`;

export const CirclePointer = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border: 2px solid ${(props) => (props.$isSelected ? "#68c184" : "#cccccc")};
  border-radius: 50%;
  background-color: ${theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &::after {
    content: "";
    width: ${(props) => (props.$isSelected ? "10px" : "0")};
    height: ${(props) => (props.$isSelected ? "10px" : "0")};
    background-color: ${(props) => (props.$isSelected ? "#68c184" : "transparent")};
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    margin-right: 15px;

    &::after {
      width: ${(props) => (props.$isSelected ? "8px" : "0")};
      height: ${(props) => (props.$isSelected ? "8px" : "0")};
    }
  }
`;

export const OptionLabel = styled.span`
  font-size: 16px;
  font-weight: ${(props) => (props.$isSelected ? "bold" : "normal")};
  color: ${(props) => (props.$isSelected ? "#28a745" : "#000000")};

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const NextButton = styled.button`
  margin-top: 30px;
 width:100%;
  height: 50px;
  background-color: ${(props) => (props.disabled ? "#68c184" : "#28a745")};
  color: ${theme.colors.light} ;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#f8f9fa" : "#28a745")};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 45px;
    // margin-top: 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 12px;
    width: 100%;
  }
`;


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;                          
  height: 100vh;    

  @media (max-width: 768px) {
    padding: 10px;
     }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;