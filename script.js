/*  created by Henry Zhang
    coded at 12/Jun/2019    */

//artwork: trench by twenty one pilots
var imgUrl = "";
const cards = [...document.querySelectorAll(".card")];
updateReflection(100, 0);

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
        speed = 10;
        break;
      //shadow frame
      case 2:
        speed = 16;
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
    card.style.transform = `rotateX(${ydeg * speed}deg) rotateY(${
      xdeg * speed * 2
    }deg)`;
  });
});

window.ondevicemotion = function (event) {
  var accelerationX = event.accelerationIncludingGravity.x;
  var accelerationY = event.accelerationIncludingGravity.y;
  var accelerationZ = event.accelerationIncludingGravity.z;
  // console.log(`${accelerationX},${accelerationY},${accelerationZ}`)
  let xdeg = accelerationX / 10;
  let ydeg = accelerationY / 10;
  updateReflection(ydeg * 180, xdeg * 100);
  cards.forEach((card, index) => {
    switch (index) {
      //frame
      case 3:
        speed = 10;
        break;
      //shadow frame
      case 2:
        speed = 16;
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
    card.style.transform = `rotateX(${ydeg * speed * 20}deg) rotateY(${
      xdeg * speed * 20
    }deg)`;
  });
};

function updateReflection(degree, percentage) {
  cards.forEach((card, index) => {
    if (index === 3) {
      card.style.background = `linear-gradient(${degree}deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.4) ${percentage}%,rgba(255,255,255,0) 100%), url('${""}')`;
      card.style.backgroundSize = "cover";
    }
  });
}
