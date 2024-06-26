import React, {useState} from "react";

function hello(){
    console.log("hello")
    return 0
}


const Lazyinitialization = () => {

    // const [count, setCount] = useState(hello()); 
    
    const [count, setCount] = useState(()=>{
        console.log("hello");
        return 0;
    });

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>increase</button>
        </>
    )
}

export default Lazyinitialization;

// inside the useState the code that you write is supposed to work only for one time but for some reason it was executing again and again if we don't want to execute it again and again we can use callbacks but for all the general purpose like for any simple calculation we will not use the callbacks
// so now it is only initialising fo r one time it's so lazy that's why its called lazy  









// When we create a useState in React.
// Any variables you create or arguments you pass are created and evaluated every render.
// This is not a big deal when you have simple variables but suppose you’re passing something expensive like accessing localStorage.
// On each render it will access localStorage which effect overall React App Performance.

// function PrintUserName = () => {
//     const [name , setName] =      useState(window.localStorage.getItem('name')
// }
// This is what the lazy initialization is all about. It allows you to put that code in a function.

// function PrintUserName = () => {
//     const [name , setName] =  useState(() => window.localStorage.getItem('name')
// }
// Creating a function is fast. Even if what the function does is computationally expensive. So you only pay the performance penalty when you call the function. So if you pass a function to useState, React will only call the function when it needs the initial value (which is when the component is initially rendered).

// This is called “lazy initialization.” It’s a performance optimization.

