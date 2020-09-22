const States = {
  NorthCarolina: "northCarolina",
  Florida: "florida",
} as const;

type States = typeof States[keyof typeof States];

export { States };

const Issues = {
  Coronavirus: "coronavirus",
  CriminalJustice: "criminalJustice",
  Economy: "economy",
  Education: "education",
  Environment: "environment",
  GunRights: "gunRights",
  GayRights: "gayRights",
  HealthCare: "healthCare",
  Immigration: "immigration",
  RacialEquality: "racialEquality",
  WomensRights: "womensRights",
} as const;

type Issues = typeof Issues[keyof typeof Issues];

export { Issues };
