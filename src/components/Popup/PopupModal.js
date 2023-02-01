import React from "react";
import Modal from "react-modal";
import { customStyles, CloseButton, RowStyle } from "./PopupModal.style";
import Button from "../Button/Button";
import DropDownList from "../DropDownList/DropDownList";
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";

Modal.setAppElement('#root');

const PopupModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
        let path = `/story`;
        navigate(path);
    }

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
                
                <RowStyle>
                    <Title text='Select your Character' />
                </RowStyle>
                
                <RowStyle>
                    <Title text='option 1' />
                    <DropDownList />
                </RowStyle>

                <RowStyle>
                    <Title text='option 2' />
                    <DropDownList />
                </RowStyle>

                <RowStyle>
                    <Title text='option 3' />
                    <DropDownList />
                </RowStyle>

                <RowStyle>
                    <Title text='option 4' />
                    <DropDownList />
                </RowStyle>

                <RowStyle>
                    <button onClick={routeChange}>Start</button>
                </RowStyle>
            </Modal>
        </>
    )
}

export default PopupModal;