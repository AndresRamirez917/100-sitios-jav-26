const btn_buscar = document.getElementById('btn-buscar');
const loremArr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae mollitia voluptates sit porro. Amet sequi voluptas exercitationem assumenda reprehenderit corrupti aliquid atque cumque illum, accusamus incidunt aliquam doloribus cum officiis!";
const loremSplit = loremArr.split(" ")
const input_buscar = document.getElementById('input-buscar');

const buscar = (e) => {
    e.preventDefault();
    for(i = 0; i < loremSplit.length; i++){
       
        if(input_buscar.value == loremSplit[i]){
            const card = document.createRange().createContextualFragment(`
                
                <p>${loremSplit[i]}</p>
                
                `)
                const lorem = document.getElementById('lorem');
                const madre = loremArr.includes(loremSplit[i])
                if(madre){
                    console.log("match")
                    card.append("red")
                };
                loremArr[i].toLowerCase

                lorem.append(card)
                
                return true;
           
        }
      }
      if(input_buscar.value != loremSplit[i]){
        const card = document.createRange().createContextualFragment(`
            
            <p>La palabra no existe</p>
            
            `)
            const lorem = document.getElementById('lorem');
            lorem.append(card)
            return false;
    }

}

btn_buscar.addEventListener("click", buscar)

function addLorem(){
    const text = document.createRange().createContextualFragment(`
        
         <div class="text">
                <p>${loremArr}</p>
            </div>
        
        `)
        const lorem = document.getElementById('lorem');
        lorem.append(text)
    
} 

addLorem()