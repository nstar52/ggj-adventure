import { Button } from "../components";
import { PageStyle } from "../styles/HomePage.style";
import { Popup } from "../components";



const HomePage = () => {
    
    return (
        
        <PageStyle>
            <div>
            <h1>Game Title</h1>
            <Popup />
            <Button text='About'/>
            
            </div>
        </PageStyle>
    )
}

export default HomePage;