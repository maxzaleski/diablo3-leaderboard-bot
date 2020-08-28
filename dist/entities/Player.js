"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(battleTag, heroId, clanTag) {
        this.battleTag = battleTag;
        this.heroId = heroId;
        this.clanTag = clanTag;
        this.armouryUrl = this.setArmouryUrl();
        this.playerString = this.setPlayerString();
    }
    Player.prototype.setArmouryUrl = function () {
        var battleTag = this.battleTag.replace("#", "-");
        var url = "https://eu.battle.net/d3/en/profile/" + battleTag;
        if (this.heroId)
            url += "/hero/" + this.heroId;
        return url;
    };
    Player.prototype.setPlayerString = function () {
        var result = "";
        if (this.clanTag)
            result += "<" + this.clanTag + "> ";
        return (result += this.battleTag);
    };
    return Player;
}());
exports.Player = Player;
