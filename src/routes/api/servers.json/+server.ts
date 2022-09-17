import { json as json } from "@sveltejs/kit";

export async function GET({}) {
  const commands = (await fetch("https://api.aethor.xyz/api/servers.json")
    .then(
      (r) => r.json(),
    )).map((x) => {
      if (x?.icon && (!x.icon.includes("a_") && x.icon.includes("gif"))) {
        x.icon = x.icon.replace("gif", "png");
      }
      return x;
    }).filter((x) => x.id !== "110373943822540800");
  return json(commands);
}
