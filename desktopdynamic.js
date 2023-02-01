const container = document.querySelector("#container");
const images = [...document.querySelectorAll("img")];
const containerWidth = container.offsetWidth;
const containerHalfWidth = containerWidth / 2;

/*  transform: translate(-50%) perspective(50em) rotateY(0deg) rotateX(0deg); */
container.addEventListener("mousemove", (event) => {
  const x = event.clientX - containerHalfWidth;
  const y = event.clientY;
  images.forEach((image, index) => {
    {
      let speed = 2;
      switch (index) {
        case 3:
          speed = 1;
          break;
        case 2:
          speed = 2;
          break;
        default:
          speed = 2.5;
          break;
      }
      const xPosition = x / (speed * 200);
      const yPosition = y / (speed * 200);
      image.style.transform = `translate(-50%) perspective(50em) rotateY(${
        xPosition * 4
      }deg)`;
      image.style.left = `${xPosition + 50}%`;
      image.style.top = `${yPosition}%`;
    }
  });
  const speedBorderFrame = 1;
});

window.addEventListener("mouseout", (event) => {
  if (event.relatedTarget === null) {
    images.forEach((image) => {
      image.style.left = "50%";
      image.style.top = "0%";
      image.style.transform = `translate(-50%) perspective(50em) rotateY(0deg)`;
    });
  }
});
