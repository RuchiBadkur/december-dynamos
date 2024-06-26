// js variable VS react state variable
// js variable will not re-render
// state variable re-render the whole componenet
import React, {useState} from 'react';

const Basics = () => {
    // let a = 10;
    const [a, setA]  = useState(10);
    // let b = useState(20);
    // console.log(b);
    // console.log(b[0], b[1]);
    // destructuring useState array = [variable, setVariable]
    // typeof useState is an Object
    // useState is returning an array [variable, function]
    // 

    function increase(){
        // a += 1;
        setA(a+1);
        console.log(a);
    }
    return(
        <>
            <h1>{a}</h1>
            <button onClick = {increase}>+</button>
        </>
    )


}


export default Basics;

// reload will set everything to default
// re-render will update the required part only