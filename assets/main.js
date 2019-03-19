var quotes = [
    "nos vamos a comer",
    "un arroz con bacala'o",
    "alla en lo alto del puerto",
    "que mañana es domingo",
    "cuchibili cuchibili"
]

function getCaption() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote;
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("sarandonga").innerHTML = getCaption();
})