"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapLeaderboardRequest = void 0;
var entities_1 = require("../entities");
function find(array, key) {
    var collection = array.find(function (obj) { return obj.id === key; });
    return Object.values(collection)[1];
}
function mapPlayer(data) {
    return new entities_1.Player(find(data, "HeroBattleTag"), find(data, "HeroId"), find(data, "HeroClanTag"));
}
function mapGroup(row, rank) {
    var player = row.player, data = row.data;
    return new entities_1.Group(rank + 1, mapPlayers(player), find(data, "RiftLevel"), find(data, "RiftTime"));
}
function mapPlayers(data) {
    return data.map(function (d) { return mapPlayer(d.data); });
}
function mapGroups(rows) {
    return rows.map(function (row, index) { return mapGroup(row, index); });
}
/** mapLeaderboardRequest maps the data retrieved from Blizzard's API into a usable `LeaderboardRequest` object. */
function mapLeaderboardRequest(key, rows) {
    return new entities_1.LeaderboardRequest(mapGroups(rows), key);
}
exports.mapLeaderboardRequest = mapLeaderboardRequest;
