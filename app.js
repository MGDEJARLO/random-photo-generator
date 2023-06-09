const btnEl = document.querySelector(".btn");
const imageContainerEl = document.querySelector(".image-container");

btnEl.addEventListener("click", () => {
  imageNum = 10;
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
  }
}
