var burgerBtn = document.getElementById("burgerBtn");
var navEl = document.getElementById("navEl");

burgerBtn.addEventListener("click", () => {
  navEl.classList.toggle("show");
});
