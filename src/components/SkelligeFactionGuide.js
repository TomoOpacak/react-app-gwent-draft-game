import React from "react";
import { factions } from "../data/factions";
import LeaderCarousel from "./LeaderCarousel";

export default function SkelligeFactionGuide() {
  return (
    <div>
      <h1 className="leader-container skellige">Skellige</h1>
      <LeaderCarousel leaders={factions.skellige.leaders} />
    </div>
  );
}
