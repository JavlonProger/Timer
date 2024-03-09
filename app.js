const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

const currentYear = new Date().getFullYear();

const birthDayTime = new Date(`Apr 12 2024 00:00:00`)

// Update CountDown

function updateCountDown(){
    const currentTime = new Date();
    const diff = birthDayTime - currentTime;

   
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    // console.log(d);

   days.innerHTML = d;
   hours.innerHTML = h < 10 ? '0' + h : h;
   minutes.innerHTML = m < 10 ? '0' + m : m;
   seconds.innerHTML = s < 10 ? '0' + s : s;
}
setInterval(updateCountDown, 1000)