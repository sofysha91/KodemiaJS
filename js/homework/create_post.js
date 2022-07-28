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
//Create post
const post = (data, url) => {

    const createRequest = new XMLHttpRequest();

    createRequest.onload = (data) => { 
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                 result.innerHTML = "El formulario ha sido enviado";
                 cleanForm();                     
            }
            else if (data.target.status === 400)    {
                result.innerHTML = "Ocurrio un error";
            }
        }    
    } 

    createRequest.open("POST", url, false);
    createRequest.send(JSON.stringify(data));

}

createBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    //Create post object
    const newPost = {
        title: inputTitlePost.value,
        body: inputBodyPost.value,
        date: inputDatePost.value
    }

    post(newPost, "https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts.json");
});