const button = document.querySelector(".draw");

function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);
  const resultNumber = document.querySelector(".result-number");

  const result = Math.floor(Math.random() * (max - min) + min);

  resultNumber.innerHTML = result;

  let params = {
    particleCount: 500, // Quantidade de confetes
    spread: 90, // O quanto eles se espalham
    startVelocity: 70, // Velocidade inicial
    origin: { x: 0, y: 0.5 }, // Posição inicial na tela
    angle: 45, // Ângulo em que os confetes serão lançados
  };
  
  // Joga confetes da esquerda pra direita
  confetti(params);
  
  // Joga confetes da direita para a esquerda
  params.origin.x = 1;
  params.angle = 135;
  confetti(params);
  
}


button.addEventListener("click", generateNumber);
