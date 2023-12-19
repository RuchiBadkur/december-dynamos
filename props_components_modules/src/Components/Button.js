import React from 'react';

const Button = ({fruitName, price}) => {


    // console.log(props);
    // props = {fruitName: "Aayein"
    // price: "50"}
    // destructuring--
    // let{fruitName, price} = props

    // props.fruitName = "Mango"; //prop are js object but *read only*
    //Cannot assign to read only property 'fruitName' of object

    return(
        // <button>Aayein</button>
        <>
            {/* <button>{props.fruitName}</button> */}
            {/* <button>{fruitName}</button> */}
            <button>{fruitName}</button>
            <p>{price}</p>
        </>
    
    )
}

export default Button;