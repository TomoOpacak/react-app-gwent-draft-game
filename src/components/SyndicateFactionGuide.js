import React from "react";
import { factions } from "../data/factions";
import LeaderCarousel from "./LeaderCarousel";

export default function SyndicateFactionGuide() {
  return (
    <div>
      <h1 className="leader-container syndicate">Syndicate</h1>
      <LeaderCarousel leaders={factions.syndicate.leaders} />
    </div>
  );
}
