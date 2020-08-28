import { Group, LeaderboardKey, LeaderboardRequest, Player } from "../entities";

function find<T>(array: any[], key: string): T {
  const collection = array.find((obj) => obj.id === key);
  return Object.values(collection)[1] as T;
}

function mapPlayer(data: any): Player {
  return new Player(
    find<string>(data, "HeroBattleTag"),
    find<string>(data, "HeroId"),
    find<string>(data, "HeroClanTag")
  );
}

function mapGroup(row: any, rank: number): Group {
  const { player, data } = row;
  return new Group(
    rank + 1,
    mapPlayers(player),
    find<number>(data, "RiftLevel"),
    find<number>(data, "RiftTime")
  );
}

function mapPlayers(data: any[]): Player[] {
  return data.map((d: any) => mapPlayer(d.data));
}

function mapGroups(rows: any[]): Group[] {
  return rows.map((row, index) => mapGroup(row, index));
}

/** mapLeaderboardRequest maps the data retrieved from Blizzard's API into a usable `LeaderboardRequest` object. */
export function mapLeaderboardRequest(
  key: LeaderboardKey,
  rows: any[]
): LeaderboardRequest {
  return new LeaderboardRequest(mapGroups(rows), key);
}
