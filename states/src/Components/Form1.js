import React, {useState} from 'react';

const Form1 = () => {

    const [text, setText] = useState("");

    const liveText = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }

    return(
        <>
            <form>
                {/* <input type="text" placeholder='Type anything...' onChange={(e)=>{document.querySelector("p").innerText = e.target.value}}/> */}
                <input type="text" placeholder='Type anything...' onChange={liveText}/>
                <p>{text}</p>
            </form>
        </>
    )
}

export default Form1;