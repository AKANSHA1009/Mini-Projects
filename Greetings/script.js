

var display = 0;

document.getElementsByClassName("confetti-btn")[0],
  addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 400;
    let container = document.getElementsByClassName("btn-wrapper")[0];
    container.appendChild(canvas);

    let textElement = document.createElement("div");
    textElement.textContent = "You are the best. I Love You alot!";
    textElement.style.fontSize = "35px";
    textElement.style.fontWeight = "bold";
    textElement.style.margin = "40px 20px";

    container.appendChild(textElement);

    let confetti_button = confetti.create(canvas);

    confetti_button({
      particleCount: 300,
      spread: 200,
      startVelocity: 15,
      scaler: 0.9,
      gravity: 0.5,
    }).then(() => {
      container.removeChild(canvas);
      container.removeChild(textElement);
    });
  });
