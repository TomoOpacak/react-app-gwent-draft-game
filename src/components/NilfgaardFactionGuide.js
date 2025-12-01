import React from "react";
import { factions } from "../data/factions";
import LeaderCarousel from "./LeaderCarousel";

export default function NilfgaardFactionGuide() {
  return (
    <div className="leader-container monsters">
      <h1 className="nilfgaard">Nilfgaardian Empire</h1>
      <LeaderCarousel leaders={factions.nilfgaard.leaders} />
    </div>
  );
}
