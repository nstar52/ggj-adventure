import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle} from "./globalStyle";
import HomePage from "./pages/Home_page";
import PlayerUI from "./pages/Player_UI";


function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story" element={<PlayerUI />} />
      </Routes>

    </Router>
  );
}

export default App;
