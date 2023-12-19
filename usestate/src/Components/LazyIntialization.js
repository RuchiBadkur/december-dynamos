import React,{useState} from "react";

// function hello(){
//     console.log("hello");
//     return 0;
// }

const LazyInitialization = () => {
    // const [count, setCount] = useState(0); //count = 0
    // const [count, setCount] = useState(hello());
    // useState(hello()); => this is getting executed everytime but not resetting the count variable 
    //problem: totally unnecessary calculation
    //problem: for very expensive calculations it will affect the code usestate(1!+2!+......)
    // solution: react has internally implemented a callback function so it will execute for only one time to intialize
    // useState(()=>{clg("hello") return 0})
    //way1:
    // const [count, setCount] = useState(()=>{
    //     console.log("hello");
    //     return 0;
    // });
    // way2:
    function hello(){
        console.log("hello");
        return 0;
    }
    const [count, setCount] = useState(()=>hello());
    // LAZY INITIALIZATION:
    // now it'initializing for only one time that's why it is called Lazy initialization
    // adding callback inside useState()

    return(
        <>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default LazyInitialization;

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }
// loop is running 5 times than why i is not becoming 0 again like that in useState is it is initialized with useState(0) and the whole component is loading again and again than why count is not becoming 0;
// ANS: Beacuse how the structure is built. (internally implemented)