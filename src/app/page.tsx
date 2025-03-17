import Image from "next/image";
import lol1 from "../pubilc/1.jpg";
import lol2 from "../pubilc/2.jpg";
import lol3 from "../pubilc/3.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>리그 오브 레전드 정보 앱</h1>
      <p>Riot Games API를 환용하여 챔피언과 아이템 정보를 제공합니다.</p>
      <Link href={"/champions"}>
        <Image src={lol1} alt="asd" width={300} height={300} />
        <div>
          챔피언 불러오기 isr next , 챔피언 디테일은 ssr 여기에선 안들어간다
        </div>
      </Link>
      <Link href={"/items"}>
        <Image src={lol2} alt="asd" width={300} height={300} />
        <div>아이템 불러오기 ssg cache 포스머시기</div>
      </Link>
      <Link href={"/rotation"}>
        <Image src={lol3} alt="asd" width={300} height={300} />
        <div>로테이션 불러오기 csr 어렵</div>
      </Link>
    </>
  );
}
