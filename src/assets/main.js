const html = document.querySelector("html");
const btnDesktop = document.querySelector("#darkDesktop");
const btnMobile = document.querySelector("#darkMobile");

btnDesktop.addEventListener("click", () => {
  html.classList.toggle("dark");
});

btnMobile.addEventListener("click", () => {
  html.classList.toggle("dark");
});
