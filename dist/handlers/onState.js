"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDisconnect = exports.onReady = void 0;
function onReady() {
    console.log("Bot is ready.");
}
exports.onReady = onReady;
function onDisconnect() {
    console.log("Bot is disconnected.");
}
exports.onDisconnect = onDisconnect;
