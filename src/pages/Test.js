import React, { useEffect, useState } from "react";


const Test = (props) => {
    const textNodes = props.dialogs;
    const [question, setQuestion] = useState();
    const [id, setID] = useState(0)

    const handleAnswerButtonClick = (nextNode) => {
        setID(id+1);

    }

    useEffect(() => {
        const readQuestion = (id) => {
            setQuestion(textNodes[id].text)
        }
        readQuestion(id)
    },[textNodes, id])
    return (
        
        <div onClick={() => handleAnswerButtonClick(1)}>{question}</div>
    )
}

export default Test;