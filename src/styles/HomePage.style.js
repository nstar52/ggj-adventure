import styled from "styled-components";

export const PageStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-rows: 50vh; */
  align-items: center;
  justify-items: center; /* adjusted */
  background-color: #101010;
  height: 100vh;
`;


export const Bullets = styled.dl`
  dt {
    margin-top: 10px;
    color: #b8bdb7;
    font-weight: 600;
  }
  ul {
    padding-left: 55px;
    font-weight: 500;
  }
  li {
    color: #b8bdb7;
    font-size: 25px;
  }
`;

export const Paragraph = styled.p`
  color: #b8bdb7;
  font-size: 25px;
  font-weight: 500;
`;

export const Character = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* padding: 2rem 1.5rem 0.5rem 2rem; */

  input{
    border: 2px solid #b8bdb7;
    border-radius: 4px;
    width: 90%;
    height: 40%;
    padding-left: 2rem;
    font-size: 30px;
    background-color: #101010;
    color: #b8bdb7;
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
  text-align: center;
  /* grid-template-columns: 0.7fr; */
  grid-gap: ${(props) => (props.gap ? props.gap : null)};

  /* padding: 2rem */
`;

export const ModalBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    /* padding: 1rem; */
    padding: 5px 5px;
    font-style: italic;
    border-color: #101010;
    border-radius: 15px;
    background-color: #b8bdb7;
    box-shadow: 2px 2px;

    :hover {
      background-color: #101010;
      color: #b8bdb7;
    }
  }
`;
