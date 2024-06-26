import React, {useState} from "react";

const Async = () => {

    const [count, setCount] = useState(1);
    const [sum, setSum] = useState(0);

    // function increaseCount(){
    //     console.log("before increasing count", count);
    //     setCount(count+1); //setcount is async in nature
    //     console.log("after increasing count", count);
    // }

    // function increase1(value){
    //     setCount(count*value); 
    //     setSum(sum+count);
    // }

    function increase2(){
        setCount(count+5);
        setCount(count+2);
    }

    return (
        <>
            {/* <h1>Count: {count}</h1>
            <button onClick={increaseCount}>increase count</button> */}

            {/* <h1>count: {count}, sum: {sum}</h1>
            <button onClick={()=>increase1(100)}>increase</button>
            */}

            <h1>{count}</h1>
            <button onClick={increase2}>increase2</button>
        </>
    )
}

export default Async;