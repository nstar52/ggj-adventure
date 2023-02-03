import styled from "styled-components";
import { GiExitDoor } from "react-icons/gi"

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
display: flex;
justify-items: center;
img {
    object-fit: cover;
}
`
export const Sidebar = styled.div`
grid-area: sidebar;
outline: 1px dashed white;
box-sizing: border-box;
display: grid;
grid-template-columns: repeat(1, auto);

`

export const Door = styled(GiExitDoor)`
color: green;
padding-left: 50px;
cursor: pointer;

`


export const DialogContainer = styled.div`
grid-area: dialog;
box-sizing: border-box;
width: 100%;
background-color: grey;
padding-top: 10px;
padding: 5px;
box-shadow: 0 0 10px 2px;
`

export const ButtonGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, auto);
gap: 10px;
margin-top: 20px;
`

export const OptionButton = styled.button`
background-color: hsl(200, 100%, 50%);
border: 1px solid hsl(200, 100%, 30%);
border-radius: 5px;
padding: 5px 10px;
color: white;
`