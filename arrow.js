// function doubleIt(num){
//     return num*2;
// }
// const result = doubleIt(50);
// //console.log(result);
const doubleIt44 = function(number){
    return number * 2;
}
const result1 = doubleIt44(80);
//console.log(result1);
const doubleIt22 = num => num*3;

const a = doubleIt22(56);
console.log(a);

const s = (x, y)=> x+y;
const add = s(7, 4);
console.log(add);

const t = () => 7;
const f = t();
console.log(f);

const sum = (c, d)=> c + d;
const sum1 = sum(45, 100);
console.log(sum1);

const math = (c, d) =>
{
    c = c*c;
    d = d*d;
    c = c*d;
    return c;
}

const sum2 = math(3, 5);
console.log(sum2);
