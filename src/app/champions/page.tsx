import { Champion } from "@/types/Champion";
import { log } from "console";
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

  console.log(championData);

  return (
    <div>
      {championData.map((champ) => {
        return (
          <div>
            <div>{champ.name}</div>
            <div>{champ.title}</div>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${champ.image.full}`}
              height={100}
              width={100}
              alt="챔프이미지"
            />
          </div>
        );
      })}
    </div>
  );
};

export default page;
