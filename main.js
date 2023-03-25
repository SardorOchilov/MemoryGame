const cards = document.querySelectorAll(".card");
let compare = [];

for (let card of cards) {
  card.addEventListener("click", () => {
    if (compare.indexOf(card) === -1 && compare.length !== 2) {
      compare.push(card);
      console.log(compare);
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
          compare.forEach((card) => {
            card.classList.remove("active");
          });
          compare = [];
        }, 1800);
      }
    }
  });
}
