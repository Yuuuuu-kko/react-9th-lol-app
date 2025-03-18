import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";
import React from "react";

// ChampDetatil - SSR
type Props = {
  params: {
    id: string;
  };
};

const ChampionDetailPage = async ({ params }: Props) => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${params.id}.json`,
    {
      cache: "no-store",
    }
  );
  const { data } = await response.json();
  const detailData = Object.values(data)[0] as ChampionDetail;

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <div className="flex items-center gap-6 mb-8">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${detailData.image.full}`}
          height={150}
          width={150}
          alt={detailData.name}
          className="rounded-lg border border-gray-500"
        />
        <div>
          <h1 className="text-4xl font-bold text-red-500">{detailData.name}</h1>
          <h2 className="text-gray-400 text-xl">{detailData.title}</h2>
          <p className="text-gray-300 mt-4">{detailData.blurb}</p>
        </div>
      </div>
      <h2 className="text-2xl text-red-500 font-bold mb-4">스킬</h2>
      <div className="grid grid-cols-4 gap-6">
        {detailData.spells.map((s) => (
          <div
            key={s.id}
            className="border border-gray-500 p-4 rounded-md text-center bg-gray-800 hover:border-red-500 transition"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${s.image.full}`}
              height={80}
              width={80}
              alt={s.name}
              className="mx-auto mb-2"
            />
            <div className="text-red-500 font-bold text-lg">{s.name}</div>
            <div className="text-gray-300 text-sm mt-2 max-h-24 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 px-2">
              {s.description.replace(/<[^>]+>/g, "")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionDetailPage;
