const get = (url) => {
    let posts = [];
    const postRequest = new XMLHttpRequest();

    postRequest.onload = (data) => {
    
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                    posts = JSON.parse(data.target.response); 
                    //console.log(posts);                   
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

const post = (data, url) => {

    let response = false;
    const createRequest = new XMLHttpRequest();

    createRequest.onload = (data) => { 
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                 response = true;                                     
            }            
        }    
    } 

    createRequest.open("POST", url, false);
    createRequest.send(JSON.stringify(data));

    return response;
}

const deleteData = (url) => {

    let response = false;
    const patchRequest = new XMLHttpRequest();

    patchRequest.onload = (data) => { 
        if (data.target.status >= 200 ){             
            response = true;                     
        }        
    } 

    patchRequest.open("DELETE", url , false);
    patchRequest.send();

    return response;
}