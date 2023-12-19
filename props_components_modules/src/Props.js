import React from "react";
import Button from './Components/Button';

const Props = () =>(
    <>
        <h1>Shiro</h1>
        <p>I am a fruit Lover</p>

        {/* <button>Apple</button>
        <button>Mango</button>
        <button>Banana</button> */}

        {/* <Button />
        <Button />
        <Button /> */}

        {/* using props */}
        <Button 
        fruitName = "Aayein"
        price = "50"
        />
        <Button 
        fruitName = "Apple"
        price = "50"
        />


    </>
)

export default Props;

// https://react.dev/learn/passing-props-to-a-component

// To pass props, add them to the JSX, just like you would with HTML attributes.
// To read props, use the function Avatar({ person, size }) destructuring syntax.
// You can specify a default value like size = 100, which is used for missing and undefined props.
// You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
// Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
// Props are read-only snapshots in time: every render receives a new version of props.
// You can’t change props. When you need interactivity, you’ll need to set state.

// ./ => inside the same folder
// ../ => to get outside the particular folder

// ../../public/y.js

// ERROR--------------------------
// npm-install -save-dev @babel/plugin-transform-private-property-in-object
// npm audit fix --force
//  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
//   library: 'digital envelope routines',
//   reason: 'unsupported',
//   code: 'ERR_OSSL_EVP_UNSUPPORTED'

// solution
// For Node.js v17+, you need to put the openssl-legacy-provider flag after your command, for example:
// replace "start": "react-scripts start" by "start": "react-scripts --openssl-legacy-provider start"
// replace "build": "react-scripts build" by "build": "react-scripts --openssl-legacy-provider build"
// -----------------------------------