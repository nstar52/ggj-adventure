import React, { useState } from "react";
import Modal from "react-modal";
import {
  customStyles,
  CloseButton,
  ModalTop,
  Container
} from "./PopupModal.style";
import Button from "../Button/Button";
import Title from "../Title/Title";


Modal.setAppElement("#root");

const PopupModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    
      <Button onClick={openModal} text={props.text} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalTop>
          <Title size='40px' text="Welcome to the Arboreal Quest" />
         
            <CloseButton size={20} onClick={closeModal} />
     

        </ModalTop>
        {props.children}
      </Modal>
    </>
  );
};

export default PopupModal;
