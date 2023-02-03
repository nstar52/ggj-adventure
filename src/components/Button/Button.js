import React from "react";
import { StyledButton, Centered } from "./Button.styles";

const Button = (props) => {
  return (
    <>
      <Centered>
        <StyledButton
          onClick={props.onClick}
          style={{ background: props.bg_color }}
        >
          {props.text}
        </StyledButton>
      </Centered>
    </>
  );
};

export default Button;
