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
  Window,
  Scenery
} from "../styles/Player_UI.style";
import React, { useEffect, useState } from "react";
// import roomPicture from "../scenery.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Typed from "react-typed";
import Typist from 'react-typist';
import Typical from "react-typical";
// import Typewriter from 'typewriter-effect';
import { Typewriter } from 'react-simple-typewriter';
import BrownHare from "../assets/BrownHare.png";
import GrayRabbit from "../assets/GrayRabbit.png";
import WhiteBunny from "../assets/WhiteBunny.png";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3a from "../assets/image3a.jpg";
import Image3b from "../assets/image3b.jpg";
import Image3c from "../assets/image3c.jpg";
import Image4 from "../assets/image4.jpg";
import Image5 from "../assets/image5.jpg";
import Image6 from "../assets/image6.jpg";
import Image7 from "../assets/image7.jpg";
import Image8a from "../assets/image8a.jpg";
import Image8b from "../assets/image8b.jpg";
import Image8c from "../assets/image8c.jpg";
import Image9 from "../assets/image9.jpg";


const PlayerUI = (props) => {
  const textNodes = props.dialogs;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const location = useLocation();
  const player_name = location.state.name;
  const avatar = location.state.avatar;
  let navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [gameState, setGameState] = useState([]);
  const image_source = textNodes[currentQuestion].image;
  const [currentTextCounter, setCurrentTextCounter] = useState(0);


  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const endGame = () => {
    let path = "/end";
    navigate(path);
  };


  const handleAnswerButtonClick = (nextNode, setState=null) => {
    if (nextNode < 0) {
      nextNode = 1;
    }

    if (setState) {
      let data = gameState.filter((item) => item.id === setState.id);
      if (data.length > 0) {
        let number = gameState.findIndex(
          (result) => result.id === setState.id
        );
        gameState[number].value =
          gameState[number].value + setState.value;
      } else {
        gameState.push(setState);
      }
    } 

    setCurrentQuestion(
      textNodes.findIndex((textNode) => textNode.id === nextNode)
    );
  };

  useEffect(() => {
    const readQuestion = (id) => {
      


      setQuestion(textNodes[id].text.replace("'player'", "player_name"));

      while (answers.length > 0) {
        answers.pop();
      }

      textNodes[id].options.forEach((option) => {
       if (option.requiredState) {
          console.log(gameState)
          let data = gameState.filter(
            (item) =>
              item.id === option.requiredState.id &&
              item.value >= option.requiredState.value
          );
          console.log(data)
          if (data.length > 0) {
            answers.push(option);
            let number = gameState.findIndex(
              (result) => result.id === option.requiredState.id
            );
            gameState[number].value =
              gameState[number].value - option.requiredState.value;

            if (gameState[number].value === 0) {
              gameState.splice(number, 1);
            }
          }
        }
        else {
          console.log(option);
          answers.push(option);
        }
      });
    };



     
    readQuestion(currentQuestion);
    
  });
  



  return (
    <PageStyle>
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
          {/* <div>
            <Typed
              strings={[question]}
              typeSpeed={35}
              fadeOut={true}
              onComplete={stop}
              loop
            />
          </div>  */}

          <Typical steps={[question]} wrapper={'p'}/>
           {/* <Typewriter
            words={[question]}
            typeSpeed={70}
            delaySpeed={1000}
          />
           */}
          

          <ButtonGrid>
            {answers.map((answer) => (
              <OptionButton
                key={answer.id}
                onClick={() => handleAnswerButtonClick(answer.nextText, answer.setState)}
              >
                {answer.text}
              </OptionButton>
            ))}
          </ButtonGrid>
        </DialogContainer>
      </Window>
    </PageStyle>
  );
};

export default PlayerUI;
