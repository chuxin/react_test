"use strict";
exports.__esModule = true;
// 命名空间 & 文件引用
/// <reference path = "namespace_a.ts" />
/// <reference path = "namespace_b.ts" />
/// <reference path = "namespace_c.ts" />
function drawAllLetters(letter) {
    letter.draw();
}
drawAllLetters(new Drawing.B());
drawAllLetters(new Drawing.C());
// 命名空间嵌套命名空间
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(3));
var b = require("./require_b");
var c = require("./require_c");
function drawAllLetters2(letter) {
    letter.draw();
}
drawAllLetters2(new b.B());
drawAllLetters2(new c.C());
