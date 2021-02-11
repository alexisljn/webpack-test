import React from "react";
import regeneratorRuntime from "regenerator-runtime"; // Must be imported to use async/await
import OneComponent from "./OneComponent";
// import AnotherComponent from "./AnotherComponent";
const getAnotherComponentModule = () => import(/* webpackChunkName: "anotherComponent" */ "./AnotherComponent");

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nicknames: ['toto', 'momo', 'jojo'],
            buttonActivated: false,
        };
        console.log('MaiNComponentState', this.state);
    }

    onButtonClick() {

        this.setState({
            buttonActivated: true
        });
    };

    async loadJSX() {
        const AnotherComponent = await getAnotherComponentModule();
        return <AnotherComponent/>;
    }


    render() {
        let AnotherComponent;

        if (this.state.buttonActivated) {
            (async () => {
                AnotherComponent  = await getAnotherComponentModule();
                // const jsxComponent = <AnotherComponent/>;
                console.log(AnotherComponent)
            })()
        }

        return (
            <div>
                <p>Main Component React</p>
                {this.state.nicknames.map((nickname, index) => {
                    return (
                        <div>
                            <OneComponent nickname={nickname}/>
                        </div>

                    )
                })}
                <p>If you click on the button below me you will trigger a new component</p>
                <button onClick={() => this.onButtonClick()}>Click</button>
                {this.state.buttonActivated
                    ?
                        // 'toto'
                        <AnotherComponent/>
                    :
                        null
                }
            </div>
        )
    }

}

export default MainComponent;
