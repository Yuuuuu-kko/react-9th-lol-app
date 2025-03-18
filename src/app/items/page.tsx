import { Item } from "@/types/Item";
import Image from "next/image";
import React from "react";

// ItemList - SSG
const ItemListPage = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const { data } = await response.json();
  const itemData: Item[] = Object.values(data);

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h1 className="text-3xl font-bold text-red-500 mb-6">아이템 목록</h1>
      <div className="grid grid-cols-5 gap-6">
        {itemData.map((item) => (
          <div
            key={item.name}
            className="border border-gray-500 p-4 rounded-md text-center hover:border-red-500 transition"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
              height={80}
              width={80}
              alt={item.name}
              className="mx-auto mb-2"
            />
            <div className="text-red-500 font-bold text-lg">{item.name}</div>
            <div className="text-green-400">가격: {item.gold.total} G</div>
            <div className="text-yellow-400">판매: {item.gold.sell} G</div>
            {/* HTML태그 제거 ,스크롤 */}
            <div className="text-gray-300 text-sm mt-2 max-h-24 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 px-2">
              {item.description.replace(/<[^>]+>/g, "")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListPage;
