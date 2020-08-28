import { Message } from "discord.js";
import {
  getSingularLeaderboard,
  getTeamLeaderboard,
  listAcceptedLeaderboards,
} from "../api";
import { KeyFormat } from "../entities";
import { BadCredentialsError } from "./../errors/BadCredentialsError";

/** onMessage handles the "message" event. */
export async function onMessage(message: Message): Promise<void> {
  const { content } = message;

  // Prevents infinite feedback loop from the bot and or user messages wich aren't relevant.
  if (!content.startsWith("!lb")) return;

  const leaderboardKey = KeyFormat[content.split(" ")[1] as string];

  // Verifies if the user input is a leaderboard
  // if undefined, we notify the user
  if (!leaderboardKey) {
    message.reply(listAcceptedLeaderboards());
    return;
  }
  // Discord recently restricted the amount of characters a reply can contain.
  // Team leaderboards are too large to be replied in full.
  if (leaderboardKey === "TEAMS") {
    message.reply(getTeamLeaderboard());
    return;
  }

  // Process message.
  let msg: any;
  try {
    msg = await getSingularLeaderboard(leaderboardKey);
  } catch (err) {
    msg =
      err instanceof BadCredentialsError
        ? "Blizzard credentials are invalid."
        : "An internal error has occured.";
    console.error(err);
  }

  // Reply to message.
  message.reply(msg);
}
