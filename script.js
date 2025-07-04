const quoteForm = document.querySelector("#quoteForm");
const textInput = document.querySelector("#textInput");
const authorInput = document.querySelector("#authorInput");
const quoteList = document.querySelector("#quoteList");
const submitBtn = document.querySelector("#submitBtn");
const text = document.querySelector(".text");
const count = document.querySelector("#count");

let quoteCount = 0;
let quotes = [{author:"", text:""}];                                   //*je déclare un tableau d'objets

quoteForm.addEventListener("submit", (event) => {                      //!"submit" pour écouter submission du formulaire en tant que l'event au lieu d'un clic
    quotes.push({author:authorInput.value,text:textInput.value});
    
    event.preventDefault();                                           //!je bloque la recharge de page automatique afin d'afficher le quoteList.innertext
    quoteList.innerHTML ="";                                          //avant de recharger le nouveau tableau, je vide mon navigateur
    for (const item of quotes){
        quoteList.innerHTML += 
        `<div>
            <p class="text">${item.text}</p>
            <p class="author">${item.author}</p>
        </div>`;
    };

    quoteCount ++;                      
    count.innerHTML=`${quoteCount} citations`;

    textInput.value='';
    authorInput.value ='';                                            //après chaque clic, je vide mes champs de texte
});
