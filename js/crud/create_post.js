document.addEventListener('DOMContentLoaded', ()=>{
    cleanForm();
});

let createBtn = document.querySelector('.btn_create_post');
let inputTitlePost = document.querySelector('.post_title_input');
let inputBodyPost = document.querySelector('.post_body_input');
let inputDatePost = document.querySelector('.post_date_input');
let result = document.querySelector('.result');


//Clean form
const cleanForm = () => {
    inputTitlePost.value = '';
    inputBodyPost.value = '';
    inputDatePost.value = '';
}

createBtn.addEventListener('click' , (e)=>{
    e.preventDefault();

    let title = inputTitlePost.value;
    let body = inputBodyPost.value;
    let date = inputDatePost.value;

    if( title == '' || body == '' || date == '')
    {
        console.log("error");
       result.innerHTML = `<div class="alert alert-danger" role="alert">
            Los campos no pueden estar vacios.
        </div>`;
    }
    else{
        //Create post object
        const newPost = {
            title: title,
            body: body,
            date: date
        }

        if(post(newPost, "https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts.json")){
            result.innerHTML =  `<div class="alert alert-success" role="alert">
                        El formulario ha sido enviado
                </div>`;
            cleanForm();
        }
        else{
            result.innerHTML =  `<div class="alert alert-danger" role="alert">
                Ocurrio un error.
            </div>`;
        }
    }
});