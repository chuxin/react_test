// 模块
// 模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。
// 大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。
// 此外还有有 SystemJs 和 Webpack。

// 下面两种命令编译出的 js 文件不一样，具体没去细研究
// 使用命令①：  tsc --module amd app3.ts
// 使用命令②：  tsc --module commonjs app3.ts

import a = require("./require_a");
import b = require("./require_b");
import c = require("./require_c");
function drawAllLetters2(letter: a.aaa) {
    letter.draw();
}
drawAllLetters2(new b.B());     // B is drawn -- require
drawAllLetters2(new c.C());     // C is drawn -- require
