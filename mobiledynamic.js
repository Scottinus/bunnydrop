/* function onClick() {
  console.log("REQUEST PERMISSION");
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    // Handle iOS 13+ devices.
    DeviceMotionEvent.requestPermission()
      .then((state) => {
        if (state === "granted") {
          window.addEventListener("devicemotion", handleOrientation);
        } else {
          console.error("Request to access the orientation was rejected");
        }
      })
      .catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener("devicemotion", handleOrientation);
  }
} */

window.addEventListener(
  "deviceorientation",
  function (event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    // alpha is the inclination on the z-axis

    var beta = event.beta;
    // beta is the inclination on the x-axis

    var gamma = event.gamma;
    // gamma is the inclination on the y-axis

    console.log(beta);
    images.forEach((image, index) => {
      {
        let speed = 2;
        switch (index) {
          case 3:
            speed = 2;
            break;
          case 2:
            speed = 3;
            break;
          default:
            speed = 3.5;
            break;
        }
        const xRotation = () => {
          let rotation = (beta - 90) / (speed * 10);
          return -rotation;
        };
        const xPosition = gamma / (speed * 50);
        const yPosition = beta / (speed * 50);
        image.style.transform = `translate(-50%) perspective(50em) rotateX(${xRotation()}deg) rotateY(${
          gamma / (speed * 10)
        }deg)`;
        image.style.left = `${xPosition + 50}%`;
        image.style.top = `${yPosition}%`;
      }
    });
  },
  true
);
