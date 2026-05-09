document.querySelectorAll(".card, .page-head").forEach((item, index) => {
  item.classList.add("reveal");
  setTimeout(() => item.classList.add("show"), 80 + index * 80);
});

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected-filter");
  });
});

document.querySelectorAll(".member-table tbody tr").forEach((row) => {
  row.addEventListener("mouseenter", () => row.style.background = "#fbfdff");
  row.addEventListener("mouseleave", () => row.style.background = "");
});
