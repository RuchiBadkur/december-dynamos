import React, {useState} from 'react';

const CounterApp = () => {
    let [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    // function decrement(){
    //     setCount(count-1);
    // }

    // function reset(){
    //     setCount(0);
    // }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            {/* <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button> */}

            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button> {/** as we know anonymous functions does not get called automatically but its internally getting assigned to a variable and invoked by it(onClick)*/}
        </>
    )
}

export default CounterApp;