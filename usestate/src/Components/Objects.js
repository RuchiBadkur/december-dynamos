// object updates in useStates
// spread operator

import React, {useState} from "react";

const Objects = () => {
    const [coins, setCoins] = useState({gold:0, silver:0, bronze: 0})


    function incGold(){
        // problem with object updation -----

        //-- //setCoins(coins.gold+1); //getting output => coins = 1, it's setting coins(whole objects value to number through setCoins() function)
        // expected value => coins= {gold:1, silver:0, bronze:0}
        // coins = {gold:0, silver:0, bronze: 0}
        // coins = 1;

        // solution 1-----
        // {setCoins({gold:coins.gold+1, silver:coins.silver, bronze:coins.bronze});//in case of more than 3 or 4 keys we will use spread operator ...

        //solution 2 => Spread operator
        setCoins({...coins, gold:coins.gold+1});

    }

    // function incSilver(){
    //     // setCoins({gold:coins.gold, silver:coins.silver+1, bronze:coins.bronze})
    //     setCoins({...coins, silver: coins.silver+1});
    // }

    // function incBronze(){
    //     // setCoins({gold:coins.gold, silver:coins.silver, bronze:coins.bronze+1})
    //     setCoins({...coins, bronze:coins.bronze+1});
    // }
    
    return(
        <>
            <h1>Gold: {coins.gold}, Silver: {coins.silver}, Bronze: {coins.bronze}</h1>
            <button onClick={incGold}>Increment Gold</button>
            <button onClick={()=>setCoins({...coins, silver:coins.silver+1})}>Increment Gold</button>
            <button onClick={()=>setCoins({...coins, bronze: coins.bronze+1})}>Increment Gold</button>
        </>
    )
}

export default Objects;  