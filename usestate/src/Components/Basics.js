import React, {useState} from 'react';
// {use state is a named export that's why we are importing it in {useState}} => export useState = () =>{}
// default exports are imported without {} => export default React;



let x = 1; //global varviable => able to setState

const Basics = () => {

    // useState is a React Hook that lets you add a state variable to your component.
    // const [state, setState] = useState(initialState);

    // state => current state , change
    let [a, func1] = useState(10);

    console.log(a); //undefined

    function increase(){
        func1(a+1);
    }
    function decrease(){
        func1(a-1);
    }

    // let x = 1; //state is not changing
    
    console.log("x " + x);

    function normalVar(){
        x = x+1;
        console.log("inside func x " + x);
    }


    return(
        <>
        <h1>{a}</h1>
        <button onClick={increase}>Increase</button>
        {(a>0)?
        (<button onClick={decrease}>Decrease</button>):
        <button disabled onClick={decrease}>Decrease</button>}
        <br/>

        <h1>{x}</h1>
        <button onClick={normalVar}>+</button>
        </>
    )




    // let a = 10; //normal variable

    // function increase(){
    //     a = a+1;
    //     console.log(a);
    // }

    // return (
    //     <>
    //         <h1>{a}</h1>
    //         <button onClick={increase}>Increase</button>
    //         <h1>{a}</h1>
    //     </>
    // )
}

export default Basics;

// render vs reload
// useState => whole component will reload