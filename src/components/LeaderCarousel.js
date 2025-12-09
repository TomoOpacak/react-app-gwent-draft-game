import React, { useState, useEffect } from "react";
import "../css/leader-carousel.css";

export default function LeaderCarousel({ leaders }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const leader = leaders[currentIndex];
  const baseCards = leader.cards ? leader.cards.slice(0, 12) : [];
  const recommendedCards = leader.cards ? leader.cards.slice(12, 18) : [];
  const [zoomedLeader, setZoomedLeader] = useState(null);
  const [openStack, setOpenStack] = useState(null);
  const [openStackRecommended, setOpenStackRecommended] = useState(null);
  const stacks = Array.from({ length: Math.ceil(baseCards.length / 6) });

  // Preload all leader images for smooth experience
  useEffect(() => {
    leaders.forEach((l) => {
      const img = new Image();
      img.src = process.env.PUBLIC_URL + l.image;
    });
  }, [leaders]);

  const prevLeader = () => {
    setCurrentIndex((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
  };

  const nextLeader = () => {
    setCurrentIndex((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      {/* Leader Carousel */}
      <div className="leader-carousel">
        <button className="arrow" onClick={prevLeader}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div className="leader-display">
          <img
            src={process.env.PUBLIC_URL + leader.image}
            alt={leader.name}
            className="leader-image"
            loading="lazy"
            onClick={() => setZoomedLeader(leader)} // <— Enable zoom
          />
        </div>

        {/* Zoom Overlay */}
        {zoomedLeader && (
          <div className="zoom-overlay" onClick={() => setZoomedLeader(null)}>
            <img
              src={process.env.PUBLIC_URL + zoomedLeader.image}
              alt={zoomedLeader.name}
              className="zoom-image"
            />
          </div>
        )}

        <button className="arrow" onClick={nextLeader}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <h2 className="leader-name">{leader.name}</h2>
      <h2 className="group-title">Base Cards</h2>
      <div className="cards-lists-container">
        {stacks.map((_, stackIndex) => (
          <div
            className="cards-list"
            key={`stack-${stackIndex}`}
            onClick={() =>
              setOpenStack(openStack === stackIndex ? null : stackIndex)
            }
          >
            {baseCards
              .slice(stackIndex * 6, stackIndex * 6 + 6)
              .map((card, i) => (
                <div
                  key={`card-${stackIndex}-${i}`}
                  style={{ "--i": i }}
                  className={openStack === stackIndex ? "spread" : ""}
                >
                  <img
                    src={process.env.PUBLIC_URL + card.image}
                    alt={card.name}
                    className="little-card-image"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
      <h2 className="group-title">
        Recommended Cards ({recommendedCards.length})
      </h2>
      <div className="cards-lists-container">
        {stacks.map((_, stackIndex) => (
          <div
            className="cards-list"
            key={`stack-${stackIndex}`}
            onClick={() =>
              setOpenStackRecommended(
                openStackRecommended === stackIndex ? null : stackIndex
              )
            }
          >
            {recommendedCards
              .slice(stackIndex * 6, stackIndex * 6 + 6)
              .map((card, i) => (
                <div
                  key={`card-${stackIndex}-${i}`}
                  style={{ "--i": i }}
                  className={
                    openStackRecommended === stackIndex ? "spread" : ""
                  }
                >
                  <img
                    src={process.env.PUBLIC_URL + card.image}
                    alt={card.name}
                    className="little-card-image"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
