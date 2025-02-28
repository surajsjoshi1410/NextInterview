import React, { useState } from "react";
import {
  Container,
  Heading,
  Modal,
  ModalContent,
  Dropdown,
  RadioGroup,
  RadioOption,
  Button,
  CloseButton
} from "../../components/UserInterview/StartInterview.style";

import { useNavigate } from "react-router-dom";

const StartInterview = ({ isOpen, onClose, title }) => {
  const [module, setModule] = useState("Deep Learning");
  const [mode, setMode] = useState("chat");
  const navigate = useNavigate();
 
  const handleStartInterview = () => {
    if (mode === "voice") {
      navigate("/voicemode");
    } else {
      navigate("/chatmode");
    }
  };

  return (
    <Container isOpen={isOpen}>
      <Modal>
        <h2>Start a New Interview</h2>
        <small>Uses AI</small>
        <ModalContent>
          <Heading>
            {title}
          </Heading>

          <label>Select Interview Mode</label>
          <RadioGroup>
          <RadioOption>
              <input
                type="radio"
                value="chat"
                checked={mode === "chat"}
                onChange={() => setMode("chat")}
              />
              Chat Mode
            </RadioOption>
            <RadioOption>
              <input
                type="radio"
                value="voice"
                checked={mode === "voice"}
                onChange={() => setMode("voice")}
              />
              Voice Mode
            </RadioOption>

          </RadioGroup>
          <Button onClick={handleStartInterview}>
            + Start Interview
          </Button>
        </ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Modal>
    </Container>
  );
};

export default StartInterview;
