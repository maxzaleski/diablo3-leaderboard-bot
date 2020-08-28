import { Player } from "./Player";

export class Group {
  public readonly clearTime: string;

  constructor(
    readonly rank: number,
    readonly members: Player[],
    readonly clearedLevel: number,
    private readonly rawClearTime: number
  ) {
    this.clearTime = new Date(this.rawClearTime).toISOString().slice(14, -5);
  }
}
