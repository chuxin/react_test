var Runoob;
(function (Runoob) {
    var invoiceApp;
    (function (invoiceApp) {
        var Invoice = /** @class */ (function () {
            function Invoice() {
            }
            Invoice.prototype.calculateDiscount = function (price) {
                return price * .40;
            };
            return Invoice;
        }());
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = Runoob.invoiceApp || (Runoob.invoiceApp = {}));
})(Runoob || (Runoob = {}));
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
// 注意： 下面的命名空间的测试，一定要打包到一个js文件里，不然会报错   tsc --out app2.js app2.ts
// 命名空间 & 文件引用
/// <reference path = "./namespace_a.ts" />
/// <reference path = "./namespace_b.ts" />
/// <reference path = "./namespace_c.ts" />
function drawAllLetters(letter) {
    letter.draw();
}
drawAllLetters(new Drawing.B());
drawAllLetters(new Drawing.C());
// 命名空间嵌套命名空间
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(3));
