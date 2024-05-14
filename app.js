let current_date = new Date();
let current_month = current_date.getMonth();
let current_month_days = current_date.getDate();
console.log(current_month_days);
let month_dom = document.querySelector(".month");
let months = [
  "January",
  "Fabuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let thirty_one_days = [
  "January",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
];
let thirty_days = ["April", "June", "September", "November"];
const month = document.querySelector(".month");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const monika = document.querySelector(".monika");
window.onload = (event) => {
  month_dom.innerHTML = months[current_month];
  if (thirty_one_days.includes(months[current_month])) {
    for (let i = 0; i <= 31; i++) {
      let div = document.createElement("div")
      div.classList.add("box")
      div.innerText = i;
      monika.appendChild(div)
    }
  } else {
  }
  previous.addEventListener("click", () => {
    current_month++;
    if (current_month >= 12) {
      current_month = 0;
    }
    month_dom.innerHTML = months[current_month];
  });
  next.addEventListener("click", () => {
    current_month--;
    if (current_month < 0) {
      current_month = 11;
    }
    month_dom.innerHTML = months[current_month];
  });
};