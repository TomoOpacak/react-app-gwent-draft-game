import "./css/style.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";

import { factions } from "./data/factions";
import cardsData from "./data/cards.json";

// Components
import CardDatabase from "./components/CardDatabase";
import DeckBuildGuide from "./components/DeckBuildingGuide";
import MonsterFactionGuide from "./components/MonsterFactionGuide";
import NilfgaardFactionGuide from "./components/NilfgaardFactionGuide";
import NorthernRealmsFactionGuide from "./components/NorthernRealmsFactionGuide";
import ScoiataelFactionGuide from "./components/ScoiataelFactionGuide";
import SkelligeFactionGuide from "./components/SkelligeFactionGuide";
import SyndicateFactionGuide from "./components/SyndicateFactionGuide";

// Preload helper
function preloadImages(imagePaths = []) {
  imagePaths.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

function App() {
  useEffect(() => {
    const imagesToPreload = [];

    // 1️⃣ Preload leader images
    Object.values(factions).forEach((faction) => {
      faction.leaders.forEach((leader) => {
        imagesToPreload.push(process.env.PUBLIC_URL + leader.image);

        // Preload leader cards images if available
        if (leader.cards) {
          leader.cards.forEach((card) => {
            if (card.image) {
              imagesToPreload.push(process.env.PUBLIC_URL + card.image);
            }
          });
        }
      });
    });

    // 2️⃣ Preload all card database images
    cardsData.forEach((card) => {
      if (card.image) imagesToPreload.push(process.env.PUBLIC_URL + card.image);
    });

    // 3️⃣ Preload faction icons
    const factionIcons = [
      "/assets/images/mo.webp",
      "/assets/images/ng.webp",
      "/assets/images/nr.webp",
      "/assets/images/sc.webp",
      "/assets/images/sk.webp",
      "/assets/images/sy.webp",
    ];
    factionIcons.forEach((icon) =>
      imagesToPreload.push(process.env.PUBLIC_URL + icon)
    );

    // Trigger preloading
    preloadImages(imagesToPreload);
  }, []);

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
        <footer className="main-footer">
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
