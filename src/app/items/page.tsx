import { Item } from "@/types/Item";
import Image from "next/image";
import React from "react";

//아이템 목록 SSG
const page = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    {
      cache: "force-cache",
    }
  );
  const { data } = await response.json();
  const itemData: Item[] = Object.values(data);

  console.log(itemData);
  // tem name 조잡한거 없애서 다시 기입 정규식? HTML태그 제거
  return (
    <div>
      <h1>아이템 목록</h1>
      <div>
        {itemData.map((item) => (
          <div
            key={item.name}
            className="border border-gray-500 p-4 rounded-md text-center hover:border-red-500 transition"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
              height={100}
              width={100}
              alt={item.name}
              className="mx-auto mb-2"
            />
            <div className="text-red-500 font-bold text-lg">{item.name}</div>
            <div className="text-gray-300 text-sm">{item.description}</div>
            <div className="text-gray-300 text-sm">{item.gold.total}</div>
            <div className="text-gray-300 text-sm">{item.gold.sell}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
