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
        speed = 2;
        break;
      //bg
      case 0:
        speed = 2;
        break;
    }
    card.style.transform = `rotateX(${ydeg * speed}deg) rotateY(${
      xdeg * speed
    }deg)`;
  });
});

window.ondeviceorientation = function (event) {
  var accelerationX = parseInt(event.beta);
  var accelerationY = parseInt(event.gamma);
  var alpha = event.alpha;
  // alpha is the inclination on the z-axis

  var beta = event.beta;
  // beta is the inclination on the x-axis

  var gamma = event.gamma;
  // gamma is the inclination on the y-axis

  console.log("ORIENTATION");
  let xdeg = accelerationX / 10;
  let ydeg = accelerationY / 10;
  updateReflection(ydeg * 180, xdeg * 100);
  cards.forEach((card, index) => {
    let speed = 2;
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
    console.log("BETA", beta / (speed * 6));
    card.style.transform = `translate(-50%) perspective(50em) rotateX(${(
      beta /
      (speed * 6)
    ).toFixed(2)}deg) rotateY(${(gamma / (speed * 1.5)).toFixed(2)}deg)`;
    card.style.left = `${50}%`;
    card.style.top = `${0}%`;
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
