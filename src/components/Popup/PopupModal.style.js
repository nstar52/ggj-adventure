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

export const RowStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`