const sector = document.getElementsByClassName("container-content")

// let pluss = document.getElementsByClassName("question");
// let answer = document.getElementsByClassName("answer");

for (i=0 ;i < sector.length; i ++){

    sector[i].addEventListener('click', function(){
        this.classList.toggle('active')
    
    })

}


