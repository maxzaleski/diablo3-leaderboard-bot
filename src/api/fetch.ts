import axios from "axios";
import { BlizzardLeaderboardFormat, LeaderboardKey } from "../entities";
import { BadCredentialsError } from "../errors";

/** fetchToken posts Blizzard credentials in order to obtain a bearer token. */
async function fetchToken(): Promise<string> {
  const CLIENT_ID = process.env.BLIZZARD_CLIENT_ID as string;
  const CLIENT_SECRET = process.env.BLIZZARD_CLIENT_SECRET as string;
  const url =
    "https://eu.battle.net/oauth/token?grant_type=client_credentials" +
    `&client_id=${CLIENT_ID}` +
    `&client_secret=${CLIENT_SECRET}`;

  const response = await axios.post(url, {});
  if (response.status !== 200) throw new BadCredentialsError();

  return response.data.access_token as string;
}

/** fetchLeaderboardDataFromBlizzard fetches the leaderboard's data. */
export async function fetchLeaderboardDataFromBlizzard(
  key: LeaderboardKey
): Promise<any[]> {
  const token = await fetchToken();
  const url =
    `https://eu.api.blizzard.com/data/d3/season/${process.env.CURRENT_SEASON}` +
    `/leaderboard/${BlizzardLeaderboardFormat[key]}` +
    `?access_token=${token}`;

  return (await axios.get(url)).data.row;
}
