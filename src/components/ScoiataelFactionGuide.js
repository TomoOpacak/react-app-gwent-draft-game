import React from "react";
import { factions } from "../data/factions";
import LeaderCarousel from "./LeaderCarousel";

export default function ScoiataelFactionGuide() {
  return (
    <div>
      <h1 className="leader-container scoiatael">Scoia'tael</h1>
      <LeaderCarousel leaders={factions.scoiatael.leaders} />
    </div>
  );
}
