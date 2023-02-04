import styled from "styled-components";

export const Header = styled.h1`
  font-size: ${props => props.size ? props.size : props.size='20px'};
  font-weight: 700;
  color: ${props => props.color ? props.color : props.align='#b8bdb7'};
  text-align: ${props => props.align ? props.align : props.align='center'};
  margin-top:10px
`;
