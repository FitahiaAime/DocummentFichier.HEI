const today = new Date();
const longDate = today.toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

document.querySelectorAll("[data-today-long]").forEach((item) => {
  item.textContent = longDate;
});

const revealItems = document.querySelectorAll(".card, .page-head");
revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  setTimeout(() => item.classList.add("show"), 90 + index * 90);
});

document.querySelectorAll(".line").forEach((bar, index) => {
  setTimeout(() => bar.classList.add("show"), 500 + index * 110);
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    button.animate(
      [{ transform: "scale(1)" }, { transform: "scale(.97)" }, { transform: "scale(1)" }],
      { duration: 180 }
    );
  });
});
