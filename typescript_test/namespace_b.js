/// <reference path = "namespace_a.ts" />
var Drawing;
(function (Drawing) {
    var B = /** @class */ (function () {
        function B() {
        }
        B.prototype.draw = function () {
            console.log("B is drawn");
        };
        return B;
    }());
    Drawing.B = B;
})(Drawing || (Drawing = {}));
