import React, { useState, useEffect } from "react";
import "../css/leader-carousel.css";

export default function LeaderCarousel({ leaders }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const leader = leaders[currentIndex];

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
          ◀
        </button>

        <div className="leader-display">
          <img
            src={process.env.PUBLIC_URL + leader.image}
            alt={leader.name}
            className="leader-image"
            loading="lazy"
          />
          <h2 className="leader-name">{leader.name}</h2>
        </div>

        <button className="arrow" onClick={nextLeader}>
          ▶
        </button>
      </div>

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
