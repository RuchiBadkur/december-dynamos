import React, {useState} from 'react';

const Objects = () => {

    const [coins, setCoins] = useState({gold: 0, silver: 0, bronze: 0});

    console.log(coins);

    const incGold = () => {
        // setCoins({gold:coins.gold+1, silver:coins.silver, bronze: coins.bronze});
        setCoins({...coins, gold: coins.gold+1});
        // setCoins(coins.gold+1);
        console.log(coins);
    }

    return (
        <>
            <h1>Gold: {coins.gold}, Silver: {coins.silver}, Bronze: {coins.bronze}</h1>
            <button onClick = {incGold}>gold</button>
            <button onClick = {()=>{setCoins({...coins, silver:coins.silver+1})}}>Silver</button>
            <button onClick = {()=>setCoins({...coins, bronze:coins.bronze+1})}>Bronze</button>
        </>
    )

}

export default Objects;