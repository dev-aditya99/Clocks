let clockHandSec = document.querySelector(".clock-hands-sec");
let clockHandMin = document.querySelector(".clock-hands-min");
let clockHandHrs = document.querySelector(".clock-hands-hrs");



const clockRun = () => {
    let nDate = new Date();
    let second = nDate.getSeconds() * 6;
    let minutes = nDate.getMinutes() * 6;
    let hours = nDate.getHours() * 30;
    clockHandSec.style.transform = `rotate(${second}deg)`;
    clockHandMin.style.transform = `rotate(${minutes}deg)`;
    clockHandHrs.style.transform = `rotate(${hours}deg)`;
}


setInterval(() => {
    clockRun();
}, 1000);