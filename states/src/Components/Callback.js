function hello(n, fun1){
    
    console.log(n);
    fun1();
}

let a = 100;
function hii(){ 
    console.log("Hey Guys");
    return 1000;
}

hello(a, hii());
// n = 100
// fun1 = 1000
// give error (how can you call a primitive(1000 a number type variable))

hello(a, hii);
// n = 100
// fun1 = function hii(){ 
    //     console.log("Hey Guys");
    //     return 1000;
    // }


// anonymous, arrow functions can not be called without giving a name to it
// useful when you want to pass args without calling the function
function fun2(fun3){
    fun3();
}

const sum = (a,b) => {
    console.log(a,b);
}

fun2(()=>sum(10,20));