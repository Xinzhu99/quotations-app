const quoteForm = document.querySelector("#quoteForm")
const textInput = document.querySelector("#textInput")
const authorInput = document.querySelector("#authorInput")
const quoteList = document.querySelector("#quoteList")

function addQuote(event){

    event.preventDefault()
    
    const quoteText =document.createElement("p")
    quoteText.className = "text"
    const quoteAuthor= document.createElement("p")
    quoteAuthor.className = "author"
    const quoteZone =document.createElement("div")
    quoteZone.className = "quote"
    quoteText.innerText = textInput.value
    quoteAuthor.innerText = authorInput.value
    quoteZone.appendChild(quoteText)
    quoteZone.appendChild(quoteAuthor)
    quoteList.appendChild(quoteZone)
}

quoteForm.addEventListener("submit", addQuote)
