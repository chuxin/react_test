// 命名空间 & 文件引用
/// <reference path = "namespace_a.ts" />
/// <reference path = "namespace_b.ts" />
/// <reference path = "namespace_c.ts" />
function drawAllLetters(letter: Drawing.aaa) {
    letter.draw();
}
drawAllLetters(new Drawing.B());
drawAllLetters(new Drawing.C());

// 命名空间嵌套命名空间
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(3));

// 模块
// 模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。
// 大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。
// 此外还有有 SystemJs 和 Webpack。
import a = require("./require_a");
import b = require("./require_b");
import c = require("./require_c");
function drawAllLetters2(letter: a.aaa) {
    letter.draw();
}
drawAllLetters2(new b.B());
drawAllLetters2(new c.C());

