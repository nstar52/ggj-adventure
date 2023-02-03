import React, { useState } from "react";
import { Title, Popup, DropDown } from "../components";
import {
  PageStyle,
  RowStyle,
  Avatar,
  Character,
  ModalBottom,
  AvatarContainer,
} from "../styles/HomePage.style";
import { useNavigate } from "react-router-dom";
import BrownHare from "../assets/BrownHare.png";
import GrayRabbit from "../assets/GrayRabbit.png";
import WhiteBunny from "../assets/WhiteBunny.png";

const HomePage = () => {
  const [playerName, setPlayerName] = useState("playename");
  const [value, setValue] = useState("White Bunny");
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/story";
    navigate(path, { state: { name: playerName, avatar: value } });
  };
  const options = [
    { id: 1, label: "White Bunny", value: "White Bunny" },
    { id: 2, label: "Brown Hare", value: "Brown Hare" },
    { id: 3, label: "Gray Rabbit", value: "Gray Rabbit" },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <PageStyle>
      <div>
        <Title text="Game Title"></Title>
        <Popup
          text="New Game"
          children={
            <div>
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
                  <DropDown
                    options={options}
                    value={value}
                    onChange={handleChange}
                  />
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
                <button onClick={routeChange}>
                  {" "}
                  your journey starts here...
                </button>
              </ModalBottom>
            </div>
          }
        />
        <Popup text="About" />
      </div>
    </PageStyle>
  );
};

export default HomePage;
