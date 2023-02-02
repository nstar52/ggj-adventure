import { Button, Title } from "../components";
import { PageStyle } from "../styles/HomePage.style";
import { Popup } from "../components";



const HomePage = () => {
    
    return (
        
        <PageStyle>
            <div>
                <Title text="Game Title"></Title>
                <Popup />
                <Button text='About'/>
            
            </div>
        </PageStyle>
    )
}

export default HomePage;