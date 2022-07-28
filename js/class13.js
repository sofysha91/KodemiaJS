//! Ejercicios de eventos 

//! 1 Manejo de envento en el boton "show Card"
// Pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder
// 5. Opcional insertar elemento en el card para eliminarla

const card_holder = document.querySelector('.card_holder');
const btn_show = document.querySelector('.btn_show');

btn_show.addEventListener('click', () => {
    let template = `
    <div class="card" style="width: 18rem;">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">mewtwo</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary btn_close">Ocultar Card</a>
        </div>
    </div>`;
    card_holder.innerHTML = template; 

    const btn_close = document.querySelector('.btn_close');
    btn_close.addEventListener('click', () => {
        card_holder.innerHTML = "";
    });   
});



// !2 Manejo de envento en el input "inserte texto"
// pasos
// 1. Seleccionar el holder del text
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. Opcional insertar evento en boton "limpiar campo" para limpiar el input

const text_div = document.querySelector(".text_div");
const input_text = document.querySelector(".input_text");

input_text.addEventListener('input', (e) => {
    let texto = e.target.value;
    text_div.innerHTML = `El texto ingresado es: ${texto}`;
});

const btn_clear = document.querySelector(".btn_clear");

btn_clear.addEventListener('click', () => {
    text_div.innerHTML = "";
    input_text.value = "";
});


// ! 3 Mouse Events
// Pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. De alguna forma limpiar el holder despues de algunos segundos. hint -> setTimeout

const mouse_target = document.querySelector(".mouse_target");
const img_div = document.querySelector(".img-div"); 

mouse_target.addEventListener('mouseover', () => {
    img_div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">    
    </div>
    `;
    clearImage(10);
});

const timer = document.getElementById("countdown");

function clearImage(counter) {  
    
    var interval = setInterval(function(){
        counter--;
        timer.innerHTML = "<b>Timer: " + counter + "</b>";
        if( counter == 0 ){
          timer.innerHTML = "";
          img_div.innerHTML = "";
          clearInterval(interval);
        }
      }, 1000);
}