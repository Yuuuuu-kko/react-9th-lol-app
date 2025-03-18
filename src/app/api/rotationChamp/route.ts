export async function GET() {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": "RGAPI-421e5bea-7fac-4f30-8dd9-bb606a4decdd",
      },
    }
  );
  const data = await res.json();

  return Response.json(Object.values(data)[0]);
}
