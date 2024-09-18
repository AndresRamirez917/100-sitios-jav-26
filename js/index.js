const btn_buscar = document.getElementById('btn-buscar');
const loremArr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia voluptates sit porro. Amet sequi voluptas exercitationem assumenda reprehenderit corrupti aliquid atque cumque illum, accusamus incidunt aliquam doloribus cum officiis!";
const loremSplit = loremArr.split(" ")
const input_buscar = document.getElementById('input-buscar');
const madre = document.querySelector('.madre');

const buscar = (e) => {
    e.preventDefault();
    for(i = 0; i < loremSplit.length; i++){
        if(input_buscar.value == loremSplit[i]){
            const card = document.createRange().createContextualFragment(`
                
                <p>${loremSplit[i]}</p>
                
                `)
                const lorem = document.getElementById('lorem');
                lorem.append(card)
                lorem.textContent=loremSplit[i]
                word = lorem.textContent=loremSplit[i]
                madre.style.color="red"
                if(madre.includes("Lorem")){
                    console.log("madre")
                }
                return true;
            }
      }
      if(input_buscar.value != loremSplit[i]){
        const card = document.createRange().createContextualFragment(`
            
            <p>La palabra no existe</p>
            
            `)
            
            lorem.textContent=loremSplit[i]
            lorem.append(card)
           //lorem.remove(card)
    }
}

btn_buscar.addEventListener("click", buscar)

function addLorem(){
    const text = document.createRange().createContextualFragment(`
        
         
                
        
        
        `)
        const lorem = document.getElementById('lorem');
        lorem.append(text)
    
} 

addLorem()