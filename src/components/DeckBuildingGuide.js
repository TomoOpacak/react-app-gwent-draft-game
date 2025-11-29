import { Routes, Route, Link } from "react-router-dom";

export default function DeckBuildGuide() {
  const buttons = [
    { to: "/monsters", img: "/assets/images/mo.webp", label: "Monsters" },
    { to: "/nilfgaard", img: "/assets/images/ng.webp", label: "Nilfgaard" },
    {
      to: "/northern-realms",
      img: "/assets/images/nr.webp",
      label: "Northern Realms",
    },
    { to: "/scoiatael", img: "/assets/images/sc.webp", label: "Scoia'tael" },
    { to: "/skellige", img: "/assets/images/sk.webp", label: "Skellige" },
    { to: "/syndicate", img: "/assets/images/sy.webp", label: "Syndicate" },
  ];

  return (
    <div className="guide-container">
      <h1 className="">Choose your Faction</h1>
      <div className="factions">
        {buttons.map((btn) => (
          <Link key={btn.to} to={btn.to} className="">
            <img src={btn.img} alt={btn.label} className="faction-buttons" />
          </Link>
        ))}
      </div>
    </div>
  );
}
