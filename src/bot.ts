import { Client } from "discord.js";
import dotenv from "dotenv";
import {
  MissingBotTokenError,
  MissingCredentialsError,
  MissingCurrentSeasonError,
} from "./errors";
import { onMessage } from "./handlers/onMessage";
import { onDisconnect, onReady } from "./handlers/onState";

// Discord bot client.
const bot = new Client();

// Register handlers.
bot.on("ready", onReady);
bot.on("message", onMessage);
bot.on("disconnect", onDisconnect);

bot
  .login(
    (() => {
      const { env } = process;
      // Load  from ".env" file.
      if (env.ENV !== "prod") dotenv.config();

      // Validate environment variables:
      if (!env.BOT_TOKEN) throw new MissingBotTokenError();
      if (!env.BLIZZARD_CLIENT_ID || !env.BLIZZARD_CLIENT_SECRET)
        throw new MissingCredentialsError();
      if (!env.CURRENT_SEASON) throw new MissingCurrentSeasonError();

      // Discord bot token.
      return env.BOT_TOKEN as string;
    })()
  )
  .catch((err) => console.log(`error during login: ${err}`));
