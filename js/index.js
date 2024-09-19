const btn_buscar = document.getElementById('btn-buscar');
const loremArr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia voluptates sit porro. Amet sequi voluptas exercitationem assumenda reprehenderit corrupti aliquid atque cumque illum, accusamus incidunt aliquam doloribus cum officiis!";
const loremSplit = loremArr.split(" ")
const input_buscar = document.getElementById('input-buscar');
const madre = document.querySelector('.madre');

const buscar = (e) => {
    e.preventDefault();
    for(i = 0; i < loremSplit.length; i++){
        if(input_buscar.value == loremSplit[i]){
                console.log("debug")
                if(madre.innerHTML = loremSplit[i]){
                    madre.style.backgroundColor="red";
                    madre.style.width="fit-content"
                    return true;
                }
            }
      }
      if(input_buscar.value != loremSplit[i]){
        const card2 = document.createRange().createContextualFragment(`
            
            <p>La palabra no existe</p>
            
            `)
            
            lorem.textContent=loremSplit[i]
            lorem.append(card2)
    }
}

btn_buscar.addEventListener("click", buscar)

async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const jsonArr = products.map(elemento => Object.entries(elemento));
    const data = products.slice(0,4);
    products.forEach(element => {
        const randInt = randonData(1, jsonArr.length);
        const ranIndex = randInt;
        for(i = 0; i <= data.length; i++ ){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                <div class="services-card-1">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia voluptates sit porro. Amet sequi voluptas exercitationem assumenda reprehenderit corrupti aliquid atque cumque illum, accusamus incidunt aliquam doloribus cum officiis!</p>
                    <button class="btn button-2">learn more</button>
                </div>

                    `)
                    const services_row = document.querySelector('.services-row');
                    services_row.append(card)
            }
        }
        function randonData(min, max){
            return Math.floor(Math.random() * (max - min + 1) + max)
        }
    });
}

const btn_validar = document.getElementById('btn-validar')
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const messageArr = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato adecuato`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar);
getData();
