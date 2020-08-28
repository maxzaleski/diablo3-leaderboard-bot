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
exports.MissingCurrentSeasonError = void 0;
/**
 * MissingCurrentSeasonError is returned when key "CURRENT_SEASON" is missing
 * from runtime environment.
 */
var MissingCurrentSeasonError = /** @class */ (function (_super) {
    __extends(MissingCurrentSeasonError, _super);
    function MissingCurrentSeasonError() {
        return _super.call(this, "missing key \"CURRENT_SEASON\" inside runtime environment") || this;
    }
    return MissingCurrentSeasonError;
}(Error));
exports.MissingCurrentSeasonError = MissingCurrentSeasonError;
