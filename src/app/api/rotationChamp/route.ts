export async function GET() {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": `${process.env.NEXT_PUBILC_RIOT_API_KEY}`,
      },
    }
  );
  const data = await res.json();

  return Response.json(Object.values(data)[0]);
}
