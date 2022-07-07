import commands from "./commands.json";
export const get = () => {
  return {
    body: commands.sort((a, b) => a.name.localeCompare(b.name)),
  };
};
