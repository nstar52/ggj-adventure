import styled from "styled-components";
import { GiExitDoor } from "react-icons/gi"

export const PageStyle = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 95.7vh;
align-items: center;
justify-items: center; /* adjusted */
background-color: black;
color: white;
font-size: 30px;
padding: 1rem;
gap: 50px;
`
export const Door = styled(GiExitDoor)`
color: green;
padding-left: 50px;
cursor: pointer;

`