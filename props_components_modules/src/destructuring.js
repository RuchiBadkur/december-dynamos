// js Array destructuring
let arr = [10,20,30];

// let a = arr[0]; //10
// let b = arr[1]; //20
// let c = arr[3]; //30

// let[a,b,c] = arr;

// let[,,c] = arr;
// console.log(c); //30

// OBJECT DESTRUCTURING
// let obj = {
//     a:10,
//     b:20,
// }

// let a = obj.a; //10
// let b = obj.b; //20

// let {a:a, b:b} = obj;

// console.log(a,b); //10,20


// if keys and values are same
let a = 10;
let b = 20;

let obj = {
    // a:a,
    // b:b,
    a,b
}

console.log(obj); //{ a: 10, b: 20 }

