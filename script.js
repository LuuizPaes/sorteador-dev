const button = document.querySelector(".draw");

function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);
  const resultNumber = document.querySelector(".result-number");

  if (max > min) {
    const result = Math.floor(Math.random() * (max - min) + min);
    resultNumber.innerHTML = result;

    efecct();
  } else {
    alert("O número inicial não pode ser menor que o número final");
  }
}

function efecct() {
  let params = {
    particleCount: 500, 
    spread: 90, 
    startVelocity: 70, 
    origin: { x: 0, y: 0.5 }, 
    angle: 45, 
  };

  
  confetti(params);

  
  params.origin.x = 1;
  params.angle = 135;
  confetti(params);
}

button.addEventListener("click", generateNumber);
