import styled from "styled-components";

export const PageStyle = styled.div`

/* width: 100%; */
/* height: 100%; */
background-color: black;
`

export const Container = styled.div`
background-color: red;
width: 75%;


div {
    padding: 240px 540px;
}
`


export const DialogContainer = styled.div`
width: 800px;
max-width: 80%;
background-color: white;
padding: 10px;
border-radius: 5px;
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
outline: none
`