function filtrar() {
    let input = document.getElementById("buscar").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        card.style.display = texto.includes(input) ? "block" : "none";
    });
}