import {
  PageStyle,
  Container,
  DialogContainer,
  ButtonGrid,
  OptionButton,
  Sidebar,
  Title,
  Door,
  Avatar,
  Window
} from "../styles/Player_UI.style";
import React, { useState } from "react";
// import roomPicture from "../scenery.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import BrownHare from "../assets/BrownHare.png";
import GrayRabbit from "../assets/GrayRabbit.png";
import WhiteBunny from "../assets/WhiteBunny.png";

const PlayerUI = (props) => {
  const textNodes = props.dialogs;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const location = useLocation();
  const player_name = location.state.name;
  const avatar = location.state.avatar;
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/';
    navigate(path);
  };

  const endGame = () => {
    let path = '/end';
    navigate(path);
  };

  const handleAnswerButtonClick = (nextNode) => {
    if (nextNode < 0) {
      nextNode = 1;
    }
    setCurrentQuestion(
      textNodes.findIndex((textNode) => textNode.id === nextNode)
    );
  };

/* <img src={roomPicture} alt="scenery" /> */

  return (
    <PageStyle><Window>
      <Title>
        <h1>Awesome Game: </h1>
        <h2>Have fun {player_name}!</h2>
      </Title>

      <Container>
        <div>
          
        </div>
      </Container>

      <Sidebar>
        <div>
          {avatar === "Gray Rabbit" ? (
            <Avatar src={GrayRabbit} />
            ) : avatar === "Brown Hare" ? (
            <Avatar src={BrownHare} />
            ) : (
            <Avatar src={WhiteBunny} />
            )}
        </div>
        <div>
          <Door size={100} onClick={routeChange} />
        </div>
      </Sidebar>

      <DialogContainer>
        <div>{textNodes[currentQuestion].text}</div>
        <ButtonGrid>
          {textNodes[currentQuestion].options.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() => handleAnswerButtonClick(option.nextText)}
            >
              {option.text}
            </OptionButton>
          ))}
        </ButtonGrid>
      </DialogContainer></Window>
    </PageStyle>
  );
};

export default PlayerUI;
