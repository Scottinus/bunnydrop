const btn = document.querySelector("button");

const onDeviceOrientation = (event) => {
  const angles = {
    alpha: roundAngle(event.alpha),
    beta: roundAngle(event.beta),
    gamma: roundAngle(event.gamma),
    absolute: event.absolute,
  };
  if (
    angles &&
    typeof angles.alpha === "number" &&
    typeof angles.beta === "number" &&
    typeof angles.gamma === "number"
  ) {
    const a = angles.alpha > 180 ? angles.alpha - 360 : angles.alpha;
    const b = angles.beta - 90;
    const g = angles.gamma > 180 ? 360 - angles.gamma : -angles.gamma;
    console.log(`rotateX(${b}deg) rotateY(${g}deg) rotateZ(${a}deg)`);
    /*     setCssTransformInverse({
        transform: `rotateX(${b}deg) rotateY(${g}deg) rotateZ(${a}deg)`,
      }); */
  }
};

const onClick = async () => {
  console.log("REQUEST PERMISSION");
  debugger;
  if (DeviceOrientationEvent.requestPermission) {
    debugger;
    let permission;
    try {
      permission = await DeviceOrientationEvent.requestPermission();
    } catch (err) {
      console.log("ER", e);
      const e = new Error((err && err.message) || "unknown error");
      btn.innerText = "Enable permission: " + "error: " + e;
      return false;
    }
    if (permission !== "granted") {
      btn.style.backgroundColor = "red";
      return false;
    } else {
      btn.style.backgroundColor = "green";
    }
    window.addEventListener("deviceorientation", onDeviceOrientation);

    return true;
  }
  btn.style.backgroundColor = "green";
  /*   if (typeof DeviceMotionEvent.requestPermission === "function") {
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
 
  } */
};

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
