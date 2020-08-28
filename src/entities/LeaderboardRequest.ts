import { getZeroEmpathyWebsiteLink } from "../api/leaderboard";
import { Group } from "./Group";
import { LeaderboardKey, ZeroEmpathyLeaderboardFormat } from "./leaderboards";

export class LeaderboardRequest {
  public readonly completeLeaderboardUrl: string;

  constructor(readonly groups: Group[], readonly key: LeaderboardKey) {
    this.completeLeaderboardUrl = getZeroEmpathyWebsiteLink(
      ZeroEmpathyLeaderboardFormat[key]
    );
  }
}
