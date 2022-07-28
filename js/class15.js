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
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }     
    } 

    postRequest.open("GET", url, false);
    postRequest.send();
    return posts.posts;
}

const printPosts = () =>{

  let posts = getPosts("https://dummyjson.com/posts"); 

  let template = "";
  posts.forEach(({title, body, tags}) => {
    
    let tagHTML = tags.reduce((html, tag) =>{
        html += `<span class="badge bg-primary me-2">${tag}</span>`;
        return html;
    }, "");

    template +=`
            <div class="col">
                <div class="card">
                    <img src="https://picsum.photos/200/80" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${body}</p>  
                        ${tagHTML}                      
                    </div>
                </div>
            </div>
          `; 
  });

  return template;
}

result.innerHTML = printPosts();

//! Crear usuario

const createUser = (user) => {

    const createRequest = new XMLHttpRequest();

    createRequest.onload = (data) => { 
        console.log(data.target.responseText);
    } 

    createRequest.open("POST", "https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/.json", false);
    createRequest.send(JSON.stringify(user));

}

const userTest = {
    firstName: "Sofy",
    lastName: "Arreguin"
}