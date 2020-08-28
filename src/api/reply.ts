import { LeaderboardRequest, ReplyLeaderboardFormat } from "../entities";
import { getZeroEmpathyWebsiteLink } from "./leaderboard";

const separation =
  "-----------------------------------------------" +
  "-----------------------------------------------";

const rankEmoji: { [key: number]: string } = {
  1: ":trophy:",
  2: ":two:",
  3: ":three:",
  4: ":four:",
};

function getHeader(leaderboard: string): string {
  return `\n${separation}\n:clipboard:  **__${leaderboard} Leaderboard__**\n${separation}\n\n`;
}

function getFooter(leaderboard: string): string {
  const url = getZeroEmpathyWebsiteLink(leaderboard);
  return `\n\n${separation}\n:loudspeaker:  For the complete leaderboard, visit ${url}\n${separation}`;
}

/** formatIntoReply formats the leaderboard request into an reply string. */
export function formatIntoReply(request: LeaderboardRequest): string {
  const leaderboard = ReplyLeaderboardFormat[request.key];
  const reply = request.groups
    .map((group) => {
      const groupHeader =
        rankEmoji[group.rank] +
        `  **${group.clearedLevel} cleared in ${group.clearTime} minutes**\n`;

      const members = group.members
        .map((player) => {
          return (
            `        :point_right:  ${player.playerString}\n` +
            `        :crossed_swords:  ${player.armouryUrl}`
          );
        })
        .join("\n");

      return groupHeader + members;
    })
    .join("\n");

  return getHeader(leaderboard) + reply + getFooter(leaderboard);
}
