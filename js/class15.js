const result = document.querySelector(".posts-container"); 

const getPosts = (url) => {
    let posts = [];
    const postRequest = new XMLHttpRequest();

    postRequest.onload = (data) => {
    
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                    posts = JSON.parse(data.target.response); 
                    console.log(posts);                   
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }     
    } 

    postRequest.open("GET", url, false);
    postRequest.send();
    return posts;
}

const printPosts = () =>{

  let posts = getPosts("https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts.json"); 


  let template = "";
  for(let post in posts){
    console.log(post)
    template +=`
            <div class="col">
                <div class="card">
                    <img src="https://picsum.photos/200/80" class="card-img-top" alt="${posts[post].title}">
                    <div class="card-body">
                        <h5 class="card-title">${posts[post].title}</h5>
                        <p class="card-text">${posts[post].body}</p>  
                        <small>${posts[post].date}</small>                  
                    </div>
                </div>
            </div>
          `;  
  }
//   posts.forEach(({title, body, date}) => {

    
//   });

  return template;
}

result.innerHTML = printPosts();

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