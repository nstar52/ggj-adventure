import React from "react";
import Modal from "react-modal";
import { customStyles, CloseButton, RowStyle, Avatar, Character, ModalTop, ModalBottom } from "./PopupModal.style";
import Button from "../Button/Button";
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";
import DropDown from "../DropDownList/DropDownList";

Modal.setAppElement('#root');

const PopupModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let navigate = useNavigate(); 
    
    const routeChange = () =>{ 
        let path = `/story`;
        navigate(path, {state: {name: document.getElementById("fname").value, avatar: character}});
    }
    const options = [
        { label: 'White Bunny', value: 'White Bunny' },     
        { label: 'Brown Hare', value: 'Brown Hare' },     
        { label: 'Gray Rabbit', value: 'Gray Rabbit' },     
    ];

    const [value, setValue] = React.useState('White Bunny');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() { 
        setIsOpen(false)
    }    
      
    const character = value.replaceAll(' ', '');
    return (
        <>
            <Button onClick={openModal} text='New Game'/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >    

                <ModalTop>
                    <Title text='Welcome !' />
                    <CloseButton size={20} onClick={closeModal} />

                </ModalTop>
                
                <Character>
                    <RowStyle>
                        <Title text='Enter your name' />
                        <input type="text" id="fname" name="fname"></input>
                    </RowStyle> 
                    <RowStyle>                        
                        <Title text='Pick a character' />
                        <DropDown options={options} value={value} onChange={handleChange}/>
                        <Avatar>                            
                            <img src={`${process.env.PUBLIC_URL}/${character}.png`} width="120" height="120" alt="avatar"></img>
                        </Avatar>
                    </RowStyle>                                   
                </Character>

                <ModalBottom>
                    <button onClick={routeChange}> your journey starts here...</button>
                </ModalBottom>
            </Modal>
        </>
    )
}

export default PopupModal;