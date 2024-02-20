let quote = document.getElementById("quote");
let author = document.getElementById("author");

const random_URL = "https://api.quotable.io/random";


async function getQuote(url){
const response =  await fetch(url);
var data = await response.json();
console.log(data); 
quote.innerHTML = data.content;
author.innerHTML = data.author;
}

getQuote(random_URL);



