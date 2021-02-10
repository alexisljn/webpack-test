// import "./style.css";
import "./style.scss"
import { getUsers } from "./components/usersAPI";

console.log("hello Webpack !");

const pureES6 = () => {
    return 'bonjour';
}

console.log(pureES6());


import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => {setState("CLICKED");getUsers().then(json => console.log(json)); }}>{state}</button>;
}

render(<App />, document.getElementById("root"));