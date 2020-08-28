"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var dotenv_1 = __importDefault(require("dotenv"));
var errors_1 = require("./errors");
var onMessage_1 = require("./handlers/onMessage");
var onState_1 = require("./handlers/onState");
// Discord bot client.
var bot = new discord_js_1.Client();
// Register handlers.
bot.on("ready", onState_1.onReady);
bot.on("message", onMessage_1.onMessage);
bot.on("disconnect", onState_1.onDisconnect);
bot
    .login((function () {
    var env = process.env;
    // Load  from ".env" file.
    if (env.ENV !== "prod")
        dotenv_1.default.config();
    // Validate environment variables:
    if (!env.BOT_TOKEN)
        throw new errors_1.MissingBotTokenError();
    if (!env.BLIZZARD_CLIENT_ID || !env.BLIZZARD_CLIENT_SECRET)
        throw new errors_1.MissingCredentialsError();
    if (!env.CURRENT_SEASON)
        throw new errors_1.MissingCurrentSeasonError();
    // Discord bot token.
    return env.BOT_TOKEN;
})())
    .catch(function (err) { return console.log("error during login: " + err); });
