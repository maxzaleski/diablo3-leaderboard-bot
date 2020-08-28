"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingBotTokenError = void 0;
/**
 * MissingBotTokenError is returned the key "BOT_TOKEN" is missing from runtime
 * environment.
 */
var MissingBotTokenError = /** @class */ (function (_super) {
    __extends(MissingBotTokenError, _super);
    function MissingBotTokenError() {
        return _super.call(this, "missing key \"BOT_TOKEN\" inside runtime environment") || this;
    }
    return MissingBotTokenError;
}(Error));
exports.MissingBotTokenError = MissingBotTokenError;
