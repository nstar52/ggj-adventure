import styled from "styled-components";
import { GiExitDoor } from "react-icons/gi"
import Scenery1 from "../assets/scenery1.png"

export const PageStyle = styled.div`
width: 100vw;
height: 100vh;
background-color: black;
justify-content: center;
display: grid;
grid-template-columns: auto;
grid-template-rows: auto;
grid-template-areas:
    "header header header header"    
    "main main main sidebar"
    "dialog dialog dialog  dialog"
    "footer footer footer footer";
`

export const Window = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr ;
grid-template-rows: auto;
grid-template-areas:
    "header header "    
    "main sidebar"
    "dialog dialog"
    "footer footer ";
width: 900px;
height: 900px;
`

export const Title = styled.div`
grid-area: header;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
`

export const Container = styled.div`
grid-area: main;
background-color: red;
background-image: url(${Scenery1});
background-size: cover;
display: flex;
justify-items: center;
img {
    object-fit: cover;
}
`
export const Sidebar = styled.div`
grid-area: sidebar;
/* outline: 1px dashed white; */
box-sizing: border-box;
display: grid;
grid-template-columns: .7fr;
align-items: center;
`

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  padding-left: 45%;
`;

export const Door = styled(GiExitDoor)`
color: green;
padding-left: 50%;
cursor: pointer;
`

export const DialogContainer = styled.div`
grid-area: dialog;
box-sizing: border-box;
background-color: grey;
height: 200px;
padding-top: 10px;
padding: 5px;
box-shadow: 0 0 10px 2px;
display: grid;
`

export const ButtonGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
gap: 10px;
`

export const OptionButton = styled.button`
background-color: hsl(200, 100%, 50%);
border: 1px solid hsl(200, 100%, 30%);
border-radius: 5px;
color: white;
`