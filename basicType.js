// boolean
var isDone = false;
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var color = 'blue';
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Heollo, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
// array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple 元组
var x;
x = ['hello', 10];
console.log(x[0].substr(1));
x[3] = 'world';
// console.log(x[5].toString());
// x[6] = true;
console.log(x);
// enum 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[2];
console.log(colorName);
// any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
// void
function warnUser() {
    alert('This is my warning message');
}
var unusable = undefined;
