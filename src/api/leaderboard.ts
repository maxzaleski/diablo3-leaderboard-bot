import { KeyFormat, LeaderboardKey } from "../entities";
import { fetchLeaderboardDataFromBlizzard } from "./fetch";
import { mapLeaderboardRequest } from "./mapping";
import { formatIntoReply } from "./reply";

/** listAcceptedLeaderboards returns the accepted leaderboards as a formatted string. */
export function listAcceptedLeaderboards(): string {
  const leaderboardList = Object.keys(KeyFormat)
    .map((leaderboard, index) => {
      const result = `* ${leaderboard}`;
      return index === 0 ? `     ${result}` : result;
    })
    .join("\n      ");
  return `Please adhere to the following list:\n\`\`\`${leaderboardList}\`\`\``;
}

/** getZeroEmpathyWebsiteLink returns the leaderboard's ZeroEmpathy (ZE) website link. */
export function getZeroEmpathyWebsiteLink(leaderboard: string): string {
  return `http://ranks.zeroempathy.org/s${process.env.CURRENT_SEASON}.${leaderboard}`;
}

/** getTeamLeaderboard returns information concerning team leaderboards as a formatted string. */
export function getTeamLeaderboard(): string {
  const urls = ["2players", "3players", "4players"]
    .map((leaderboard) => getZeroEmpathyWebsiteLink(leaderboard))
    .map((url, index) => {
      const result = `${index + 2} players: ${url}`;
      return index === 0 ? `        :point_right:  ${result}` : result;
    })
    .join("\n        :point_right:  ");
  return `Team leaderboards are no longer supported:\n${urls}`;
}

/** getSingularLeaderboard returns information concerning a single leaderboard as a formatted string. */
export async function getSingularLeaderboard(
  key: LeaderboardKey
): Promise<string> {
  const rows = (await fetchLeaderboardDataFromBlizzard(key)).slice(0, 3);
  const request = mapLeaderboardRequest(key, rows);
  return formatIntoReply(request);
}
