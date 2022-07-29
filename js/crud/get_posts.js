const result = document.querySelector(".posts-container"); 

const printPosts = () =>{

  let posts = get("https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts.json"); 


  let template = "";
  for(let post in posts){
    template +=`
            <div class="col">
                <div class="card">
                    <img src="https://picsum.photos/200/80" class="card-img-top" alt="${posts[post].title}">
                    <div class="card-body">
                        <h5 class="card-title">${posts[post].title}</h5>
                        <small>${posts[post].date}</small>
                        <p class="card-text">${posts[post].body}</p> 
                        
                        <a href="post_detail.html?id=${post}" class="btn btn-primary">Detalle</a>                  
                    </div>
                </div>
            </div>
          `;  
  }
  return template;
}

result.innerHTML = printPosts();


URLSearchParams