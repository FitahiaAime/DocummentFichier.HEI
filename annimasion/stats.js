const today = new Date();
const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const formatDate = (date) => date.toLocaleDateString("fr-FR");

const startInput = document.querySelector("[data-date-start]");
const endInput = document.querySelector("[data-date-end]");
if (startInput && endInput) {
  startInput.value = formatDate(startOfMonth);
  endInput.value = formatDate(today);
}

document.querySelectorAll(".card, .page-head").forEach((item, index) => {
  item.classList.add("reveal");
  setTimeout(() => item.classList.add("show"), 80 + index * 90);
});

document.querySelectorAll(".bar-chart b, .bar-chart i").forEach((bar, index) => {
  setTimeout(() => bar.classList.add("show"), 350 + index * 60);
});

document.querySelectorAll(".report-form input[type='checkbox']").forEach((box) => {
  box.addEventListener("change", () => {
    box.closest("p").style.fontWeight = box.checked ? "700" : "400";
  });
});
