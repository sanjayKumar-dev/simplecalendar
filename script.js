const date = new Date();

const monthDays = document.querySelector('.days');
const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const firstDayIndex = date.getDay();
const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
const nextdays = 7 - lastDayIndex -1;
const month = [
    "January",
    "February",
    "March",
    "Apri",
    "May",
    "June",
    "July",
    "August",
    "Setember",
    "October",
    "November",
    "December",
];
document.querySelector('.date h1').innerHTML = month[date.getMonth()];
document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";

for(let x = firstDayIndex; x>0; x--) {
    days+= `<div class="prev-date">${prevLastDay - x +1}</div>`;
}

for(let i=1; i<=lastDay; i++){
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}

for(let j =1; j<=nextdays; j++){
    days += `<div class="next-day">${j}</div>`;
    monthDays.innerHTML = days;
}