document.addEventListener("DOMContentLoaded", start);
console.log("dom er loaded");

function start() {
  let alleP = document.querySelectorAll("p");
  alleP.forEach((p) => {
    p.addEventListener("click", () => {
      p.classList.add("typo");
    });
  });
  document.querySelector("button").addEventListener("click", () => {
    alleP.forEach((p) => {
      p.classList.remove("typo");
    });
  });
}
