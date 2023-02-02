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

window.addEventListener("mousemove", (event) => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  let halfWidth = window.innerWidth / 2;
  let halfHeight = window.innerHeight / 2;
  let xdeg = (mouseX - halfWidth) / halfWidth;
  let ydeg = (mouseY - halfHeight) / halfHeight;
  let speed = 2;
  updateReflection(ydeg * 180, xdeg * 100);
  cards.forEach((card, index) => {
    switch (index) {
      //frame
      case 3:
        speed = 4;
        break;
      //shadow frame
      case 2:
        speed = 6;
        break;
      //character
      case 1:
        speed = 3;
        break;
      //bg
      case 0:
        speed = 3;
        break;
    }
    card.style.transform = `rotateX(${ydeg * speed}deg) rotateY(${
      xdeg * speed
    }deg)`;
  });
});

let initialX;
let initialY;
let currentX;
let currentY;

window.addEventListener("touchstart", function (event) {
  initialX = event.touches[0].clientX;
  initialY = event.touches[0].clientY;
});

window.addEventListener("touchmove", function (event) {
  currentX = event.touches[0].clientX;
  currentY = event.touches[0].clientY;
  let halfWidth = window.innerWidth / 2;
  let halfHeight = window.innerHeight / 2;
  const xdeg = (initialX - currentX - halfWidth) / halfWidth;
  const ydeg = (initialY - currentY - halfHeight) / halfHeight;
  cards.forEach((card, index) => {
    switch (index) {
      //frame
      case 3:
        speed = 8;
        break;
      //shadow frame
      case 2:
        speed = 10;
        break;
      //character
      case 1:
        speed = 4;
        break;
      //bg
      case 0:
        speed = 4;
        break;
    }
    card.style.transform = `rotateX(${-ydeg * speed}deg) rotateY(${
      xdeg * speed
    }deg)`;
  });
});

/* window.ondevicemotion = function (event) {
  var accelerationX = event.accelerationIncludingGravity.x.toFixed(2);
  var accelerationY = event.accelerationIncludingGravity.y.toFixed(2);
  var accelerationZ = event.accelerationIncludingGravity.z.toFixed(2);
  let xdeg = accelerationX / 5;
  let ydeg = accelerationY / 5;
  updateReflection(ydeg * 180 * 4, xdeg * 100);
  cards.forEach((card, index) => {
    switch (index) {
      //frame
      case 3:
        speed = 4;
        break;
      //shadow frame
      case 2:
        speed = 6;
        break;
      //character
      case 1:
        speed = 2;
        break;
      //bg
      case 0:
        speed = 2;
        break;
    }
    card.style.transform = `rotateX(${ydeg * speed * 4}deg) rotateY(${
      xdeg * speed * 4
    }deg)`;
  });
}; */

function updateReflection(degree, percentage) {
  cards.forEach((card, index) => {
    if (index === 3) {
      card.style.background = `linear-gradient(${degree}deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) ${percentage}%,rgba(255,255,255,0) 100%), url('${""}')`;
      card.style.backgroundSize = "cover";
    }
  });
}
