import React, { useState } from "react";
import {
  Container,
  Modal,
  ModalContent,
  Dropdown,
  RadioGroup,
  RadioOption,
  Button,
  CloseButton
} from "../../components/UserInterview/StartInterview.style";

const StartInterview = ({ isOpen, onClose }) => {
  const [module, setModule] = useState("Deep Learning");
  const [mode, setMode] = useState("voice");

  return (
    <Container isOpen={isOpen}>
      <Modal>
        <h2>Start a New Interview</h2>
        <small>Uses AI</small>
        <ModalContent>
          <label>Select Module</label>
          <Dropdown value={module} onChange={(e) => setModule(e.target.value)}>
            <option value="Deep Learning">Deep Learning</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Data Science">Data Science</option>
          </Dropdown>
          <label>Select Interview Mode</label>
          <RadioGroup>
            <RadioOption>
              <input
                type="radio"
                value="voice"
                checked={mode === "voice"}
                onChange={() => setMode("voice")}
              />
              Voice Mode
            </RadioOption>
            <RadioOption>
              <input
                type="radio"
                value="chat"
                checked={mode === "chat"}
                onChange={() => setMode("chat")}
              />
              Chat Mode
            </RadioOption>
          </RadioGroup>
          <Button onClick={() => alert(`Starting ${module} interview in ${mode} mode`)}>
            + Start Interview
          </Button>
        </ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Modal>
    </Container>
  );
};

export default StartInterview;
