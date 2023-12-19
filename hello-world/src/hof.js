
// supported js methods 
// conditions => ternary ?:;
// Array Methods (HOF that return something) => map, reduce, filter

// map()
let arr = [10, 21, 35, 43, 50, 42];

let x = arr.map(item => item*2);
console.log(x); //[20, 42, 70, 86, 100, 84];

let z = arr.map(item => (item%2)=== 0);
console.log(z); //[true, false,false, false, true, true];


// filter()
let y = arr.filter(item => (item%2)=== 0);
console.log(y); //[10, 50, 42];
