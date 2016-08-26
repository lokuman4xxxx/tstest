// boolean
let isDone: boolean = false;
// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// string
let color: string = 'blue';
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Heollo, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; 
// tuple 元组
let x: [string, number];
x = ['hello',10];
console.log(x[0].substr(1));
x[3] = 'world';
// console.log(x[5].toString());
// x[6] = true;
console.log(x);
// enum 枚举
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);
// any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
// void
function warnUser(): void {
	alert('This is my warning message');
}
let unusable: void = undefined;