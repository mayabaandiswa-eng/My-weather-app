let themeBtn =
document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

let weatherBtn =
document.getElementById("weatherBtn");
let rain = document.getElementById("rain");
let snow = document.getElementById("snow");
let lightning = document.getElementById("lightning");

weatherBtn.addEventListener("click", function () {
  let weather = prompt("Choose weather: sun, rain, snow, storm");
  if (weather === "rain") {
    rain.style.display = "block";
    alert("🌧️ Rainy weather activated!");
  }

    if (weather === "snow") {
      snow.style.display = "block";
      alert("❄ Snowy weather activated!");
    }

      if (weather === "sun") {
        alert("☀ Sunny weather activated!");
      }

        if (weather === "storm") {
          rain.style.display = "block";
          lightning.classList.add("flash");
          setTimeout(function () {
            lightning.classList.remove("flash");
          }, 400);

          alert("⚡ Stormy weather activated!");
        }
});
