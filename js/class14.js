const search = document.querySelector(".search");
const result = document.querySelector(".result"); 
const btn_search = document.querySelector(".find_user");

const getUsers = () => {
    let u = [];
    const userRequest = new XMLHttpRequest();

    userRequest.onload = (data) => {
    //console.log(data)
        if (data.target.readyState === 4)   {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399 
                ){
                u = JSON.parse(data.target.response);
            }
            else if (data.target.status === 400)    {
                console.log('sucedio un error')
            }
        }     
    } 

    userRequest.open("GET", "https://dummyjson.com/users", false);
    userRequest.send();
    return u.users;
}

const filterUsers = (str) => {
  let strF = str.toLowerCase()
  let usuariosFiltrados = users.filter((user)=> {

      if(
          user.firstName.toLocaleLowerCase().match(strF) ||
          user.username.toLocaleLowerCase().match(strF) ||
          user.email.toLocaleLowerCase().match(strF)
          ) {
          return user
      }

  })

  return usuariosFiltrados
}

const printUsers = (arrUsers) =>{
  let template = "";
  arrUsers.forEach(({firstName, username, email}) => {
    template +=`
          <a href="#" class="list-group-item list-group-item-action" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">${firstName}</h5>                
              </div>
              <p class="mb-1">
                  Username: ${username} <br>
                  Email: ${email}
              </p>                
          </a>
          `; 
  });

  return template;
}

let users = getUsers();

//Document ready
window.addEventListener('DOMContentLoaded', () => {   
   
    let filteredUsers = filterUsers("");
    result.innerHTML = printUsers(filteredUsers);
    
});

//search input
search.addEventListener('input', (event) => {
    let filteredUsers = filterUsers(search.value);
    result.innerHTML = printUsers(filteredUsers);
});