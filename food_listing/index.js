// function searchFood() {
//     const searchTerm = document.getElementById("foodSearch").value.toLowerCase();
//     const cards = document.querySelectorAll(".card");
//     cards.forEach(card => {
//         const foodName = card.querySelector("h4").textContent.toLowerCase();
//         if (foodName.includes(searchTerm)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// }
function searchFood() {
    const searchTerm = document.getElementById("foodSearch").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const foodName = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = foodName.includes(searchTerm) ? "block" : "none";
    });
}
