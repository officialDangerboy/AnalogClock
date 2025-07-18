const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".min");
const secondHand = document.querySelector(".sec");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDeg = seconds * 6;                          // 360 / 60
  const minDeg = minutes * 6 + seconds * 0.1;          // 360 / 60 + smooth seconds
  const hrDeg = (hours % 12) * 30 + minutes * 0.5;     // 360 / 12 + smooth minutes

  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // fix typo from `updateCloc`

