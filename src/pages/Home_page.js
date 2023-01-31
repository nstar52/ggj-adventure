import { Button } from "../components";
import { PageStyle } from "../styles/HomePage.style";
import { Popup } from "../components";



const HomePage = () => {
    
    return (
        
        <PageStyle>
            <div>
            <h1>Game Title</h1>
            <Button text='New game' />
            <Button text='About'/>
            <Popup />
            </div>
        </PageStyle>
    )
}

export default HomePage;