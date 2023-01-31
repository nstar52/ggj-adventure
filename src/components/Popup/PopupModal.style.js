import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai"

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        borderRadius: "10px",
        padding: "30px",
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
}

export const CloseButton = styled(AiOutlineClose)`
float: right;
color: #313131;
opacity: 0.53;
`

export const Title = styled.h1`
font-size: 21px;
color: #313131;
font-weight: 700;
padding-bottom: 10px;
`