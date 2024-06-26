import React, {useState} from 'react';
// uncontrolled components 
// one way communication and in which you can't controll the variables
const Form2 = () => {
    const [text, setText] = useState("");
    const [btnClick, setBtnClick] = useState("");

    const showText = (e) => {
        e.preventDefault();
        setBtnClick(text);
        setText("");
        // console.log(text);  
    }

    // const showText = (e) => {
    //     console.log(e);
    //     e.preventDefault();
    //     let p = document.querySelector("p");
    //     p.innerText = text;
    //     console.log(p);
    //     document.querySelector("input").value = "";
    // }

    return (
        <>
            <form onSubmit={showText}>
                {/* conrolled components : you have controll over the components variable, two way communication */}
                <input type='text' placeholder='type anything' onChange={(e)=>setText(e.target.value)} value={text}/>
                <button type='submit'>Show Text</button>
                
            </form>
                {/* {(btnClick) ? <p>hello{text}</p> : "" } */}
                <p>{btnClick}</p>
        </>
    )
}

export default Form2;