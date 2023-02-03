// change the animation state of the second image when clicking on it
const doors = document.querySelector(".frames");
const knockAction = document.querySelector("#knock-action");
const turnLightAction = document.querySelector("#light-action");
const wakeAction = document.querySelector("#wake-action");
const regretAction = document.querySelector("#regret-action");
const apologizeAction = document.querySelector("#apologize-action");
const restedAction = document.querySelector("#rested-action");
const endAction = document.querySelector("#end-action");
const omgAction = document.querySelector("#omg-action");
const gif = document.querySelector(".img-gif");
const imageContainer = document.querySelector(".image-container");
const body = document.querySelector("body");
const heartbox = document.querySelector(".heartbeat-box");
const noisesBox = [...document.querySelectorAll(".noises-box")];
const imageFirstOpenSources = ["d1.png", "d3.png", "d4.png"];
const imageSecondSources = ["d5.png", "d6.png", "d7.png", "d8.png"];
const imageSources = [
  "d1.png",
  "d3.png",
  "d4.png",
  "d5.png",
  "d6.png",
  "d7.png",
  "d8.png",
];
let currentImageIndex = 0;
let intervalId = null;
let closeDoorIntervalId = null;
let retryCounter = 0;

function handleHalfAnimation() {
  doors.src = "./Bunnydrop/" + imageFirstOpenSources[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imageFirstOpenSources.length;
  if (currentImageIndex === 0) {
    clearInterval(intervalId);
  }
}
function handleSecondHalfAnimation() {
  doors.src = "./Bunnydrop/" + imageSecondSources[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imageSecondSources.length;
  if (currentImageIndex === 0) {
    clearInterval(intervalId);
    setTimeout(() => {
      closeDoorIntervalId = setInterval(closeDoor, 450);
    }, 1000);
  }
}

function closeDoor() {
  doors.src = "./Bunnydrop/" + imageSources.reverse()[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imageSources.reverse().length;
  if (currentImageIndex === 0) {
    clearInterval(closeDoorIntervalId);
    body.style.background = "#1b1b1b";
    imageContainer.style.opacity = 0;
    heartbox.style.display = "block";
    noisesBox.forEach((elem, index) => {
      elem.style.display = "block";
    });
    setTimeout(() => {
      restedAction.top = "65%";
      restedAction.style.opacity = 1;
      restedAction.style.display = "block";
    }, 3000);
  }
}

function openFullHalfDoor() {
  doors.src = "./Bunnydrop/" + imageSources[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % imageSources.length;
  if (currentImageIndex === 0) {
    clearInterval(intervalId);
  }
}

function ActivateDoor() {
  knockAction.style.display = "none";
  gif.style.display = "none";
  intervalId = setInterval(handleHalfAnimation, 450);
  setTimeout(() => {
    wakeAction.style.display = "block";
    wakeAction.style.opacity = 1;
  }, 1000);
}

function turnOnLight() {
  turnLightAction.style.opacity = 0;
  body.style.background = "#eee";
  turnLightAction.style.display = "none";
  imageContainer.style.opacity = 1;
  setTimeout(() => {
    knockAction.style.display = "block";
    knockAction.style.opacity = 1;
  }, 1000);
}

function apologize() {
  wakeAction.style.opacity = 0;
  wakeAction.style.display = "none";
  regretAction.style.opacity = 0;
  regretAction.style.display = "none";
  apologizeAction.style.opacity = 1;
  apologizeAction.style.display = "block";
}

function comfortable() {
  wakeAction.style.opacity = 0;
  wakeAction.style.display = "none";
  regretAction.style.opacity = 1;
  regretAction.style.display = "block";
}

function openAllDoor() {
  gif.style.display = "none";
  regretAction.style.opacity = 0;
  regretAction.style.display = "none";
  apologizeAction.style.opacity = 0;
  apologizeAction.style.display = "none";
  intervalId = setInterval(handleSecondHalfAnimation, 450);
}

function restedEnough() {
  restedAction.style.opacity = 0;
  restedAction.style.display = "none";
  heartbox.style.display = "none";
  noisesBox.forEach((elem, index) => {
    elem.style.display = "none";
  });
  imageContainer.style.opacity = 1;
  body.style.background = "#eee";
  intervalId = setInterval(openFullHalfDoor, 450);
  setTimeout(() => {
    console.log("RETRY COUNTER", retryCounter);
    if (retryCounter < 3) {
      endAction.style.opacity = 1;
      endAction.style.display = "block";
    } else {
      omgAction.style.opacity = 1;
      omgAction.style.display = "block";
    }
  }, 2000);
}

function repeat() {
  retryCounter = retryCounter + 1;
  endAction.style.opacity = 0;
  endAction.style.display = "none";
  closeDoorIntervalId = setInterval(closeDoor, 450);
}
function reset() {
  turnLightAction.style.opacity = 1;
  knockAction.style.opacity = 0;
  turnLightAction.style.display = "block";
  knockAction.style.display = "none";
  imageContainer.style.opacity = 0;
  doors.src = "./Bunnydrop/d1.png";
  wakeAction.style.opacity = 0;
  wakeAction.style.display = "none";
  regretAction.style.opacity = 0;
  regretAction.style.display = "none";
  apologizeAction.style.opacity = 0;
  apologizeAction.style.display = "none";
  endAction.style.opacity = 0;
  endAction.style.display = "none";
  omgAction.style.opacity = 0;
  omgAction.style.display = "none";
  body.style.background = "#1b1b1b";
}
