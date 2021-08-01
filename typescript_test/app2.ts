// 注意： 下面的命名空间的测试，一定要打包到一个js文件里，不然会报错   tsc --out app2.js app2.ts
// 命名空间 & 文件引用
/// <reference path = "./namespace_a.ts" />
/// <reference path = "./namespace_b.ts" />
/// <reference path = "./namespace_c.ts" />
function drawAllLetters(letter: Drawing.aaa) {
    letter.draw();
}
drawAllLetters(new Drawing.B());        // B is drawn
drawAllLetters(new Drawing.C());        // C is drawn

// 命名空间嵌套命名空间
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(3));      // 1.2000000000000002

