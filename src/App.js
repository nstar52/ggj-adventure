import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import HomePage from "./pages/Home_page";
import PlayerUI from "./pages/Player_UI";
// import Constants from "../data/Constants";
import Constants from "./data/Constants";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/story"
          element={<PlayerUI dialogs={Constants.textNodes} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
