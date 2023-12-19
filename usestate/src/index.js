import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";


// ReactDom.render(<App />, document.getElementById("root")); v16

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)