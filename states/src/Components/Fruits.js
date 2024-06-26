import React, {useState} from "react";

const Fruits = () => {

    const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
    const [fruit, setFruit] = useState("");

    
    const addFruit = (e) => {
        e.preventDefault();
        setFruits([...fruits, fruit]);
        console.log("hello");
        setFruit("");
        
    }
    

    return (
        <>
            <form onSubmit={addFruit}>
                <input type="text" placeholder="Enter a fruit" onChange={e=>setFruit(e.target.value)} value={fruit}/>
                <button type="submit">Submit</button>
            </form>

            {
                fruits.map((item)=>
                    <p>{item} </p>)
            }
            
        </>
    )
}

export default Fruits;