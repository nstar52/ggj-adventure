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
import React, { useEffect, useState } from "react";
// import roomPicture from "../scenery.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Typed from "react-typed";

const PlayerUI = (props) => {
  const textNodes = props.dialogs;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [toggle, setToggle] = useState(false)
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
    setToggle(true)
  };

  useEffect(() => {
    setToggle(false)
  }, [toggle])
<<<<<<< Updated upstream

//   <img
//   src={`${process.env.PUBLIC_URL}/${location.state.avatar}.png`}
//   width="200"
//   height="200"
//   alt="avatar"
// />

/* <img src={roomPicture} alt="scenery" /> */
=======
>>>>>>> Stashed changes

  
  return (
    <PageStyle>
<<<<<<< Updated upstream
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
        <div>
        <Typed strings={[textNodes[currentQuestion].text]}
          typeSpeed={50}
          fadeOut={true}
          showCursor
          loop={toggle}
        />
        </div>

=======
      <Window>
        <Title>
          <h1>Arboreal Quest: Have fun {player_name}!</h1>
        </Title>

        <Container>
          <div>
            {image_source === "image2" ? (
              <Scenery src={Image2} />
            ) : image_source === "image3a" ? (
              <Scenery src={Image3a} />
            ) : image_source === "image3b" ? (
              <Scenery src={Image3b} />
            ) : image_source === "image3c" ? (
              <Scenery src={Image3c} />
            ) : image_source === "image4" ? (
              <Scenery src={Image4} />
            ) : image_source === "image5" ? (
              <Scenery src={Image5} />
            ) : image_source === "image6" ? (
              <Scenery src={Image6} />
            ) : image_source === "image7" ? (
              <Scenery src={Image7} />
            ) : image_source === "image8a" ? (
              <Scenery src={Image8a} />
            ) : image_source === "image8b" ? (
              <Scenery src={Image8b} />
            ) : image_source === "image8c" ? (
              <Scenery src={Image8c} />
            ) : image_source === "image9" ? (
              <Scenery src={Image9} />
            ): (
              <Scenery src={Image1} />
            )
            } 

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
          <div>
            <Typed
              strings={[textNodes[currentQuestion].text]}
              typeSpeed={35}
              fadeOut={true}
              showCursor
              loop={toggle}
            />
          </div>

          
>>>>>>> Stashed changes
        <ButtonGrid>
          {textNodes[currentQuestion].options.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() => handleAnswerButtonClick(option.nextText)}
            >
              {option.text}
<<<<<<< Updated upstream
            </OptionButton>
          ))}
        </ButtonGrid>
      </DialogContainer>
=======
              </OptionButton>
            ))}
          </ButtonGrid>
        </DialogContainer>
      </Window>
>>>>>>> Stashed changes
    </PageStyle>
  );
};

export default PlayerUI;
