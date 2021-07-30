"use strict";
// 模块
// 模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。
// 大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。
// 此外还有有 SystemJs 和 Webpack。
exports.__esModule = true;
var b = require("./require_b");
var c = require("./require_c");
function drawAllLetters2(letter) {
    letter.draw();
}
drawAllLetters2(new b.B());
drawAllLetters2(new c.C());
