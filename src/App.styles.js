import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
font-family: 'Times New Roman', Times, serif;

html, body {
    height: 100%;
}

html {
    display: table;
    margin: auto;
}

body {
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    background-color: black;
}
h1 {
    color: white;
}
`