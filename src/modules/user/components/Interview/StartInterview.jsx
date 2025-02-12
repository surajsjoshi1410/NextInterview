import React, { useState } from "react";
import {
  Container,
  Modal,
  ModalContent,
  Dropdown,
  RadioGroup,
  RadioOption,
  Button,
  CloseButton,
  Title,
} from "../UserInterview/StartInterview.style";

const StartInterview = ({ isOpen, onClose, course }) => {
  const [module, setModule] = useState("Deep Learning");
  const [mode, setMode] = useState("voice");

  if (!isOpen) return null;

  return (
    <Container>
      <Modal>
        <Title>Start Interview: {course.title}</Title>
        <small>Uses AI</small>

        <ModalContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            <label>Select Module</label>
            <Dropdown value={module} onChange={(e) => setModule(e.target.value)}>
              <option value="Deep Learning">Deep Learning</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Science">Data Science</option>
            </Dropdown>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
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
          </div>
          <Button onClick={() => alert(`Starting ${module} interview for ${course.title} in ${mode} mode`)}>
            + Start Interview
          </Button>
        </ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Modal>
    </Container>
  );
};

export default StartInterview;
