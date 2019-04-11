function calculador(peso, altura){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta")
    var text;
    var gif;
    var lugarGif = document.getElementById("lugarGif");
    var cssclass;

    var resultado = peso / (altura * altura);

    if(resultado<18){
        text= "Uma deusa!🤤";
        gif=`<img src="https://media.giphy.com/media/Is1O1TWV0LEJi/giphy.gif" alt="">`;
        resposta.innerHTML= resultado.toFixed(2) + ' - ' + text;
        lugarGif.innerHTML= gif;
        cssclass= "linha1";
    }

    else if(resultado >= 18 && resultado < 25) {
        text= "Uma louca!😘";
        gif=`<img src="https://media.giphy.com/media/6wmz6Qo40eTDf4tW3Z/giphy.gif" alt="">`;
        resposta.innerHTML= resultado.toFixed(2) + ' - ' + text;
        lugarGif.innerHTML= gif;
        cssclass="linha2";
    }

    else if(resultado >=25 && resultado <30) {
        text= "Uma feiticeira!👌";
        gif=`<img src="https://media.giphy.com/media/YLgIOmtIMUACY/giphy.gif" alt="">`;
        resposta.innerHTML= resultado.toFixed(2) + ' - ' + text;
        lugarGif.innerHTML= gif;
        cssclass="linha3";
    }

    else if(resultado >=30 && resultado <40) {
        text= "Ela é demais!🤩";
        gif=`<img src="https://media.giphy.com/media/YC6ZedMDgR1Fm/giphy.gif" alt="">`;
        resposta.innerHTML= resultado.toFixed(2) + ' - ' + text;
        lugarGif.innerHTML= gif;
        cssclass="linha4";
    }

    else if (resultado >40) {
        text="Meu Deus, ela é demais!😋";
        gif=`<img src="https://media.giphy.com/media/vgUFOWBwBkziE/giphy.gif" alt="">`;
        resposta.innerHTML= resultado.toFixed(2) + ' - ' + text;
        lugarGif.innerHTML= gif;
        cssclass="linha5";
    }

    else {
        text="Digite seu peso e altura!"
        resposta.innerHTML= text;
    }

    resposta.className=cssclass;
}