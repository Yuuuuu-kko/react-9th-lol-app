import Image from "next/image";
import lol1 from "../pubilc/1.jpg";
import lol2 from "../pubilc/2.jpg";
import lol3 from "../pubilc/3.jpg";
import Link from "next/link";

// 아래 return에서 메인으로 감싸는거 맞음?? 질문!
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500 mt-16">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="text-lg text-gray-400 mt-2">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>

      <div className="flex flex-col gap-6">
        <Link href="/champions" className="flex flex-col items-center">
          <Image src={lol1} alt="챔피언 정보" width={300} height={300} />
          <div className="mt-2 text-lg font-medium">
            챔피언 불러오기 ISR - 챔피언 디테일은 SSR 적용
          </div>
        </Link>

        <Link href="/rotation" className="flex flex-col items-center">
          <Image src={lol2} alt="로테이션 정보" width={300} height={300} />
          <div className="mt-2 text-lg font-medium">
            로테이션 불러오기 - CSR
          </div>
        </Link>

        <Link href="/items" className="flex flex-col items-center">
          <Image src={lol3} alt="아이템 정보" width={300} height={300} />
          <div className="mt-2 text-lg font-medium">아이템 불러오기 - SSG</div>
        </Link>
      </div>
    </main>
  );
}
