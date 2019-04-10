var imagens = [
    `./img/sim.jpg`,
    `./img/nao.jpg`,
]

var resposta = ["Você é TOP!", "Num tem vergonha de responder isso não, mané?!"]


function gostaDeHP() {
    document.getElementById('imagem').src = imagens[0];
    document.getElementById('texto').innerHTML = resposta[0];
}

function naoGostaDeHP() {
    document.getElementById('imagem').src = imagens[1];
    document.getElementById('texto').innerHTML = resposta[1];
}