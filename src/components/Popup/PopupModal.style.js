import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai"
import Background from '../../assets/background.jpg'
// import BrownHare from '../../assets/BrownHare'
// import GrayRabbit from '../../assets/GrayRabbit'
// import WhiteBunny from '../../assets/WhiteBunny'

export const customStyles = {
  

  content: {
    backgroundImage: `url(${Background})`,
    borderRadius: '15px',
    width: '60%',
    height: '60%',
    display: 'grid',
    top: '20%',
    left: '20%',
    right: '20%',
    bottom: '20%'
  }
}

export const ModalTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: transparent;
padding: 1rem;
border-radius: 15px;
border: 2px solid #8B4513;

`

export const Character = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 2rem 1.5rem 0.5rem 2rem;


input {
  background-color: transparent;
  border-color: #8B4513;
  width:  75%;
}
`

export const AvatarContainer = styled.div`
display: inline-block;
text-align: center;
`
export const Avatar = styled.img`
width: 120px;
height: 120px;
`

export const CloseButton = styled(AiOutlineClose)`
display: inline-block;
font-weight: 500;
color: black;
text-align: center;
font-size: 1em;
padding: 1rem;
background: transparent;
border-radius: 35%;
border: 2px solid #8B4513;

cursor: pointer;
:hover {
  background-color: black;
  color: white;
}
`

export const RowStyle = styled.div`
  display: grid;
  /* text-align: center; */
  /* grid-template-columns: 0.7fr; */
  /* grid-gap: ${(props) => (props.gap==='test' ? '10px': '0px')}; */

  
  /* padding: 2rem */
`

export const ModalBottom = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;


button{
  /* padding: 1rem; */
  padding: 5px 5px;
  font-style: italic;
  border-color: #8B4513;
  border-radius: 15px;
  background-color: transparent;
  box-shadow: 2px 2px;

  :hover {
  background-color: black;
  color: white;
}
}
`