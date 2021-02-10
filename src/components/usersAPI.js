const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

export async function getUsers() {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(1);
    //     }, 1000);
    // });

    // return fetch(ENDPOINT)
    //     .then(response => {
    //         if (!response.ok) throw Error(response.statusText);
    //         return response.json();
    //     })
    //     .then(json => json);



    const response = await fetch(ENDPOINT);
    return await response.json();
}
