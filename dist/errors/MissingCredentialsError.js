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
exports.MissingCredentialsError = void 0;
/**
 * MissingCredentialsError is returned the key "BLIZZARD_CLIENT_ID" or
 * "BLIZZARD_CLIENT_SECRET" is missing from runtime environment.
 */
var MissingCredentialsError = /** @class */ (function (_super) {
    __extends(MissingCredentialsError, _super);
    function MissingCredentialsError() {
        return _super.call(this, "missing keys \"BLIZZARD_CLIENT_ID\" and/or \"BLIZZARD_CLIENT_SECRET\" " +
            "inside runtime environment") || this;
    }
    return MissingCredentialsError;
}(Error));
exports.MissingCredentialsError = MissingCredentialsError;
