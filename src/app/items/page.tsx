import { Item } from "@/types/Item";
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

  return <div></div>;
};

export default page;
