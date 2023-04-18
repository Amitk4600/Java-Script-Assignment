const moveImage = document.getElementById("geese-img");
const imagecontainer = document.getElementById("container");

let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    x -= 10;
  }
  if (event.key === "ArrowUp") {
    y -= 10;
  }
  if (event.key === "ArrowRight") {
    x += 10;
  }
  if (event.key === "ArrowDown") {
    y += 10;
  }
  moveImage.style.transform = `translate(${x}px, ${y}px)`;
});
