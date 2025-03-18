"use client";

import { Champion } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// ChampionRotation - CSR fetchRotation

// 로테이션 챔프 키값
const ChampionRotation = () => {
  const {
    data: championRotationList,
    isPending: isPendingRotation,
    isError: isErrorRotation,
  } = useQuery({
    queryKey: ["RotaionChampion"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/rotationChamp");
      const data: number[] = await res.json();
      return data;
    },
  });

  // 챔프 리스트
  const {
    data: championList,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["Champion"],
    queryFn: async () => {
      const res = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
      );
      const { data } = await res.json();
      const championData: Champion[] = Object.values(data);
      return championData;
    },
  });

  if (isPending || isPendingRotation) {
    return <div>로딩중입니다...</div>;
  }

  if (isError || isErrorRotation) {
    return <div>오류가 발생했습니다...</div>;
  }

  const weekCampion = championList.filter((champion) =>
    championRotationList?.includes(parseInt(champion.key))
  );

  console.log(championRotationList);
  console.log(championList);

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h1 className="text-3xl font-bold text-red-500 mb-6">
        로테이션 챔피언 목록
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {weekCampion.map((champ) => (
          <Link href={`/champions/${champ.id}`}>
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
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ChampionRotation;
