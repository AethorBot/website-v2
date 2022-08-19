export const GET = async () => {
  const commands = await fetch("https://aethor-api.tricked.pro/api/commands")
    .then(
      (r) => r.json(),
    );
  return {
    body: commands.sort((a, b) => a.name.localeCompare(b.name)),
  };
};
