import styled from "styled-components";


export const PageStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  align-items: center;
  justify-items: center; /* adjusted */
  background-color: black;

  h1 {
    color: white;
    font-size: 30px;
  }
`;

export const Character = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 1.5rem 0.5rem 2rem;

  input {
    background-color: transparent;
    border-color: #8b4513;
    width: 75%;
  }
`;

export const AvatarContainer = styled.div`
  display: inline-block;
  text-align: center;
`;
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
`;

export const RowStyle = styled.div`
  display: grid;
  /* text-align: center; */
  /* grid-template-columns: 0.7fr; */
  /* grid-gap: ${(props) => (props.gap === "test" ? "10px" : "0px")}; */

  /* padding: 2rem */
`;

export const ModalBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    /* padding: 1rem; */
    padding: 5px 5px;
    font-style: italic;
    border-color: #8b4513;
    border-radius: 15px;
    background-color: transparent;
    box-shadow: 2px 2px;

    :hover {
      background-color: black;
      color: white;
    }
  }
`;
