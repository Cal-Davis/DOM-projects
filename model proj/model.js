let drop = document.getElementById("open-btn")
let closeD = document.getElementById("close-btn")
let container = document.getElementById("modal-container")

//Event listeners
drop.addEventListener('click' ,
    function(){

        container.style.display = "block";        
        console.log("clicked!")

})

closeD.addEventListener('click' ,
    function(){
        container.style.display = 'none';
        console.log("clicked!")

})

window.addEventListener('click' ,
    
    function(e){
        if( e.target === container){
            container.style.display = 'none';
        }
       
    }
)





