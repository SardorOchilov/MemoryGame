const cards = document.querySelectorAll(".card");
let compare = [];
let available = true;
const stickers = ["😀", "😁", "😂", "😀", "😁", "😂"];

stickers.sort(() => Math.random() - 0.5);

for(let i = 0; i < cards.length; i++){
    cards[i].lastElementChild.textContent = stickers[i];

}

for (let card of cards) {
  card.addEventListener("click", () => {
    if (compare.indexOf(card) === -1 && compare.length < 2) {
      compare.push(card);
      card.classList.add("active");
    }

    if (compare.length === 2) {
      const [card1, card2] = compare;
      if (
        card1.lastElementChild.textContent ===
        card2.lastElementChild.textContent
      ) {
        compare.forEach((card) => {
          card.lastElementChild.classList.add("found");
        });
        compare = [];
      } else {
        setTimeout(() => {
          card1.classList.remove("active");
          card2.classList.remove("active");
        }, 800);
        compare = [];
      }
    }
  });
}
