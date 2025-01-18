import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalButtonContainer,
  ModalButton,
  CancelButton,
} from "./DeleteModule.styles";

const DeleteModule = ({ onDelete, onCancel }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>Are you sure, you want to Delete ?</ModalTitle>
        <ModalButtonContainer>
          <ModalButton onClick={onDelete}>Delete</ModalButton>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
        </ModalButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DeleteModule;
