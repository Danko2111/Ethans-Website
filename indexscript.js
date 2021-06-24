const clickScreen = document.getElementById("clickScreen");
const divCard = document.getElementById("card");
const cardContainer = document.getElementById("container");
const cardbutton = document.getElementById("cardbutton");
const logo = document.getElementById("logo");

clickScreen.addEventListener("click", () => {
  divCard.className += " expand";
  cardContainer.className += " playanim";
  logo.className += " close";
  cardbutton.className += " close";
});
