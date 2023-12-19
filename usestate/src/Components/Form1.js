import React, { useState } from "react";
// live typing through input and para using useState
// 1. select input element
// 2. get value from that element and 
// 3. show in the paragraph




const Form1 = () => {
    const [text, setText] = useState("");

    // every time you change the value this onChange will be trigerred and this function will change the value(state of the variable which we want to show)
    function getValue(event){
        // console.log("I am called");
        // console.log(event); //event is an object, which will give you all the information of the event that is acting on this particular input

        // event={target=> value is attribute}

        // selecting particular element
        //console.log(event.target); //<input type="text" placeholder="Type anything......" />

        //console.log(event.target.value);//h
                                        //hi
                                        //hih
                                        //hihihihahahhi.....
        // want to store this in a variable so that we can so it in the paragraph
        // use useState  => component will load
        setText(event.target.value);
        
        // resume 2:11:00*****************************************

        


    }

    return(
        <>
            <form>
                <input type="text" placeholder="Type anything......" 
                onChange={getValue}
                />
                <p>{text}</p>
            </form>
        </>
    )
}

export default Form1;