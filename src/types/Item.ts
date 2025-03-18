export type Item = {
  name: "제어 와드";
  description: "<mainText><stats></stats><br><br><active>사용</active><br>시야를 밝히고 적 투명 와드, 함정, <keywordStealth>위장</keywordStealth>한 적을 드러내는 제어 와드를 설치합니다.</mainText>";
  colloq: ";orange;control;ward";
  plaintext: "일정 지역 안의 와드와 투명 덫을 무력화시킵니다.";
  stacks: 2;
  consumed: true;
  consumeOnFull: true;
  image: {
    full: "2055.png";
    sprite: "item0.png";
    group: "item";
    x: 0;
    y: 336;
    w: 48;
    h: 48;
  };
  gold: { base: 75; purchasable: true; total: 75; sell: 30 };
  tags: ["Consumable", "Lane", "Stealth", "Vision"];
  maps: {
    "11": true;
    "12": false;
    "21": false;
    "22": false;
    "30": false;
    "33": false;
  };
  stats: {};
  effect: { Effect1Amount: "1"; Effect2Amount: "2" };
};
