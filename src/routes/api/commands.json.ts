export const GET = async () => {
  const commands = await fetch("https://api.aethor.xyz/api/commands")
    .then(
      (r) => r.json(),
    );
  return {
    body: commands.sort((a, b) => a.name.localeCompare(b.name)),
  };
};
