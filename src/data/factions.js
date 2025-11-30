export const factions = {
  monsters: {
    name: "Monsters",
    leaders: [
      {
        id: "eredin",
        name: "Eredin",
        image: "/assets/cards/leaders/leader_eredin.webp",
        cards: [
          { name: "Wild Hunt Rider", rarity: "common" },
          { name: "Wild Hunt Rider", rarity: "common" },
          { name: "Wild Hunt Bruiser", rarity: "common" },
          { name: "Wild Hunt Navigator", rarity: "rare" },
          { name: "Naglfar Crew", rarity: "rare" },
          { name: "Naglfar Crew", rarity: "rare" },
          { name: "Caranthir", rarity: "epic" },
          { name: "Nithral", rarity: "epic" },
          { name: "Winter Queen", rarity: "epic" },
          { name: "Auberon Conqueror", rarity: "legendary" },
          { name: "Imlerith", rarity: "legendary" },
          { name: "Ard Gaeth", rarity: "legendary" },
        ],
      },
      {
        id: "unseen elder",
        name: "Unseen Elder",
        image: "/assets/cards/leaders/leader_unseen_elder.webp",
        cards: [
          // Common
          { name: "Garkain", rarity: "common" },
          { name: "Garkain", rarity: "common" },
          { name: "Alp", rarity: "common" },

          // Rare
          { name: "Nekurat", rarity: "rare" },
          { name: "Nekurat", rarity: "rare" },
          { name: "Bruxa", rarity: "rare" },

          // Epic
          { name: "Queen of Night", rarity: "epic" },
          { name: "Gael", rarity: "epic" },
          { name: "The Beast", rarity: "epic" },

          // Legendary
          { name: "Crimson Curse", rarity: "legendary" },
          { name: "Regis Reborn", rarity: "legendary" },
          { name: "Orianna", rarity: "legendary" },
        ],
      },
    ],
  },
  northernrealms: {
    name: "Northern Realms",
    leaders: [
      {
        id: "foltest",
        name: "King Foltest",
        image: "/assets/cards/leaders/leader_foltest.webp",
        cards: [
          { name: "Trebuchet Big Damage", rarity: "common" },
          { name: "Ballista", rarity: "common" },
          { name: "Trebuchet", rarity: "common" },
          { name: "Ballista", rarity: "rare" },
          { name: "Trebuchet", rarity: "rare" },
          { name: "Ballista", rarity: "rare" },
          { name: "Ballista", rarity: "epic" },
          { name: "Trebuchet", rarity: "epic" },
          { name: "Ballista", rarity: "epic" },
          { name: "Ballista", rarity: "legendary" },
          { name: "Trebuchet", rarity: "legendary" },
          { name: "Ballista", rarity: "legendary" },
        ],
      },
      {
        id: "radovid",
        name: "King Radovid",
        image: "/assets/cards/leaders/leader_radovid.webp",
        cards: [
          { name: "Redanian Knight", rarity: "common" },
          // ... 12 cards
        ],
      },
    ],
  },

  nilfgaard: {
    name: "Nilfgaard Empire",
    leaders: [
      {
        id: "emhyr",
        name: "Emhyr var Emreis",
        image: "/images/emhyr.png",
        cards: [
          { name: "Nausicaa Cavalry", rarity: "rare" },
          // ... 12 cards
        ],
      },
      {
        id: "morvran",
        name: "Morvran Voorhis",
        image: "/images/morvran.png",
        cards: [
          { name: "Black Infantry Archer", rarity: "common" },
          // ... 12 cards
        ],
      },
    ],
  },
};
