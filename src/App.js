import "./css/style.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { factions } from "./data/factions";

// Components
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
      <HashRouter>
        {/* Logo */}
        <img
          className="main-logo"
          src={process.env.PUBLIC_URL + "/assets/images/logo.webp"}
          alt="GWENT Logo"
        />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/cards">
                  <button className="main-button">Card Database</button>
                </Link>
                <Link to="/guide">
                  <button className="main-button">Deck Guide</button>
                </Link>
              </>
            }
          />
          <Route path="/cards" element={<CardDatabase />} />
          <Route path="/guide" element={<DeckBuildGuide />} />
          <Route path="/monsters" element={<MonsterFactionGuide />} />
          <Route path="/nilfgaard" element={<NilfgaardFactionGuide />} />
          <Route
            path="/northern-realms"
            element={<NorthernRealmsFactionGuide />}
          />
          <Route path="/scoiatael" element={<ScoiataelFactionGuide />} />
          <Route path="/skellige" element={<SkelligeFactionGuide />} />
          <Route path="/syndicate" element={<SyndicateFactionGuide />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>
            GWENT Board Game Project 2025 made by Reattera. All rights reserved
            by CD Projekt Red.
          </p>
        </footer>
      </HashRouter>
    </div>
  );
}

export default App;
