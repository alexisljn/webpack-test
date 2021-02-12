import "./style.scss"
import "core-js";
import 'whatwg-fetch';
const MainComponent = React.lazy(() => import(/* webpackChunkName: "mainComponent" */ './components/MainComponent'));

console.log("hello Webpack !");

const pureES6 = () => {
    return 'bonjour';
}

console.log(pureES6());


import React, {Suspense} from "react";
import { render } from "react-dom";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MainComponent/>
        </Suspense>
    )
}

render(<App />, document.getElementById("root"));
