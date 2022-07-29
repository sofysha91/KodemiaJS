let createBtn = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputBodyPost = document.querySelector('.post_body_input')
let inputDatePost = document.querySelector('.post_date_input')
let alertHolder = document.querySelector('.alerts_holder')


const getData = (url) => {
    const httRequest = new XMLHttpRequest()

    let result = []
    httRequest.onload = (data) => {
        result = JSON.parse(data.target.responseText)
    }

    httRequest.open("GET", url, false)
    
    httRequest.send()
    
    return result
}


let params = new URLSearchParams(window.location.search);
let postId = params.get('id');

let url = `https://kodemia-js-7fdf3-default-rtdb.firebaseio.com/posts/${postId}.json`;

let postToEdit = getData(url)
console.log(postToEdit)

document.addEventListener('DOMContentLoaded', ()=>{
    inputTitlePost.value = postToEdit.title
    inputBodyPost.value = postToEdit.body
    inputDatePost.value = postToEdit.date
})


const insertPost = (post, url ) => {
    const hRequest = new XMLHttpRequest()

    let newPostId;
    hRequest.onload = (e) => {
        newPostId = JSON.parse(e.target.responseText)
    }
    
    hRequest.open("PATCH", url , false)

    hRequest.send(JSON.stringify(post))

    return newPostId
}

createBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    let title = inputTitlePost.value 
    let body = inputBodyPost.value
    let date = inputDatePost.value 

    if (
        title === '' ||
        body === '' ||
        date === ''
    )   {
        alertHolder.innerHTML =  `
        <div class="alert alert-danger mt-4" role="alert">
        Algunos de los campos estan vacios
        </div>
        `

        setTimeout(()=>{
            alertHolder.innerHTML = ''
        }, 1500)

    } else {

        const postToInsert = {
            title: title,
            body: body,
            date: date
        }

        let NewPost = insertPost(postToInsert, url)
        console.log(NewPost)

        if (NewPost)    {
            alertHolder.innerHTML =  `
            <div class="alert alert-success mt-4" role="alert">
            Post editado con exito! 
            </div>
            `
    
            setTimeout(()=>{
                alertHolder.innerHTML =''
            }, 1500)
            
        }
        
        setTimeout(()=>{
            window.location.href = `/post_detail.html?id=${postId}` 
        }, 1800)
    }
} )