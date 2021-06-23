const clickScreen = document.getElementById("clickScreen");
const divCard = document.getElementById("card");
const cardContainer = document.getElementById("container");

clickScreen.addEventListener("click", () => {
  divCard.className += " expand";
  cardContainer.className += " playanim";
});