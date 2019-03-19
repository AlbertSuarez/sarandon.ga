let idx = 0;
const quotes = [
    "nos vamos a comer",
    "un arroz con bacalao'",
    "alla en lo alto del puerto",
    "que mañana es domingo",
    "cuchibili cuchibili"
];

const update = () => {
    document.getElementById("sarandonga").textContent = quotes[idx];
    idx = (idx + 1) % quotes.length;
    window.setTimeout(update, 3000);
};

document.addEventListener("DOMContentLoaded", function(event) {
    update();
})