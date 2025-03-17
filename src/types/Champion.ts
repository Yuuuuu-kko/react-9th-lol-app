export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo;
  image: ChampionImg;
  tags: string[];
  partype: string;
  stats: ChampionStats;
};

type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

type ChampionImg = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};
