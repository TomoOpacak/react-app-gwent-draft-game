import { useState, useEffect } from "react";
import cardsData from "../data/cards.json";

function CardDatabase() {
  const [search, setSearch] = useState("");
  const [faction, setFaction] = useState("All");
  const [sortBy, setSortBy] = useState("rarity");

  const rarityOrder = {
    Legendary: 1,
    Epic: 2,
    Rare: 3,
    Common: 4,
  };

  // Create array of unique factions for dropdown
  const factions = ["All", ...new Set(cardsData.map((card) => card.faction))];

  // Filtering + Sorting Logic
  const filteredCards = cardsData
    .filter((card) => {
      const searchTerm = search.toLowerCase();
      const matchesName = card.name.toLowerCase().includes(searchTerm);
      const matchesTag = card.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm)
      );
      const matchesFaction = faction === "All" || card.faction === faction;

      return (matchesName || matchesTag) && matchesFaction;
    })
    .sort((a, b) => {
      if (sortBy === "rarity") {
        return rarityOrder[a.rarity] - rarityOrder[b.rarity];
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "faction") {
        return a.faction.localeCompare(b.faction);
      }
      return 0;
    });

  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setZoomed(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <div className="card-db-container">
      {/* 🔎 Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name or tag..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="filter">
        {/* 🏳️ Faction Dropdown */}
        <select
          className="faction-dropdown"
          value={faction}
          onChange={(e) => setFaction(e.target.value)}
        >
          {factions.map((f, i) => (
            <option key={i} value={f}>
              {f}
            </option>
          ))}
        </select>

        {/* 🔽 Sort Dropdown */}
        <select
          className="sort-dropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="rarity">Sort by Rarity</option>
          <option value="name">Sort by Name</option>
          <option value="faction">Sort by Faction</option>
        </select>
      </div>
      {/* 📇 Card Grid */}
      <div className="card-grid">
        {filteredCards.map((card, index) => (
          <div className="card-item" key={index}>
            <img
              src={process.env.PUBLIC_URL + card.image}
              alt={card.name}
              loading="lazy"
              onClick={() => setZoomed(card)}
            />
          </div>
        ))}
      </div>
      {zoomed && (
        <div className="zoom-overlay" onClick={() => setZoomed(null)}>
          <img
            src={process.env.PUBLIC_URL + zoomed.image}
            alt={zoomed.name}
            className="zoom-image"
          />
        </div>
      )}
    </div>
  );
}

export default CardDatabase;
