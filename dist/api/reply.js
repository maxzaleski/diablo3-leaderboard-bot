"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatIntoReply = void 0;
var entities_1 = require("../entities");
var leaderboard_1 = require("./leaderboard");
var separation = "-----------------------------------------------" +
    "-----------------------------------------------";
var rankEmoji = {
    1: ":trophy:",
    2: ":two:",
    3: ":three:",
    4: ":four:",
};
function getHeader(leaderboard) {
    return "\n" + separation + "\n:clipboard:  **__" + leaderboard + " Leaderboard__**\n" + separation + "\n\n";
}
function getFooter(leaderboard) {
    var url = leaderboard_1.getZeroEmpathyWebsiteLink(leaderboard);
    return "\n\n" + separation + "\n:loudspeaker:  For the complete leaderboard, visit " + url + "\n" + separation;
}
/** formatIntoReply formats the leaderboard request into an reply string. */
function formatIntoReply(request) {
    var leaderboard = entities_1.ReplyLeaderboardFormat[request.key];
    var reply = request.groups
        .map(function (group) {
        var groupHeader = rankEmoji[group.rank] +
            ("  **" + group.clearedLevel + " cleared in " + group.clearTime + " minutes**\n");
        var members = group.members
            .map(function (player) {
            return ("        :point_right:  " + player.playerString + "\n" +
                ("        :crossed_swords:  " + player.armouryUrl));
        })
            .join("\n");
        return groupHeader + members;
    })
        .join("\n");
    return getHeader(leaderboard) + reply + getFooter(leaderboard);
}
exports.formatIntoReply = formatIntoReply;
