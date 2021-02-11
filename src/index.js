import "./style.scss"
import "core-js";
import 'whatwg-fetch';
import MainComponent from "./components/MainComponent";

console.log("hello Webpack !");

const pureES6 = () => {
    return 'bonjour';
}

console.log(pureES6());


import React from "react";
import { render } from "react-dom";

function App() {
    return <MainComponent/>;
}

render(<App />, document.getElementById("root"));
