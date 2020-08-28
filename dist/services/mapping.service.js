"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Group_1 = require("../entities/Group");
var LeaderboardRequest_1 = require("../entities/LeaderboardRequest");
var Player_1 = require("../entities/Player");
function find(array, key) {
    var collection = array.find(function (obj) { return obj.id === key; });
    return Object.values(collection)[1];
}
function mapPlayer(data) {
    var battleTag = find(data, "HeroBattleTag");
    var heroId = find(data, "HeroId");
    var clanTag = find(data, "HeroClanTag");
    return new Player_1.Player(battleTag, heroId, clanTag);
}
function mapGroup(row, rank) {
    var player = row.player, data = row.data;
    var players = mapPlayers(player);
    var clearedLevel = find(data, "RiftLevel");
    var rawClearTime = find(data, "RiftTime");
    return new Group_1.Group(rank + 1, players, clearedLevel, rawClearTime);
}
function mapPlayers(data) {
    return data.map(function (d) { return mapPlayer(d.data); });
}
function mapGroups(rows) {
    return rows.map(function (row, index) { return mapGroup(row, index); });
}
/** Maps the data retrieved from Blizzard's API into a usable LeaderboardRequest object */
function mapLeaderboardRequest(rows, key) {
    return new LeaderboardRequest_1.LeaderboardRequest(mapGroups(rows), key);
}
exports.mapLeaderboardRequest = mapLeaderboardRequest;
