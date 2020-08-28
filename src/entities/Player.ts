export class Player {
  public readonly armouryUrl: string;
  public readonly playerString: string;

  constructor(
    readonly battleTag: string,
    readonly heroId: string,
    readonly clanTag: string
  ) {
    this.armouryUrl = this.setArmouryUrl();
    this.playerString = this.setPlayerString();
  }

  private setArmouryUrl(): string {
    const battleTag = this.battleTag.replace("#", "-");
    let url = `https://eu.battle.net/d3/en/profile/${battleTag}`;
    if (this.heroId) url += `/hero/${this.heroId}`;
    return url;
  }

  private setPlayerString(): string {
    let result = "";
    if (this.clanTag) result += `<${this.clanTag}> `;
    return (result += this.battleTag);
  }
}
