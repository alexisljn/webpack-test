import React, { useState } from "react";


class OneComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { nickname } = this.props;
        return (
            <div>
                <p><strong>{nickname}</strong></p>
            </div>
        );
    }
}

export default OneComponent;
