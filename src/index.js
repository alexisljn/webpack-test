// import "./style.css";
import moment from 'moment';
import regeneratorRuntime from "regenerator-runtime"; // Must be imported to use async/await

const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./components/usersAPI");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getUserModule().then( async ({ getUsers }) => {
        console.log(await getUsers());
    })
});
