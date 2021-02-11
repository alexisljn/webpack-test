// import "./style.css";
import "./style.scss"
import { getUsers } from "./components/usersAPI";
import "core-js";
import 'whatwg-fetch';
import MainComponent from "./components/MainComponent";
import regeneratorRuntime from "regenerator-runtime"; // Must be imported to use async/await

console.log("hello Webpack !");

const pureES6 = () => {
    return 'bonjour';
}

console.log(pureES6());


import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME");
    return <MainComponent/>;
}

render(<App />, document.getElementById("root"));
