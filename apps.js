// Variables para obtener el contenedor que almacena todas las imagenes y tarjetas
let cards = document.getElementById("container-cards")
let image = document.getElementById("container-img")

// Variables para obtener los botones que funcionan como filtros
let btnImg = document.getElementById("btn-img")
let btnCard = document.getElementById("btn-cards")

image.style.display = "none"

// Funcines para obtener las imagenes y ocultar las tarjetas y viceversa,
// y añadir o quitar los estilos a los botones
function hiddenCardsRevealImage() {
    image.style.removeProperty("display")
    cards.style.display = "none";

    btnCard.classList.remove("btn-primary")
    btnImg.classList.add("btn-primary")
}

function hiddenImageRevealCards() {
    cards.style.removeProperty("display")
    image.style.display = "none";

    btnImg.classList.remove("btn-primary")
    btnCard.classList.add("btn-primary")
}
