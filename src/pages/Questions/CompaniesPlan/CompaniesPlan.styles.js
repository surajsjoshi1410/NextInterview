import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: rgb(255, 255, 255) !important;
  position: relative;
  max-height: 100vh; /* Full height to center the form */
  height: 70vh;
`;

export const BackIcon = styled.div`
  cursor: pointer;
  font-size: 16px;
  border: 1px solid grey;
  padding: 8px;
  border-radius: 10%;
  width: 20px;

  color: #000;

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    font-size: 28px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 1.5rem;
  color: #333;
  margin-top: 2rem;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 80vh; /* To center form */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  max-width: 450px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SelectOne = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormField = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 1rem;
  color: #555;
`;

export const CompanyIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0; /* Increased margin for better spacing */
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
  padding: 9px; /* Increased padding for a cleaner look */
  border-radius: 18px; /* Rounded corners for a modern feel */
  transition: all 0.3s ease;

  ${(props) =>
    props.selected &&
    css`
      border-color: #68c184; /* Highlight color for the selected icon */
      background-color: rgb(
        226,
        238,
        230
      ); /* Slight background for selection */
    `}

  img {
    width: 75px;
    height: 14px; /* Ensures uniform icon size */
    margin-bottom: 1px; /* Space between the icon and label */
    object-fit: contain;
  }

  span {
    font-size: 14px; /* Adjusted font size for the label */
    color: #000; /* Black color for the label */
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.secondary ? "#f5f5f5" : "#008cba")};
  color: ${(props) => (props.secondary ? "#333" : "#fff")};
  border: none;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#e0e0e0" : "#005f73")};
  }
`;

export const AddAnother = styled.div`
  text-align: center;
  margin-top: 10px;
  color: #008cba;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
`;
