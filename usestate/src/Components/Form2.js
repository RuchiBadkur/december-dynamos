// show text on submision => solu 1
import React, {useState} from "react";

const Form2 = () => {
    const [text, setText] = useState("");
    const [showtext, setShowtext] = useState("");


    function getValue(event){
        setText(event.target.value);
    }

    function showValue(event){
        event.preventDefault() // to prevent the default behaviour of the form
        setShowtext(text);
    }

    return(
        <>
            <form onSubmit={showValue}>
                <input type="text" placeholder="type anything" 
                    onChange={getValue}
                />  

                {/* onClick={showValue} */}
                <button type="submit">Submit</button>
            </form> 
            <h1>{showtext}</h1>
        </>
    )
}

export default Form2;