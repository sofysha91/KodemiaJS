let cardHolder = document.querySelector('.card_holder');
let result = document.querySelector('.result');

document.addEventListener("DOMContentLoaded", (e)=> {

    let params = new URLSearchParams(window.location.search);
    let postId = params.get('id');
    
    let url = `https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts/${postId}.json`;

    let post = get(url);
    
    cardHolder.innerHTML = `
        <div class="card mb-3 mt-5 w-75">
            <img src="https://picsum.photos/1000" class="card-img-top mt-2" alt="img"  height="300"  width="500"  />
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">
                    ${post.body} 
                </p>
                <small class="text-muted"><strong>${post.date}</strong></small>                  
                
            </div>
            <div class="d-flex justify-content-end gap-3 mb-3">
                <a class="btn btn-warning" href="edit.html?id=${postId}">Edit</a>
                <button type="button" class="btn btn-danger btn-delete">Delete</button>                
            </div>
        </div> 
    `;
 
    //! Delete
    let btnDelete = document.querySelector(".btn-delete");

    btnDelete.addEventListener('click', () => {
        if(deleteData(url)){
            result.innerHTML =  `<div class="alert alert-success" role="alert">
                            El post ha sido eliminado
                     </div>`;
            setTimeout(
                        function(){
                            window.location = "posts.html" 
                        },
                    1500);
        }
        else{
            result.innerHTML =  `<div class="alert alert-danger" role="alert">
                Ocurrio un error.
            </div>`;
        }

    })

});