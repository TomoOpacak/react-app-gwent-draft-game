import React from "react";
import { factions } from "../data/factions";
import LeaderCarousel from "./LeaderCarousel";

export default function NorthernRealmsFactionGuide() {
  return (
    <div>
      <h1 className="leader-container northern-realms">Northern Realms</h1>
      <LeaderCarousel leaders={factions.northernrealms.leaders} />
    </div>
  );
}
