import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";


export const customStyles = {
  content: {
    backgroundColor: '#101010',
    color: '#b8bdb7',
    borderRadius: "15px",
    width: "60%",
    height: "60%",
    display: "grid",
    top: "20%",
    left: "20%",
    right: "20%",
    bottom: "20%"
  }
};

export const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 1rem;
  max-height: 30%;
`;

export const CloseButton = styled(AiOutlineClose)`
  display: inline-block;
  font-weight: 500;
  color: #101010;
  text-align: center;
  font-size: 1em;
  padding: 1rem;
  background: #B8BDB7;
  border-radius: 35%;
  border: 2px solid #B8BDB7;
  box-shadow: 1px 1px;

  cursor: pointer;
  :hover {
    background-color: #101010;
    color: #b8bdb7;
  }
`;
