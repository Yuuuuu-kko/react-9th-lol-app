export interface Item {
  name: string;
  description: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: { base: number; purchasable: boolean; total: number; sell: number };
}
// 작은 사진
// 템 이름
// 템 설명
// 구매가
// 판매가
