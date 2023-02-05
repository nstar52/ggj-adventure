import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import HomePage from "./pages/Home_page";
import PlayerUI from "./pages/Player_UI";
import Constants from "./data/Constants";
import EndPage from "./pages/End_page";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
    <Helmet>
    <title>Arbaroriza</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"/>
    </Helmet>
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/story"
          element={<PlayerUI dialogs={Constants.textNodes} />}
        />
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </Router>
    </HelmetProvider>
  );
}

export default App;
