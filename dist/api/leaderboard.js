"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingularLeaderboard = exports.getTeamLeaderboard = exports.getZeroEmpathyWebsiteLink = exports.listAcceptedLeaderboards = void 0;
var entities_1 = require("../entities");
var fetch_1 = require("./fetch");
var mapping_1 = require("./mapping");
var reply_1 = require("./reply");
/** listAcceptedLeaderboards returns the accepted leaderboards as a formatted string. */
function listAcceptedLeaderboards() {
    var leaderboardList = Object.keys(entities_1.KeyFormat)
        .map(function (leaderboard, index) {
        var result = "* " + leaderboard;
        return index === 0 ? "     " + result : result;
    })
        .join("\n      ");
    return "Please adhere to the following list:\n```" + leaderboardList + "```";
}
exports.listAcceptedLeaderboards = listAcceptedLeaderboards;
/** getZeroEmpathyWebsiteLink returns the leaderboard's ZeroEmpathy (ZE) website link. */
function getZeroEmpathyWebsiteLink(leaderboard) {
    return "http://ranks.zeroempathy.org/s" + process.env.CURRENT_SEASON + "." + leaderboard;
}
exports.getZeroEmpathyWebsiteLink = getZeroEmpathyWebsiteLink;
/** getTeamLeaderboard returns information concerning team leaderboards as a formatted string. */
function getTeamLeaderboard() {
    var urls = ["2players", "3players", "4players"]
        .map(function (leaderboard) { return getZeroEmpathyWebsiteLink(leaderboard); })
        .map(function (url, index) {
        var result = index + 2 + " players: " + url;
        return index === 0 ? "        :point_right:  " + result : result;
    })
        .join("\n        :point_right:  ");
    return "Team leaderboards are no longer supported:\n" + urls;
}
exports.getTeamLeaderboard = getTeamLeaderboard;
/** getSingularLeaderboard returns information concerning a single leaderboard as a formatted string. */
function getSingularLeaderboard(key) {
    return __awaiter(this, void 0, void 0, function () {
        var rows, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch_1.fetchLeaderboardDataFromBlizzard(key)];
                case 1:
                    rows = (_a.sent()).slice(0, 3);
                    request = mapping_1.mapLeaderboardRequest(key, rows);
                    return [2 /*return*/, reply_1.formatIntoReply(request)];
            }
        });
    });
}
exports.getSingularLeaderboard = getSingularLeaderboard;
