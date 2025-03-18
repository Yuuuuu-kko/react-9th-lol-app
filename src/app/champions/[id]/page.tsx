import { ChampionDetail } from "@/types/Champion";
import { log } from "console";
import Image from "next/image";
import React from "react";

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
  const detailData: ChampionDetail[] = Object.values(data);
  console.log(detailData);
  return (
    <div>
      <h1>{detailData[0].id}</h1>
      <div>{detailData[0].name}</div>
      <div>{detailData[0].title}</div>
      <div>{detailData[0].blurb}</div>
      <div>
        {detailData[0].spells.map((s) => {
          return (
            <div>
              <div>{s.name}</div>
              <div>{s.description}</div>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${s.image.full}`}
                height={100}
                width={100}
                alt={s.name}
                className="mx-auto mb-2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionDetailPage;
