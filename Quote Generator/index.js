// Variables
let btn = document.querySelector("#new-quote")

let quote = document.querySelector(".quote")

let person = document.querySelector(".person")


const quotes = [{ 
    quote: `"The best way to find yourself is to lose yourself in the service oh others."`,
    person: "__ Mahatma Gandhi"
},
    { quote: `"The higher you go the cooler it becomes."`,
    person: "... unknown"},

    { quote: `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”`,
    person: "__ Albert Einstein"},
    
    { quote: `“Everything you can imagine is real.”`,
    person: "__ Pablo Picasso"},
    
    { quote: `“It is never too late to be what you might have been."`,
    person: `__ George Elliot`},
    { quote: `“You can never get a cup of tea large enough or a book long enough to suit me.”`,
    person: "__ CS. Lewis"}]

   

btn.addEventListener('click',function(){ 
  
        let random = Math.floor(Math.random() * quotes.length)   
      
        quote.textContent = quotes[random].quote
        person.textContent =quotes[random].person
})


    
