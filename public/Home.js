const links = document.querySelectorAll(".navbar > nav > ul > li");
const cards = document.querySelectorAll(".card");

[...links].map((link, index) => {
  link.addEventListener("click", () => onLinkClick(link, index), false);
});

const onLinkClick = (link, currentIndex) => {
  const selectedItem = link.getAttribute("name");
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  // const currentCard = [...cards].find((card) =>
  //   card.classList.contains(selectedItem)
  // );

  const currentCard = [...cards].find((card) =>
    Object.keys(card.dataset).includes(selectedItem)
  );
  currentCard.classList.add("active");
  highLightSelectedLink(currentIndex);
};

const highLightSelectedLink = (currentIndex) => {
  links.forEach((link) => {
    link.classList.remove("selectedLink");
  });
  links[currentIndex].classList.add("selectedLink");
};






















// const links = document.querySelectorAll(".navbar > nav > ul > li");
// const cards = document.querySelectorAll(".card");

// [...links].map((link, index) => {
//   link.addEventListener("click", () => onLinkClick(link, index), false);
// });

// const onLinkClick = (link, currentIndex) => {
//   const selectedItem = link.getAttribute("name");
//   cards.forEach((card) => {
//     card.classList.remove("active");
//  console.log(link,currentIndex)
//   });
//   // const currentCard = [...cards].find((card) =>
//   //   card.classList.contains(selectedItem)
//   // );

//   const currentCard = [...cards].find((card) =>
//     Object.keys(card.dataset).includes(selectedItem)
//   );
//   currentCard.classList.add("active");
//   highLightSelectedLink(currentIndex);
// };

// const highLightSelectedLink = (currentIndex) => {
//   links.forEach((link) => {
//     link.classList.remove("selectedLink");
//   });
//   links[currentIndex].classList.add("selectedLink");
// };

