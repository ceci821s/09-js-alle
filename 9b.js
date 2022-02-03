const kategorier = ["animals", "arch", "people", "nature", "tech"];

billede.addEventListener("click", skift);

function skift() {
  const billedTal = Math.round(Math.random() * 10);
  const kategoriIndex = Math.round(Math.random() * 4);
  billede.src =
    "https://placeimg.com/600/400/" +
    kategorier[kategoriIndex] +
    "?t=" +
    billedTal;
  billede.alt = kategorier[kategoriIndex] + " nr " + billedTal;
  cap.textContent = kategorier[kategoriIndex] + " nr " + billedTal;
}
