import React from "react";
import Modal from "react-modal";
import { customStyles, Title, CloseButton } from "./PopupModal.style";

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
            <h1 onClick={openModal}>POPUP MODAL</h1>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                // ariaHideApp={false}
            >
            <CloseButton size={18} onClick={closeModal} />
            <Title>Select your Character</Title>
            </Modal>
        </>
    )
}

export default PopupModal;