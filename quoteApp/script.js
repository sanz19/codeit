const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://go-quote.azurewebsites.net/random-quote?format=json";

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    // return data;
    // console.log(data);
    quote.innerHTML = data.text;
    author.innerHTML = data.author;
}

function x() {
    window.open("https://twitter.com/intent/tweet?text=" + "\"" + quote.innerHTML + "\" by " + author.innerHTML,"Tweet Window", "width=500,height=300");
    
}
getQuote(api_url);