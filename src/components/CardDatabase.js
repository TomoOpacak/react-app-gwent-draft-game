import { useState, useEffect } from "react";
import cardsData from "../data/cards.json";

function CardDatabase() {
  const [search, setSearch] = useState("");
  const [faction, setFaction] = useState("All");
  const [sortBy, setSortBy] = useState("rarity");
  const [zoomed, setZoomed] = useState(null);

  const rarityOrder = { Legendary: 1, Epic: 2, Rare: 3, Common: 4 };
  const factions = ["All", ...new Set(cardsData.map((card) => card.faction))];

  // Filter + Sort
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
      if (sortBy === "rarity")
        return rarityOrder[a.rarity] - rarityOrder[b.rarity];
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "faction") return a.faction.localeCompare(b.faction);
      return 0;
    });

  // Close zoom on Escape
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && setZoomed(null);
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Handle click on card: toggle zoom
  const handleClick = (card) => setZoomed(zoomed === card ? null : card);

  return (
    <div className="card-db-container">
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or tag..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Faction + Sort */}
      <div className="filter">
        <select value={faction} onChange={(e) => setFaction(e.target.value)}>
          {factions.map((f, i) => (
            <option key={i} value={f}>
              {f}
            </option>
          ))}
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="rarity">Sort by Rarity</option>
          <option value="name">Sort by Name</option>
          <option value="faction">Sort by Faction</option>
        </select>
      </div>

      {/* Card Grid */}
      <div className="card-grid">
        {filteredCards.map((card, i) => (
          <div className="card-item" key={i}>
            <img
              src={process.env.PUBLIC_URL + card.image}
              alt={card.name}
              loading="lazy"
              onClick={() => handleClick(card)}
            />
          </div>
        ))}
      </div>

      {/* Zoom Overlay */}
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
