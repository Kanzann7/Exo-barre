let cliqueIci = document.querySelector("p");
let barre = document.querySelector(".barre");

cliqueIci.addEventListener("click", () => {
  barre.style.backgroundColor = "green";
  barre.style.transition = "right 100% 2s";
});
