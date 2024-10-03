const button = document.querySelector(".button");
const text = document.querySelector(".text");

button.addEventListener("click", () => {
  text.classList.toggle("text-collapsed");
});
