import React from "react";
import { factions } from "../data/factions";
import LeaderCarousel from "./LeaderCarousel";

export default function MonsterFactionGuideFactionGuide() {
  return (
    <div className="leader-container monsters">
      <h1>Monsters</h1>
      <LeaderCarousel leaders={factions.monsters.leaders} />
    </div>
  );
}
