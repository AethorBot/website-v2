export const get = async () => {
  const commands = await fetch("https://aethor-api.tricked.pro/commands").then(
    (r) => r.json(),
  );
  return {
    body: commands.sort((a, b) => a.name.localeCompare(b.name)),
  };
};
