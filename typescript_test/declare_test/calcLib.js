// 这段封装代码很经典， 整理 summary的时候，重写自己写一遍 ！！！
var Runoob;
(function (Runoob) {
    var calc = (function () {
        function calc() {
        }
    })
    calc.prototype.doSum = function (limit) {
        var sum = 0;
        for (var i = 0; i <= limit; i++) {
            sum += i;
        }
        return sum;
    }
    Runoob.calc = calc;
    return Runoob;
})(Runoob || (Runoob = {}));
