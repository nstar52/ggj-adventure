import React, { useState } from "react";
import { Title, Popup, DropDown } from "../components";
import {
  PageStyle,
  RowStyle,
  Avatar,
  Character,
  ModalBottom,
  AvatarContainer,
  Bullets,
  Paragraph,
  Container
} from "../styles/HomePage.style";
import { useNavigate } from "react-router-dom";
import BrownHare from "../assets/BrownHare.png";
import GrayRabbit from "../assets/GrayRabbit.png";
import WhiteBunny from "../assets/WhiteBunny.png";


const HomePage = () => {
  const [playerName, setPlayerName] = useState("player name");
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
      
      <Title color='#B8BDB7' size='50px' text="Welcome to the Arboreal Quest"></Title>
  
      <div>
        <Popup
          text="New Game"
          children={
            <div>
              <Character>
                <RowStyle>
                  <div>
                    <Title size='25px' text="Enter your name" />

                    <input
                      onChange={(e) => setPlayerName(e.target.value)}
                      placeholder='Type a name'
                    />
                  </div>
                </RowStyle>

                <RowStyle gap='10px'>
                  <Title size='25px' text="Pick a character" />
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
        <Popup 
          text="About"
          children={
            <div>              
              <Title size='35px' text="Game story" />
              <Paragraph>
              In the game you control a rabbit named Eisenhopper, who is about to explore the famous underground rabbit hole network, in the roots of the Old Oak Tree Ecna, located at the edge of Pando forest											
              Eisenhopper has grown enough to finally wander further away of his/her family free to explore the forest and of course find a looot of carrots!												
              </Paragraph>
              <Title text='Credits' align='Left' size='30px' />
              <Bullets>

              <dt>Arbaroriza team:</dt>
                <ul>
                  <li>Spyros</li>
                  <li>Nikos</li>
                  <li>Antonis</li>
                  <li>Stefanos</li>
                </ul>
              </Bullets>               
            </div>
          } />
      </div>
    </PageStyle>
  );
};

export default HomePage;
