import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai"
import Background from '../../assets/background.jpg'


export const customStyles = {
  

  content: {
    backgroundImage: `url(${Background})`,
    borderRadius: '15px'
  }
}

export const ModalTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #eee;
padding: 1rem;

`

export const Character = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 2rem 1.5rem 0.5rem 2rem;
`

export const Avatar = styled.div`
display: inline-block;
text-align: center;
`

export const CloseButton = styled(AiOutlineClose)`
display: inline-block;
font-weight: 500;
color: black;
text-align: center;
font-size: 1em;
padding: 1rem;
background: #eee;
border-radius: 35%;
cursor: pointer;
:hover {
  background-color: black;
  color: white;
}
`

export const RowStyle = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 0.7fr;
  grid-gap: 20px;
  padding: 2rem
`

export const ModalBottom = styled.div`
position: absolute;
bottom: 1rem;
left: 2rem;

button{
  padding: 1rem;
  font-style: italic;
}
`