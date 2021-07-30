/// <reference path = "namespace_a.ts" />
var Drawing;
(function (Drawing) {
    var C = /** @class */ (function () {
        function C() {
        }
        C.prototype.draw = function () {
            console.log("C is drawn");
        };
        return C;
    }());
    Drawing.C = C;
})(Drawing || (Drawing = {}));
