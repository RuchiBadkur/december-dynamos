// show text on submision => solu 2
import React, {useState} from "react";

const Form2Sol2 = () => {
    const [text, setText] = useState("");
    //const [btnClick, setBtnClick] = useState(false); //false
    const [btnClick, setBtnClick] = useState(""); 

    function implementSubmit(event){
        event.preventDefault(); //to prevent the default behaviour of the form
        // setBtnClick(true);
        setBtnClick(text);
        setText("");
    }
    
    return(
        <>
            <form onSubmit={implementSubmit}>
                <input type="text" placeholder="type anything" 
                    onChange={(e)=>{setText(e.target.value)}}
                    value={text}
                />  

                {/* onClick={showValue} */}
                <button type="submit">Submit</button>
            </form> 
            {/* {btnClick === true? <h1>{text}</h1> : ""} */}
            
            <h1>{btnClick}</h1>
        </>
    )
}

export default Form2Sol2;


// controlled and uncontrolled components