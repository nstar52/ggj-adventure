import React from "react";
import { Header } from "./Title.style";

const Title = (props) => {
  return (
    <div>
      <Header color={props.color} size={props.size} align={props.align}>{props.text}</Header>
    </div>
  );
};

export default Title;
