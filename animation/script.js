window.onload = () => {
  "use strict";
  let starter;
  let ender;
  let timeSet;
  let speed = 250;
  const selectPane = document.getElementById("animation");
  const fontPane = document.getElementById("fontsize");
  const textArea = document.getElementById("text-area");
  starter = document.getElementById("start");
  ender = document.getElementById("stop");
  const setTurbo = document.getElementById("turbo");

  let animationType = ANIMATIONS[selectPane.value];
  let animationPixel = animationType.split("=====\n");

  document.querySelector("#start").onclick = function () {
    starter.disabled = true;
    ender.disabled = false;
    startAnime();
  };
  //   onStart.addEventListener("click",()=>{
  //       console.log("hello")
  //   })

  document.querySelector("#stop").onclick = () => {
  
    clearInterval(timeSet);
    starter.disabled=false;
    textArea.disabled=true;
    ender.disabled=true;
  };

  selectPane.onchange = function () {
    let val = selectPane.value;
    switch (val) {
      case "Exercise":
        textArea.value = ANIMATIONS.EXERCISE;
        break;
      case "Juggler":
        textArea.value = ANIMATIONS.JUGGLER;
        break;
      case "Bike":
        textArea.value = ANIMATIONS.BIKE;
        break;
      case "Dive":
        textArea.value = ANIMATIONS.DIVE;
        break;
      default:
        textArea.value = ANIMATIONS.BLANK;
        break;
    }

    animationType = ANIMATIONS[val];

    clearInterval(timeSet);
    starter.disabled = false;
    ender.disabled = true;
  };

  const renderFrame = (f) => {
    let txtArea = document.getElementById("text-area");

    let pixels = animationType.split("=====\n");
    txtArea.value = pixels[f];
  };
  const startAnime = () => {
    let frameVAlue = 0;
    timeSet = setInterval(() => {
      if (frameVAlue == animationType.split("=====\n").length) {
        frameVAlue = 0;
      }
      renderFrame(frameVAlue);

      // count ++;
      frameVAlue++;
    }, speed);
  };

  setTurbo.onchange = function () {
    if (setTurbo.checked) {
      speed = 50;
      clearInterval(timeSet);
      starter.disabled = false;
      ender.disabled = true;
    } else {
      speed = 250;
      clearInterval(timeSet);
      starter.disabled = false;
      ender.disabled = true;
    }
  };

  listOfFont.onchange = function () {
    let val = fontPane.value;
    switch (val) {
      case "tiny":
        textArea.style.fontSize = "7pt";
        break;
      case "medium":
        textArea.style.fontSize = "12pt";
        break;
      case "small":
        textArea.style.fontSize = "10pt";
        break;
      case "large":
        textArea.style.fontSize = "16pt";
        break;
      case "exLarge":
        textArea.style.fontSize = "24pt";
        break;
      case "xxl":
        textArea.style.fontSize = "32pt";
        break;
    }
  };
};
