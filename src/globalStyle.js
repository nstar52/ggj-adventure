import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 15px;
    background-color: black;
}
`

export const GeneralPageStyle = styled.div`
display: grid;
justify-content: center;
`