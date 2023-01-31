import React from "react";
import { StyledButton, Centered } from "./Button.styles";



const Button = (props) => {
    const {text} = props;
    return (
        <>
            <Centered>
                <StyledButton>{text}</StyledButton>
            </Centered>
        </>
    )
}

export default Button;