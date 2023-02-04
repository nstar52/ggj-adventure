import React from "react";
import { Header } from "./Title.style";

const Title = (props) => {
  return (
    <div>
      <Header>{props.text}</Header>
    </div>
  );
};

export default Title;
