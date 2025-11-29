import "./css/style.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDatabase from "./components/CardDatabase";
import DeckBuildGuide from "./components/DeckBuildingGuide";
import MonsterFactionGuide from "./components/MonsterFactionGuide";
import NilfgaardFactionGuide from "./components/NilfgaardFactionGuide";
import NorthernRealmsFactionGuide from "./components/NorthernRealmsFactionGuide";
import ScoiataelFactionGuide from "./components/ScoiataelFactionGuide";
import SkelligeFactionGuide from "./components/SkelligeFactionGuide";
import SyndicateFactionGuide from "./components/SyndicateFactionGuide";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <img
          className="main-logo"
          src="/assets/images/logo.webp"
          alt="GWENT Logo"
        />

        <Routes>
          <Route path="/cards" element={<CardDatabase />} />
          <Route path="/guide" element={<DeckBuildGuide />} />

          <Route
            path="/"
            element={
              <>
                <Link to="/cards">
                  <button className="main-button">Card Database</button>
                </Link>
                <Link to="/guide">
                  <button className="main-button">Deck Build Guide</button>
                </Link>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/monsters" element={<MonsterFactionGuide />} />
          <Route path="/nilfgaard" element={<NilfgaardFactionGuide />} />
          <Route
            path="/northern-realms"
            element={<NorthernRealmsFactionGuide />}
          />
          <Route path="/scoiatael" element={<ScoiataelFactionGuide />} />
          <Route path="/skellige" element={<SkelligeFactionGuide />} />
          <Route path="/syndicate" element={<SyndicateFactionGuide />} />
        </Routes>
        <footer className="main-footer">
          <p>
            GWENT Board Game Project 2025 made by Reattera. All rights reserved
            by CD Project Red.
          </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
