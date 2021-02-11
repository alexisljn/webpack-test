import React from "react";
import regeneratorRuntime from "regenerator-runtime"; // Must be imported to use async/await
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./usersAPI");

class AnotherComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    async onButtonClick() {
        const { getUsers } = await getUserModule();
        console.log(await getUsers());
    }

    render() {
        return (
            <button onClick={() => this.onButtonClick()}>Load Users</button>
        );
    }

}

export default AnotherComponent
