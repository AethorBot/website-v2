interface APIApplicationCommand {
  id: string;
  type: number;
  application_id: string;
  guild_id?: string;
  name: string;
  name_localized?: string;
  description: string;
  description_localized?: string;
  options?: any[];
  default_member_permissions: Permissions | null;
  dm_permission?: boolean;
  default_permission?: boolean;
  version: string;
}

export async function load({ params }) {
  const res: (APIApplicationCommand & Record<string, any>)[] = await fetch(
    "https://api.aethor.xyz/api/commands",
  )
    .then(
      (r) => r.json(),
    );
  const duped = [];
  const commands: (APIApplicationCommand & Record<string, any>)[] = [];
  if (res) {
    for (let command of res) {
      if (command.options?.[0]?.type == 1) {
        commands.push(
          //@ts-ignore -
          ...command.options.map((x) => ({
            ...x,
            name: `${command.name} ${x.name}`,
            //@ts-ignore -
            premium: command.premium,
          })),
        );
      } else {
        let dupe = res.find((x) =>
          x.name == command.name && x.type != command.type
        );
        if (dupe && !duped.includes(dupe.name)) {
          duped.push(dupe.name);
          commands.push({
            ...command,
            types: [dupe.type, command.type],
          });
        }
        if (duped.includes(command.name)) {
          continue;
        }
        commands.push(command);
      }
    }
  }
  return {
    commands,
  };
}
