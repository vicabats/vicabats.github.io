var gifs = [
  `<img src="./asserts/icecream.gif" alt="The Office">`,
  `<img src="./asserts/hotdog.gif" alt="The Office">`,
  `<img src="./asserts/horrible.gif" alt="The Office">`,
  `<img src="asserts/cry.gif" alt="The Office">`,
  `<img src="asserts/sexy.gif" alt="The Office">`,
  `<img src="asserts/game.gif" alt="The Office">`,
  `<img src="asserts/gym.gif" alt="The Office">`,
]

let enviarRespostas = document.getElementById("btn")
let btnReiniciar = document.getElementById("btnReiniciar")
let resultadoUsuario = document.getElementById("resposta")
var contadorAcertos = 0
var contadorGeral = 0

enviarRespostas.addEventListener('click', function () {
console.log(contadorAcertos)
  let pergunta1 = document.getElementsByName("q1")
    for (var i = 0; i < pergunta1.length; i++) {
      if (pergunta1[i].checked) {
        contadorGeral = contadorGeral + 1
        if (pergunta1[i].defaultValue === "michael") {
          primeiroGif.innerHTML = gifs[0];
          pergunta1[i].parentNode.style.color = "green"
          pergunta1[i].parentNode.style.fontWeight = "bold"
          contadorAcertos = contadorAcertos + 1
          console.log(contadorAcertos)

        }

        else {
          primeiroGif.innerHTML = gifs[0]
          pergunta1[i].parentNode.style.color = "red"
          pergunta1[2].parentNode.style.color = "green"
          pergunta1[2].parentNode.style.fontWeight = "bold"
        }
      }
    }

  let pergunta2 = document.getElementsByName("q2")
    for (var i = 0; i < pergunta2.length; i++) {
      if (pergunta2[i].checked) {
        contadorGeral = contadorGeral + 1
        if (pergunta2[i].defaultValue === "kevin") {
          segundoGif.innerHTML = gifs[1]
          pergunta2[i].parentNode.style.color = "green"
          pergunta2[i].parentNode.style.fontWeight = "bold"
          contadorAcertos = contadorAcertos + 1
          console.log(contadorAcertos)

        }
        else {
          segundoGif.innerHTML = gifs[1];
          pergunta2[i].parentNode.style.color = "red"
          pergunta2[0].parentNode.style.fontWeight = "bold"
          pergunta2[0].parentNode.style.color = "green"
        }
      }
    }

  let pergunta3 = document.getElementsByName("q3")
    for (var i = 0; i < pergunta3.length; i++) {
      if (pergunta3[i].checked) {
        contadorGeral = contadorGeral + 1
        if (pergunta3[i].defaultValue === "gabe") {
          terceiroGif.innerHTML = gifs[2]
          pergunta3[i].parentNode.style.color = "green"
          pergunta3[i].parentNode.style.fontWeight = "bold"
          contadorAcertos = contadorAcertos + 1
        }

        else {
          terceiroGif.innerHTML = gifs[2]
          pergunta3[i].parentNode.style.color = "red"
          pergunta3[2].parentNode.style.fontWeight = "bold"
          pergunta3[2].parentNode.style.color = "green"
        }
      }
    }

  let pergunta4 = document.getElementsByName("q4")
    for (var i = 0; i < pergunta4.length; i++) {
      if (pergunta4[i].checked) {
        contadorGeral = contadorGeral + 1
        if (pergunta4[i].defaultValue === "oscar") {
          quartoGif.innerHTML = gifs[3]
          pergunta4[i].parentNode.style.color = "green"
          pergunta4[i].parentNode.style.fontWeight = "bold"
          contadorAcertos = contadorAcertos + 1
        }

        else {
          quartoGif.innerHTML = gifs[3]
          pergunta4[i].parentNode.style.color = "red"
          pergunta4[2].parentNode.style.fontWeight = "bold"
          pergunta4[2].parentNode.style.color = "green"
        }
      }
    }

  let pergunta5 = document.getElementsByName("q5")
    for (var i = 0; i < pergunta5.length; i++) {
      if (pergunta5[i].checked) {
        contadorGeral = contadorGeral + 1
        if (pergunta5[i].defaultValue === "stanley") {
          quintoGif.innerHTML = gifs[4]
          pergunta5[i].parentNode.style.color = "green"
          pergunta5[i].parentNode.style.fontWeight = "bold"
          contadorAcertos = contadorAcertos + 1
        }

        else {
          quintoGif.innerHTML = gifs[4]
          pergunta5[i].parentNode.style.color = "red"
          pergunta5[1].parentNode.style.fontWeight = "bold"
          pergunta5[1].parentNode.style.color = "green"
        }
      }
    }

  let pergunta6 = document.getElementsByName("q6")
    for (var i = 0; i < pergunta6.length; i++) {
      if (pergunta6[i].checked) {
        contadorGeral = contadorGeral + 1
        if (pergunta6[i].defaultValue === "kelly") {
          sextoGif.innerHTML = gifs[5]
          pergunta6[i].parentNode.style.color = "green"
          pergunta6[i].parentNode.style.fontWeight = "bold"
          contadorAcertos = contadorAcertos + 1
        }

        else {
          sextoGif.innerHTML = gifs[5]
          pergunta6[i].parentNode.style.color = "red"
          pergunta6[2].parentNode.style.fontWeight = "bold"
          pergunta6[2].parentNode.style.color = "green"
        }
      }
    }

  let pergunta7 = document.getElementsByName("q7")
    for (var i = 0; i < pergunta7.length; i++) {
      if (pergunta7[i].checked) {
        contadorGeral = contadorGeral + 1
        if (pergunta7[i].defaultValue === "phyllis") {
          setimoGif.innerHTML = gifs[6]
          pergunta7[i].parentNode.style.color = "green"
          pergunta7[i].parentNode.style.fontWeight = "bold"
          contadorAcertos = contadorAcertos + 1
        }

        else {
          setimoGif.innerHTML = gifs[6]
          pergunta7[i].parentNode.style.color = "red"
          pergunta7[1].parentNode.style.fontWeight = "bold"
          pergunta7[1].parentNode.style.color = "green"
        }
      }
    }
    console.log(contadorAcertos)

  if (contadorAcertos == 0 ) {
    resultadoUsuario.innerHTML = "Zero pontos, honestamente? Que vergonha..."
    }

  else if (contadorAcertos == 1){
    resultadoUsuario.innerHTML = "Você só marcou 1 ponto! Que triste!"
  }

  else if (contadorAcertos >0 && contadorAcertos <=3) {
    resultadoUsuario.innerHTML = "Você precisa assistir mais The Office. Enquanto isso, receba seus " + contadorAcertos + " pontos."
    }

  else if (contadorAcertos > 3 && contadorAcertos <=7) {
    resultadoUsuario.innerHTML = "Você até que é um fã razoável. Parabéns pelos seus " + contadorAcertos + " pontos."
    }

  else if (contadorAcertos == 7) {
    resultadoUsuario.innerHTML = "E o dundie de 'maior fã de The Office' vai para... você! Parabéns por gabaritar o quiz!"
  }

    document.getElementById("btn").style.display = "none"
    document.getElementById("btnReiniciar").style.display="block"
  });

  btnReiniciar.addEventListener('click', function () {
  document.location.reload()
  }
  );