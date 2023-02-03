import {
  PageStyle,
  Container,
  DialogContainer,
  ButtonGrid,
  OptionButton,
  Sidebar,
  Title,
  Door,
} from "../styles/Player_UI.style";
import React, { useState } from "react";
// import roomPicture from "../scenery.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PlayerUI = (props) => {
  const textNodes = props.dialogs;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const location = useLocation();
  const player_name = location.state.name;
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

//   <img
//   src={`${process.env.PUBLIC_URL}/${location.state.avatar}.png`}
//   width="200"
//   height="200"
//   alt="avatar"
// />

{/* <img src={roomPicture} alt="scenery" /> */}

  return (
    <PageStyle>
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
      </DialogContainer>
    </PageStyle>
  );
};

export default PlayerUI;
