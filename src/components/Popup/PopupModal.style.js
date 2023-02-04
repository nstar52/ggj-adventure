import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import Background from "../../assets/background.jpg";


export const customStyles = {
  content: {
    backgroundImage: `url(${Background})`,
    borderRadius: "15px",
    width: "60%",
    height: "60%",
    display: "grid",
    top: "20%",
    left: "20%",
    right: "20%",
    bottom: "20%",
  }
};

// export const Container = styled.div`
//   padding-bottom: 100px;
// `

export const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 1rem;
  border-radius: 15px;
  border: 2px solid #8b4513;
  max-height: 30%;
`;

export const CloseButton = styled(AiOutlineClose)`
  display: inline-block;
  font-weight: 500;
  color: #101010;
  text-align: center;
  font-size: 1em;
  padding: 1rem;
  background: transparent;
  border-radius: 35%;
  border: 2px solid #8b4513;

  cursor: pointer;
  :hover {
    background-color: black;
    color: #B8BDB7;
  }
`;
