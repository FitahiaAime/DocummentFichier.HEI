const today = new Date();
const calendar = document.querySelector("[data-calendar]");
const monthTitle = document.querySelector("[data-current-month]");
const selectedDayTitle = document.querySelector("[data-selected-day]");
const presentTotal = document.querySelector("[data-present-total]");
const weekdays = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
const statuses = [
  { value: "153/156", tone: "good" },
  { value: "146/156", tone: "good" },
  { value: "126/156", tone: "mid" },
  { value: "142/156", tone: "good" },
  { value: "70/156", tone: "bad" },
  { value: "156/156", tone: "good" },
  { value: "150/156", tone: "good" }
];

const monthName = today.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
monthTitle.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);

function updateSelectedDay(date, value) {
  selectedDayTitle.textContent = date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).replace(/^\w/, (letter) => letter.toUpperCase());
  presentTotal.textContent = value;
}

function buildCalendar() {
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const previousMonthLastDay = new Date(year, month, 0).getDate();

  weekdays.forEach((label, index) => {
    const dayName = document.createElement("div");
    dayName.className = `weekday ${index > 4 ? "muted" : ""}`;
    dayName.textContent = label;
    calendar.appendChild(dayName);
  });

  for (let index = 0; index < startOffset; index += 1) {
    const day = document.createElement("article");
    day.className = "day off";
    day.innerHTML = `<b>${previousMonthLastDay - startOffset + index + 1}</b>`;
    calendar.appendChild(day);
  }

  for (let number = 1; number <= lastDay.getDate(); number += 1) {
    const date = new Date(year, month, number);
    const weekday = date.getDay();
    const status = statuses[number % statuses.length];
    const day = document.createElement("article");
    day.className = `day ${weekday === 0 || weekday === 6 ? "weekend" : ""}`;
    if (number === today.getDate()) day.classList.add("active-day", "selected");
    day.innerHTML = `<b>${number}</b><span class="${status.tone}">${status.value}</span>`;
    day.addEventListener("click", () => {
      document.querySelectorAll(".day").forEach((item) => item.classList.remove("active-day", "selected"));
      day.classList.add("active-day", "selected");
      updateSelectedDay(date, status.value);
    });
    calendar.appendChild(day);
  }

  const totalCells = startOffset + lastDay.getDate();
  const nextCells = Math.ceil(totalCells / 7) * 7 - totalCells;
  for (let number = 1; number <= nextCells; number += 1) {
    const day = document.createElement("article");
    day.className = "day off";
    day.innerHTML = `<b>${number}</b>`;
    calendar.appendChild(day);
  }
}

buildCalendar();
updateSelectedDay(today, statuses[today.getDate() % statuses.length].value);

document.querySelectorAll(".calendar-area, .day-panel, .day").forEach((item, index) => {
  item.classList.add("reveal");
  setTimeout(() => item.classList.add("show"), 70 + index * 20);
});

document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});
