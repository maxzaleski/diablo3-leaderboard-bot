"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entities_1 = require("../entities");
var leaderboard_service_1 = require("./leaderboard.service");
var seperation = '-----------------------------------------------' +
    '-----------------------------------------------';
var rankEmoji = {
    1: ':trophy:',
    2: ':two:',
    3: ':three:',
    4: ':four:',
};
function getHeader(leaderboard) {
    var result = "\n" + seperation + "\n" +
        (":clipboard:  **__" + leaderboard + " Leaderboard__**\n") +
        (seperation + "\n\n");
    return result;
}
function getFooter(leaderboard) {
    var url = leaderboard_service_1.getZeroEmpathyWebsiteLink(leaderboard);
    var result = "\n\n" + seperation + "\n" +
        (":loudspeaker:  For the complete leaderboard, visit " + url + "\n") +
        seperation;
    return result;
}
/** Formats the leaderboard request into an end-user-ready string */
function formatIntoReply(request) {
    var leaderboard = entities_1.ReplyLeaderboardFormat[request.key];
    var header = getHeader(leaderboard);
    var footer = getFooter(leaderboard);
    var reply = request.groups
        .map(function (group) {
        var groupHeader = rankEmoji[group.rank] +
            ("  **" + group.clearedLevel + " cleared in " + group.clearTime + " minutes**\n");
        var members = group.members
            .map(function (player) {
            var result = "        :point_right:  " + player.playerString + "\n" +
                ("        :crossed_swords:  " + player.armouryUrl);
            return result;
        })
            .join('\n');
        return groupHeader + members;
    })
        .join('\n');
    return header + reply + footer;
}
exports.formatIntoReply = formatIntoReply;
