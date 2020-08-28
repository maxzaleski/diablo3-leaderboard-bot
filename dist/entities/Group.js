"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group(rank, members, clearedLevel, rawClearTime) {
        this.rank = rank;
        this.members = members;
        this.clearedLevel = clearedLevel;
        this.rawClearTime = rawClearTime;
        this.clearTime = new Date(this.rawClearTime).toISOString().slice(14, -5);
    }
    return Group;
}());
exports.Group = Group;
