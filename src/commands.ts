import type { CommandGroup } from "@xmtp/message-kit";
import { handleEns } from "./handler/ens.js";

export const commands: CommandGroup[] = [
  {
    name: "Ens Domain Bot",
    description: "Register ENS domains.",
    triggers: ["/ens", "@ens", "@ensbot", "/help", "/register", "/check"],
    commands: [
      {
        command: "/register [domain]",
        handler: handleEns,
        description: "Register a domain.",
        params: {
          domain: {
            type: "string",
          },
        },
      },
      {
        command: "/help",
        handler: undefined,
        description: "Get help with the bot.",
        params: {},
      },
      {
        command: "/check [domain]",
        handler: handleEns,
        description: "Check if a domain is available.",
        params: {
          domain: {
            type: "string",
          },
        },
      },
    ],
  },
];