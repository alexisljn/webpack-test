import React from "react";

import OneComponent from "./OneComponent";


class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nicknames: ['toto', 'momo', 'jojo']
        };
        console.log('MaiNComponentState', this.state);
    }


    render() {
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
            </div>
        )
    }

}

export default MainComponent;
