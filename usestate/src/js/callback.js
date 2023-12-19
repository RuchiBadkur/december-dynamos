// function hello(fun1){
//     fun1();
// }

// // function hii(){
// //     console.log("hey guys"); //1. hey guys
// // }
// // let x = hii(); //undefined
// // console.log("ans", x); // 2. ans undefined 


// function hii(){
//     console.log("hey guys"); //1. hey guys
//     return 1000;
// }

// let x = hii(); //1000
// console.log("ans", x); // 2. ans 1000 

// -----------------------------------------------

// function hello(){    //hello is just a variable name which is storing this function, function is a value
//     console.log("Hey");
// }

// hello();//undefined //hello is just a variable name which is storing this function, function is a value
// // hello will hold the refrence of this function

// console.log(hello); // function hello(){clg("hey")};

// let y = hello; //whole function

// ---------------------------------

// function hello(n){ //hello(7)
//     console.log(n); //1. 7
// }

// hello(3+4);//this operation will execute here only then it will send this value to the hello function(7)

// ------------------------------------

// function hello(n, fun1){ //hello(100, 1000)
//     console.log(n); //2. 100
//     fun1(); //3. fun1 is not a function
// }

// let a = 100;
// function hii(){
//     console.log("Hey Guys"); //1. Hey Guys
//     return 1000;
// }

// hello(a, hii()); //hello(100, 1000); //hii() will execute first and then the value will be send to hello function(1000);

// -------------------------------------------------

// Anonymous function
// you could not call it until and unless it has some name or it is assigned to a variable
// let a = 10;
// let b = 20;
// (a,b) => {
//     console.log(a+b);
// };(a,b)

// function hello(fun1){ //fun1 = undefined
//     fun1(); // fun1 is not a function
// }
// function hii(){
//     console.log("hii guys");//step 2: print hii guys and return undefined
// }

// hello(hii()); //step 1: hii will execute here only and send the value which hii has returned

// ----------------------
// Anonymous function
// you could not call it until and unless it has some name or it is assigned to a variable
// ** is Anonymous function ko kya naam dun ? ** :)

// function hello(n, f1){ //7, ()=>clg(3+4)
//     console.log(n); //1. 7
//     f1(); // f1 holds the whole anonymous function and then we are calling it through this f1 variable
//     // const f1 = () => clg(3+4);
//     //2. 7
// }

// hello(3+4, ()=>console.log(3+4)); //7, ()=>clg(3+4)
                                  // anonymous fun can not be called automatically, we have to assign it to a name

// --------------------------------------------

//  Callback , Anonymous function

// function hello(fun1){ //step 3: ()=>sum(10,20), whole function as fun1 (refrencing to the whole function)
// // we assigned a variable( fun1 name) to our anonymous function 
//     fun1();//step 4: calling the anonymous function through refrence variable fun1
    
// }

// const sum = (a,b) => { //step 5: sum got invoked by invoking fun1
//     console.log(a,b); //step 6: print 10, 20 
//     //return undefined
// }

// hello(()=>sum(10,20)); //step 1: hello contains an anonymous function like:
//         // function(){
//         //     sum(10, 20)
//         // }
// // until and unless it has not given a name it will not execute 

// // step 2 : passing the whole anonymous function

// ----------------------------------------