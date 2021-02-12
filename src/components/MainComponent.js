import React, {Suspense} from "react";
import OneComponent from "./OneComponent";
const AnotherComponent = React.lazy(() => import(/* webpackChunkName: "anotherComponent" */ './AnotherComponent'));


class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nicknames: ['toto', 'momo', 'jojo'],
            buttonActivated: false,
        };
    }

    onButtonClick() {

        this.setState({
            buttonActivated: true
        });
    };


    render() {

        return (
            <div>
                <p>Main Component React</p>
                {this.state.nicknames.map((nickname, index) => {
                    return (
                        <div>
                            <OneComponent key={index} nickname={nickname}/>
                        </div>

                    )
                })}
                <p>If you click on the button below me you will trigger a new component</p>
                <button onClick={() => this.onButtonClick()}>Click</button>
                {this.state.buttonActivated
                    ?
                        <Suspense fallback={<div>Loading...</div>}>
                            <AnotherComponent/>
                        </Suspense>
                    :
                        null
                }
            </div>
        )
    }

}

export default MainComponent;
