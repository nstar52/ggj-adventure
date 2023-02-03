import {
  PageStyle,
  Container,
  DialogContainer,
  ButtonGrid,
  OptionButton,
} from "../styles/Player_UI.style";
import React, { useState } from "react";

const PlayerUI = (props) => {
  const textNodes = props.dialogs;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerButtonClick = (nextNode) => {
    if (nextNode < 0) {
      nextNode = 1;
    }
    setCurrentQuestion(
      textNodes.findIndex((textNode) => textNode.id === nextNode)
    );
  };

  return (
    <PageStyle>
      <Container>
        <div>
          <h1>Test</h1>
        </div>
      </Container>

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
