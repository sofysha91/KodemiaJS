//! Crear usuario

const post = (user) => {

    const createRequest = new XMLHttpRequest();

    createRequest.onload = (data) => { 
        console.log(data.target.responseText);
    } 

    createRequest.open("POST", "https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts.json", false);
    createRequest.send(JSON.stringify(user));

}



/*for(let i = 1; i<=10; i++){
    const postTest = {
        title: `Post ${i}`,
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nesciunt?",
        date: "07/27/22"
    }
    post(postTest);
}*/

//Update data => PUT
const put = (data, dataid ) => {

    const putRequest = new XMLHttpRequest();

    putRequest.onload = (data) => { 
        console.log(data.target.responseText);
    } 

    putRequest.open("PUT", `https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts/${dataid}.json`, false);
    putRequest.send(JSON.stringify(data));

}

const newData = {
    title: `Post - Updated`,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nesciunt?",
    date: "07/27/22"
}

//put(newData, "-N81Ngc0GCHqs3aGp9-l");

//Update data => PATCH
const patch = (data, dataid ) => {

    const patchRequest = new XMLHttpRequest();

    patchRequest.onload = (data) => { 
        console.log(data.target.responseText);
    } 

    patchRequest.open("PATCH", `https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts/${dataid}.json`, false);
    patchRequest.send(JSON.stringify(data));

}

const updateData = {
    title: `Post - Updated Patch`,
    newfield: "Test"
}

//patch(updateData, "-N81Ngc0GCHqs3aGp9-l");

//Delete data => DELETE
const deleteData = (dataid ) => {

    const patchRequest = new XMLHttpRequest();

    patchRequest.onload = (data) => { 
        console.log(data.target.responseText);
    } 

    patchRequest.open("DELETE", `https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts/${dataid}.json`, false);
    patchRequest.send();

}

//deleteData("-N81Ngc0GCHqs3aGp9-l");