import { Champion } from "@/types/Champion";
import Image from "next/image";
import React from "react";

const page = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json",
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const { data } = await response.json();
  const championData: Champion[] = Object.values(data);

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h1 className="text-3xl font-bold text-red-500 mb-6">챔피언 목록</h1>

      <div className="grid grid-cols-4 gap-6">
        {championData.map((champ) => (
          <div
            key={champ.id}
            className="border border-gray-500 p-4 rounded-md text-center hover:border-red-500 transition"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champ.image.full}`}
              height={100}
              width={100}
              alt={champ.name}
              className="mx-auto mb-2"
            />
            <div className="text-red-500 font-bold text-lg">{champ.name}</div>
            <div className="text-gray-300 text-sm">{champ.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
