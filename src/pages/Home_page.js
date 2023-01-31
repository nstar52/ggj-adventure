import { Button } from "../components";
import { PageStyle } from "../styles/HomePage.style";


const HomePage = () => {
    return (
        <PageStyle>
            <h1>Game Title</h1>
            <Button text='New game' />
            <Button text='About'/>
        </PageStyle>
    )
}

export default HomePage;