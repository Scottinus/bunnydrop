function onDeviceOrientation(event) {
  const btn = document.querySelector("button");
  btn.style.backgroundColor = "green";
  btn.innerText = "enabled";
  console.log("ON DEVICE OREINTATION");
  console.log(`event`, event);
  /*     setCssTransformInverse({
  transform: `rotateX(${b}deg) rotateY(${g}deg) rotateZ(${a}deg)`,
}); */
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
}

function requestOrientationPermission() {
  DeviceOrientationEvent.requestPermission();
}
const onClick = async () => {
  window.addEventListener("deviceorientation", onDeviceOrientation, true);
};
