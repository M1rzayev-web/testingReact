function updateClock() {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, "0");
  let minute = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");
  let time = `${hour}:${minute}:${second}`;
  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
