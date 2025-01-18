import styled from "styled-components";
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center; /* Center vertically with spacing */
  justify-content: center; /* Center horizontally */
  z-index: 1000;
  padding: 40px 0; /* Add gap from top and bottom */
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 600px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.fonts.body};
  position: relative;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  justify-content: space-between; /* Ensure spacing for footer (buttons) */
  align-items: stretch; /* Stretch elements to fill width */
  overflow: hidden; /* Prevent content overflow */
`;


export const ModalHeader = styled.h2`
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    flex: 0.3;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
  }

  input,
  textarea,
  select {
    flex: 0.7;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.textgray};
    border-radius: 5px;
    font-size: 0.8rem;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  }
`;



export const Label = styled.label`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.success};
`;

export const RadioOption = styled.div`
  display: flex;
  align-items: center;

  
  color: ${({ theme }) => theme.colors.success};
  
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;
export const Input = styled.input`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
  height: 20px; /* Add a fixed height */
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  font-family: ${({ theme }) => theme.fonts.body};
  height: 40px; /* Add a fixed height */
`;

export const Select = styled.select`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.body};
  height: 40px; /* Add a fixed height */
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;


export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
