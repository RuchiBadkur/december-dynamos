import React, {useState} from 'react';

const CounterApp = () => {

    let [count, setCount] = useState(0);

    // const increase = () => {
    //     setCount(count+1);
    // }

    // const decrease = () => {
    //     (count > 0) ? setCount(count-1) : (alert("You can't decrease the count"))
    // }

    // const reset = () => {
    //     setCount(0);
    // }

    return(
        <>
            <h2>{count}</h2>
            {/* <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button> */}
            <button onClick={() => setCount(count+1)}>Increase</button>
            <button onClick={() => setCount(count-1)}>Decrease</button>
            <button onClick={() => {setCount(0)}}>Reset</button> 
            
        </>
    )
}

export default CounterApp;