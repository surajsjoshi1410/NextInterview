import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  RadioGroup,
  RadioOption,
  RadioLabel,
  ButtonGroup,
  Button,
  CloseButton,
} from "./NotificationAdd.styles";

const NotificationAdd = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    heading: "",
    subText: "",
    trigger: "Schedule",
    timeZone: "",
    time: "00:00 AM",
    frequency: "",
    notificationType: "Only notification",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalHeader>Create Notification</ModalHeader>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Heading</Label>
            <Input
              type="text"
              name="heading"
              placeholder="Type here"
              value={formData.heading}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Sub text</Label>
            <TextArea
              name="subText"
              placeholder="Type here"
              rows="3"
              value={formData.subText}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Trigger</Label>
            <Select
              name="trigger"
              value={formData.trigger}
              onChange={handleInputChange}
            >
              <option>Schedule</option>
              <option>Immediately</option>
            </Select>
          </FormGroup>

  <FormGroup>
    <Label>Select time zone</Label>
    <Select
      name="timeZone"
      value={formData.timeZone}
      onChange={handleInputChange}
    >
      <option value="">Select</option>
      <option value="UTC">UTC</option>
      <option value="IST">IST</option>
      <option value="PST">PST</option>
    </Select>
  </FormGroup>
  <FormGroup>
    <Label>Select time</Label>
    <Input
      type="text"
      name="time"
      placeholder="00:00 AM"
      value={formData.time}
      onChange={handleInputChange}
    />
  </FormGroup>

          <FormGroup>
            <Label>Frequency</Label>
            <Select
              name="frequency"
              value={formData.frequency}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </Select>
          </FormGroup>

          <RadioGroup>
            <RadioOption>
              <input
                type="radio"
                name="notificationType"
                value="Only notification"
                checked={formData.notificationType === "Only notification"}
                onChange={handleInputChange}
                style={{background: "red"}}
             
              />
              <RadioLabel>Only notification</RadioLabel>
            </RadioOption>
            <RadioOption>
              <input
                type="radio"
                name="notificationType"
                value="Only e-mail"
                checked={formData.notificationType === "Only e-mail"}
                onChange={handleInputChange}
              />
              <RadioLabel>Only e-mail</RadioLabel>
            </RadioOption>
            <RadioOption>
              <input
                type="radio"
                name="notificationType"
                value="Both notification and e-mail"
                checked={formData.notificationType === "Both notification and e-mail"}
                onChange={handleInputChange}
              />
              <RadioLabel>Both notification and e-mail</RadioLabel>
            </RadioOption>
          </RadioGroup>

          <ButtonGroup>
            <Button type="submit">Create</Button>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NotificationAdd;
