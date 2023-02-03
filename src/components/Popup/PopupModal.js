import React, { useState } from "react";
import Modal from "react-modal";
import {
  customStyles,
  CloseButton,
  RowStyle,
  Avatar,
  Character,
  ModalTop,
  ModalBottom,
  AvatarContainer,
} from "./PopupModal.style";
import Button from "../Button/Button";
import Title from "../Title/Title";
import { useNavigate } from "react-router-dom";
import DropDown from "../DropDownList/DropDownList";
import BrownHare from "../../assets/BrownHare.png";
import GrayRabbit from "../../assets/GrayRabbit.png";
import WhiteBunny from "../../assets/WhiteBunny.png";

Modal.setAppElement("#root");

const PopupModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [playerName, setPlayerName] = useState("playename");
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/story";
    navigate(path, { state: { name: playerName, avatar: character } });
  };
  const options = [
    { id: 1, label: "White Bunny", value: "White Bunny" },
    { id: 2, label: "Brown Hare", value: "Brown Hare" },
    { id: 3, label: "Gray Rabbit", value: "Gray Rabbit" },
  ];

  const [value, setValue] = React.useState("White Bunny");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const character = value.replaceAll(" ", "");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={openModal} text="New Game" />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalTop>
          <Title text="Welcome !" />
          <CloseButton size={20} onClick={closeModal} />
        </ModalTop>

        <Character>
          <RowStyle>
            <div>
              <Title text="Enter your name" />
            
            <input
              onChange={(e) => setPlayerName(e.target.value)}
              value={playerName}
            />
            </div>
          </RowStyle>

          <RowStyle>
            <Title text="Pick a character" />
            <DropDown options={options} value={value} onChange={handleChange} />
            <AvatarContainer>
              {value === "Gray Rabbit" ? (
                <Avatar src={GrayRabbit} />
              ) : value === "Brown Hare" ? (
                <Avatar src={BrownHare} />
              ) : (
                <Avatar src={WhiteBunny} />
              )}
            </AvatarContainer>
          </RowStyle>
        </Character>

        <ModalBottom>
          <button onClick={routeChange}> your journey starts here...</button>
        </ModalBottom>
      </Modal>
    </>
  );
};

export default PopupModal;
