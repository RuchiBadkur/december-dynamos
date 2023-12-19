// Array
import React, {useState} from "react";

const Fruits = () => {
    const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
    const [newFruit, setNewFruit] = useState("");

    // // split and join
    // let str = "apple"
    // console.log(str.split(", ")); // ["a", "p", "p", "l", "e"]

    // let arr = ["a", "p", "p", "l", "e"];
    // console.log(arr.join("")); //"apple"
    function addFruits(e){
        e.preventDefault();
        setFruits([...fruits, newFruit]);
        setNewFruit("");
    }

    // function updateFriuts(e){
    //     setNewFruit(e.target.value);
    // }

    // display the value of fruits in the end of arry 
    return(
        <>
            <form onSubmit={addFruits}>
                <input type="text" aria-placeholder="Enter a fruit" 
                onChange={(e)=>{setNewFruit(e.target.value)}}
                value={newFruit}
                />
                <button type="submit">Add</button>
            </form>
            <br />
            {/* {fruits.join(", ")} */}
            <ol>
            {
                fruits.map((item)=>(
                    <>
                        <li>{item}</li>
                    </>
                    
                ))
            }
            </ol>
        </>
    )
}

export default Fruits;

// https://react.dev/learn/updating-arrays-in-state
