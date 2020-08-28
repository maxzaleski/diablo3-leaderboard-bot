export type LeaderboardKey =
  | "BARBARIAN"
  | "MONK"
  | "CRUSADER"
  | "NECROMANCER"
  | "WD"
  | "DH"
  | "WIZARD"
  | "TEAMS";

interface IKeyCollection {
  [key: string]: LeaderboardKey | undefined;
}

type LeaderboardCollection = {
  [key in LeaderboardKey]: string;
};

export const KeyFormat: IKeyCollection = {
  barb: "BARBARIAN",
  crusader: "CRUSADER",
  dh: "DH",
  monk: "MONK",
  necro: "NECROMANCER",
  teams: "TEAMS",
  wd: "WD",
  wizard: "WIZARD",
};

export const BlizzardLeaderboardFormat: LeaderboardCollection = {
  BARBARIAN: "rift-barbarian",
  CRUSADER: "rift-crusader",
  DH: "rift-dh",
  MONK: "rift-monk",
  NECROMANCER: "rift-necromancer",
  TEAMS: "",
  WD: "rift-wd",
  WIZARD: "wizard",
};

export const ZeroEmpathyLeaderboardFormat: LeaderboardCollection = {
  BARBARIAN: "barbarian",
  CRUSADER: "crusader",
  DH: "dh",
  MONK: "monk",
  NECROMANCER: "necromancer",
  TEAMS: "",
  WD: "wd",
  WIZARD: "wizard",
};

export const ReplyLeaderboardFormat: LeaderboardCollection = {
  BARBARIAN: "Barbarian",
  CRUSADER: "Crusader",
  DH: "Demon Hunter",
  MONK: "Monk",
  NECROMANCER: "Necromancer",
  TEAMS: "",
  WD: "Witch Doctor",
  WIZARD: "Wizard",
};
