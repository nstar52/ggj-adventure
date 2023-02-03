import { Title } from "../components";
import { PageStyle, Door } from "../styles/EndPage.style";
import { useNavigate } from "react-router-dom";


const EndPage = () => {

    let navigate = useNavigate();
    const routeChange = () =>{ 
        let path = `/`;
        navigate(path);
    }
    return (
        
        <PageStyle>
            
            <div>                
                <Title text="Game over"></Title>
                <p>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make 
                    a type specimen book. It has survived not only five centuries,
                     but also the leap into electronic typesetting, remaining 
                     essentially unchanged. It was popularised in the 1960s with 
                     the release of Letraset sheets containing Lorem Ipsum 
                     passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum.
                </p>            
            </div>
            <div>
                <Door size={100} onClick={routeChange}/>
            </div>            
        </PageStyle>
    )
}

export default EndPage;