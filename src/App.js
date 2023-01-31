import Button from "./components/Button/Button";
import { GlobalStyle} from "./App.styles";




function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Game Title</h1>
      <Button text='New game' />
      <Button text='About'/>
    </>
  );
}

export default App;
