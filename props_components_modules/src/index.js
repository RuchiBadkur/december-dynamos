import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"; //complete file is executable rather one or two components

import App from "./App";

// ReactDom.render(<App />, document.getElementById("root") );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// render will turn the component into html and send it to html file

// function vs component

// function function hello(){
//     return "hello";
// }
// hello();

// function name always starts with small letters
// function will return datatypes

// function hello(){
//     return "hello";
// }
// hello();


// component's sole purpose is to create ui designinig
// will always return (html like syntax) something which helps developer to create UI.
// function Hello(){
//     return (
//         <div>
//             <h1>Hello world</h1>
//             <p>paragraph</p>
//         </div>
//     )
// }

// const Hello = () =>{
//     return <h1>Hello world</h1>
// }


// hot reloading

// JSX => javascript + html
// {} => inside these {} whatever you write will be treated as javascript

// className => goodpractice-> same as component name

// textAlign , backgroundColor, className etc.
// style = {{color:"red", textAlign="center"}}
// {->jsx, {->object}}

// RULES----
// 1.not to write any logic in index.js
// make another file -> App.js
// 2.every file should have -> import React from "react"

