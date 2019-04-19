// MINHAS VARIÁVEIS
let resposta = document.querySelector('#conteudoResposta')
let opcoesDeAcao = ["pedra", "papel", "tesoura", "lagarto", "spock"]
let cliqueBotao = document.querySelector('#corpoBtn')
let cliqueCorpo = document.querySelector('#inputCorpo')
let reiniciarBtn = document.querySelector('#reiniciarBtn')
let cliqueNome = document.querySelector('#nomeBtn')
let placarMaquina = document.getElementById('pontoPc')
let placarJogador = document.getElementById('pontoUsuario');
let countMaquina = 0;
let countJogador = 0;

// INÍCIO -- COM PLACAR ESCONDIDO
document.querySelector(`#adicionais`).style.display = "none"


// FUNÇÃO PRINCIPAL -- PEGA NOME E A DECISÃO DO USUÁRIO
cliqueNome.addEventListener('click', function () {
    // PEGA NOME E COLOCA EM MAIÚSCULA
    let inserirNome = document.querySelector(`#inputNome`).value.charAt(0).toUpperCase() + document.querySelector(`#inputNome`).value.slice(1);

    if (inserirNome == undefined || inserirNome == "") {
        alert("Por favor, insira seu nome!")
    }

    else {
        // MOSTRA DIV CORPO
        document.querySelector(`.corpo-div`).style.display = "block"
        // ESCONDE DIV NOME
        document.querySelector(`.nome-div`).style.display = "none"
        // MOSTRA PLACAR
        document.querySelector(`#adicionais`).style.display="flex"
        document.getElementById('placarUsuario').innerHTML = inserirNome
        // FUNÇÃO QUE EXECUTA AO CLICAR NO BOTÃO DA DIV CORPO
        cliqueBotao.addEventListener('click', function () {
            // RANDOMIZA RESPOSTA DO COMPUTADOR
            let randomPc = opcoesDeAcao[Math.floor(Math.random() * opcoesDeAcao.length)];
            // TRANFORMA RESPOSTA DO USUÁRIO EM MINÚSCULA
            let inputDoUsuario = document.querySelector('#inputCorpo').value.toLowerCase();
            // POSSÍVEIS OPÇÕES DO USUÁRIO (COM AS POSSÍVEIS OPÇÕES DO COMPUTADOR)
            
            switch (inputDoUsuario) {
                case 'pedra':
                    if (randomPc == 'lagarto' || randomPc == 'tesoura') {
                        document.querySelector('#conteudoResposta').innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". " + inserirNome + " venceu!";
                        countJogador =  countJogador + 1;
                        placarJogador.innerHTML = countJogador;
                    }

                    else if (randomPc == 'spock' || randomPc == 'papel') {
                        document.querySelector('#conteudoResposta').innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". A máquina venceu!"
                        countMaquina =  countMaquina + 1;
                        placarMaquina.innerHTML = countMaquina;
                    }

                    else {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". É um empate!";
                    }
                    break;

                case 'papel':
                    if (randomPc == 'spock' || randomPc == 'pedra') {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". " + inserirNome + " venceu!";
                        countJogador =  countJogador + 1;
                        placarJogador.innerHTML = countJogador;
                    }

                    else if (randomPc == 'lagarto' || randomPc == 'tesoura') {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". A máquina venceu!";
                        countMaquina =  countMaquina + 1;
                        placarMaquina.innerHTML = countMaquina;
                    }

                    else {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". É um empate!";
                    }
                    break;

                case 'tesoura':
                    if (randomPc == 'papel' || randomPc == 'lagarto') {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". " + inserirNome + " venceu!";
                        countJogador =  countJogador + 1;
                        placarJogador.innerHTML = countJogador;
                    }

                    else if (randomPc == 'pedra' || randomPc == 'spock') {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". A máquina venceu!";
                        countMaquina =  countMaquina + 1;
                        placarMaquina.innerHTML = countMaquina;
                    }

                    else {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". É um empate!";
                    }
                    break;

                case 'lagarto':
                    if (randomPc == 'papel' || randomPc == 'spock') {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". " + inserirNome + " venceu!";
                        countJogador =  countJogador + 1;
                        placarJogador.innerHTML = countJogador;
                    }

                    else if (randomPc == 'tesoura' || randomPc == 'pedra') {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". A máquina venceu!";
                        countMaquina =  countMaquina + 1;
                        placarMaquina.innerHTML = countMaquina;
                    }

                    else {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". É um empate!";
                    }
                    break;

                case 'spock':
                    if (randomPc == 'tesoura' || randomPc == 'pedra') {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". " + inserirNome + " venceu!";
                        countJogador =  countJogador + 1;
                        placarJogador.innerHTML = countJogador;
                    }

                    else if (randomPc == 'lagarto' || randomPc == 'papel') {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". A máquina venceu!";
                        countMaquina =  countMaquina + 1;
                        placarMaquina.innerHTML = countMaquina;
                    }

                    else {
                        document.querySelector(`#conteudoResposta`).innerHTML = inserirNome + " escolheu " + inputDoUsuario + " e o computador escolheu " + randomPc + ". É um empate!";
                    }
                    break;

                default:
                    alert('Digite alguma das opções válidas!')
                    break;
            }
        }
        )
    }
})

// BOTÃO PARA REINICIAR A TEXTBOX E A RESPOSTA
reiniciarBtn.addEventListener('click', function () {
    document.querySelector(`#inputCorpo`).value = "";
    document.querySelector(`#conteudoResposta`).innerHTML = "";
})

// FUNÇÃO PARA SAIR A RESPOSTA QUANDO CLICAR NO INPUT
cliqueCorpo.addEventListener('click', function () {
    document.querySelector(`#conteudoResposta`).innerHTML = "";
});
