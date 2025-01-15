import styled from "styled-components";
import theme from  "../../../theme/Theme";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-color: ${theme.colors.light};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: 15px;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.div`
  img {
    height: 50px;
  }

  @media (max-width: 768px) {
    img {
      height: 40px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const BackIcon = styled.div`
 
//   top: 230px; /* Adjust to place it near the top on mobile */
//   left: 635px;
  cursor: pointer;
  font-size: 24px;
  color: #000;

  @media (max-width: 768px) {
    top: 200px;
    left: 20px;
    font-size: 28px;
  }
`;


export const Title = styled.h1`
  font-size: 24px;
//   font-weight: bold;
  color:${theme.colors.text};
//   margin: 80px 0 20px 0;
//   margin-right: 110px;

@media (max-width: 768px) {
  font-size: 20px;
}

@media (max-width: 480px) {
  font-size: 16px;
}
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 50px;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid ${(props) => (props.$isSelected ? "#00b894" : "#cccccc")};
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? "#e8f5e9" : "#ffffff")};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.primary};
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
  border: 2px solid ${(props) => (props.$isSelected ? "#68c184" : "#f8f9fa")};
  border-radius: 50%;
  background-color: #ffffff;
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
  color: ${(props) => (props.$isSelected ? "#68c184" : "#000000")};

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const NextButton = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.disabled ? "#28a745" : "#68c184")};
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: none;
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
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.colors.light};
  font-family: Arial, sans-serif;
  padding: 0 15px; 
  @media (max-width: 480px) {
    padding: 0 10px;
    justify-content: unset;
    
  }
  /* Added padding for better responsiveness */
`;      