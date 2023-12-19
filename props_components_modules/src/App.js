import React from 'react';
// import './style.css';
import Props from './Props';


const App=()=>(
    <div>
        <Props />
    </div>
)

export default App;

// // function App() {
// //     return (
// //         <>
// //             <h1>Hello</h1>
// //         </>
// //     );
// // }

// // arrow functions are not hoisted by default
// // functions with function keyword are fully hoisted 

// const App=()=>{
//     let a = 10;

//     let h1style = {
//         // color: "cyan",
//         // backgroundColor: "thistle",
//         // textAlign: "center"
//     }

//     let str = "{}";

//     return (
//         <div className="hello">
//             <h1 style={h1style}>Hello world!</h1>
//             <p style={{backgroundColor:"red"}}>{2+3}</p>
//             <p>{str + a}</p>
//         </div>
//     )
// }
