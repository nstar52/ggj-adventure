import React from "react";
import Modal from "react-modal";
import { customStyles, Title, CloseButton } from "./PopupModal.style";
import Button from "../Button/Button";
import DropDownList from "../DropDownList/DropDownList";

Modal.setAppElement('#root');

const PopupModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <>
            <Button onClick={openModal} text='New Game'/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
            <CloseButton size={18} onClick={closeModal} />
            <Title>Select your Character</Title>
            <DropDownList />
            </Modal>
        </>
    )
}

export default PopupModal;