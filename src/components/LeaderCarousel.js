import React, { useState, useEffect } from "react";
import "../css/leader-carousel.css";

export default function LeaderCarousel({ leaders }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const leader = leaders[currentIndex];
  const [zoomedLeader, setZoomedLeader] = useState(null);

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

  // Swipe gesture for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) prevLeader(); // swipe right
    else if (touchStartX - touchEndX > 50) nextLeader(); // swipe left
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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

      {/* Cards Grid */}
      <div className="cards-list">
        {leader.cards.map((card, i) => (
          <div key={i} className={`card ${card.rarity}`}>
            {card.name}
          </div>
        ))}
      </div>
    </div>
  );
}
