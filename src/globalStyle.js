import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 20px;
}

body{
    width:100%;
    height:100%;
    
}

input{
    border: 2px solid gray;
    border-radius: 4px;
    width: 90%;
    height: 70%;    
    padding-left: 2rem;
    font-size: 30px;
}
`
