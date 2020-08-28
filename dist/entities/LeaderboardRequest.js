"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardRequest = void 0;
var leaderboard_1 = require("../api/leaderboard");
var leaderboards_1 = require("./leaderboards");
var LeaderboardRequest = /** @class */ (function () {
    function LeaderboardRequest(groups, key) {
        this.groups = groups;
        this.key = key;
        this.completeLeaderboardUrl = leaderboard_1.getZeroEmpathyWebsiteLink(leaderboards_1.ZeroEmpathyLeaderboardFormat[key]);
    }
    return LeaderboardRequest;
}());
exports.LeaderboardRequest = LeaderboardRequest;
