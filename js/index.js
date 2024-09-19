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

