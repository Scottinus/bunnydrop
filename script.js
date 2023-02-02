/*  created by Henry Zhang
    coded at 12/Jun/2019    */

//artwork: trench by twenty one pilots
var imgUrl = "";
const cards = [...document.querySelectorAll(".card")];
updateReflection(100, 0);

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
const isMobile = isMobileDevice();
if (isMobile) {
  console.log("IN MOBILE", isMobile);
  let initialX;
  let initialY;
  let currentX;
  let currentY;

  window.addEventListener("touchstart", function (event) {
    initialX = event.touches[0].clientX;
    initialY = event.touches[0].clientY;
  });
  window.addEventListener("touchend", function (event) {
    updateReflection(180, 100);
    cards.forEach((card, index) => {
      card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
    });
  });

  window.addEventListener("touchmove", function (event) {
    currentX = event.touches[0].clientX;
    currentY = event.touches[0].clientY;
    let halfWidth = window.innerWidth / 2;
    let halfHeight = window.innerHeight / 2;
    const xdeg = (initialX - currentX - halfWidth) / halfWidth;
    const ydeg = (initialY - currentY - halfHeight) / halfHeight;
    let customRotateX;
    let customRotateY;
    updateReflection(ydeg * 180 * 3, xdeg * 100 * 3);
    cards.forEach((card, index) => {
      switch (index) {
        //frame
        case 3:
          speed = 4;
          customRotateX = -ydeg * speed;
          customRotateY = xdeg * speed * 1.5;
          break;
        //shadow frame
        case 2:
          speed = 6;
          customRotateX = -ydeg * speed;
          customRotateY = xdeg * speed * 1.5;
          break;
        //character
        case 1:
          speed = 2;
          customRotateX = ydeg * speed;
          customRotateY = -xdeg * speed * 1.5;
          break;
        //bg
        case 0:
          speed = 2;
          customRotateX = ydeg * speed * 1.5;
          customRotateY = -xdeg * speed * 1.5;
          break;
      }

      card.style.transform = `rotateX(${customRotateX}deg) rotateY(${customRotateY}deg)`;
    });
  });
} else {
  console.log("NOT MOBILE", isMobile);
  window.addEventListener("mousemove", (event) => {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let halfWidth = window.innerWidth / 2;
    let halfHeight = window.innerHeight / 2;
    let xdeg = (mouseX - halfWidth) / halfWidth;
    let ydeg = (mouseY - halfHeight) / halfHeight;
    let speed = 2;
    let customRotateX = ydeg * speed;
    let customRotateY = xdeg * speed;
    updateReflection(ydeg * 180, xdeg * 100);
    cards.forEach((card, index) => {
      switch (index) {
        //frame
        case 3:
          speed = 2;
          customRotateX = -ydeg * speed;
          customRotateY = xdeg * speed;
          break;
        //shadow frame
        case 2:
          speed = 4;
          customRotateX = -ydeg * speed;
          customRotateY = xdeg * speed;
          break;
        //character
        case 1:
          speed = 1;
          customRotateX = ydeg * speed;
          customRotateY = -xdeg * speed;
          break;
        //bg
        case 0:
          speed = 1;
          customRotateX = ydeg * speed;
          customRotateY = -xdeg * speed;
          break;
      }
      card.style.transform = `rotateX(${customRotateX}deg) rotateY(${customRotateY}deg)`;
    });
  });
}

function updateReflection(degree, percentage) {
  cards.forEach((card, index) => {
    if (index === 3) {
      card.style.background = `linear-gradient(${degree}deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) ${percentage}%,rgba(255,255,255,0) 100%)`;
      card.style.backgroundSize = "cover";
    }
  });
}
