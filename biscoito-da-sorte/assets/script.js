var frases = [
"É muito provável que as coisas não funcionem.",
"Vai dar errado, mas você irá aprender com seu erro",
"Meritocracia é uma das maiores falácias da sociedade. Não acredite nisso.",
"A vida não é justa - e nem você.",
"Você não é do tamanho do seu sonho. Às vezes, ele é maior que você. E tá tudo bem.",
"Felicidade é somente um estado de espírito. Relaxa, ninguém é feliz o tempo todo.",
"Você não precisa continuar fazendo algo que você odeia porque te disseram que é assim que ter que ser.",
"Não vai ficar tudo bem, mas tá tudo bem.",
"Se não te faz bem, não persista.",
"Você não precisa provar nada para ninguém.",
"A maior barreira para o sucesso é a falta de oportunidades que pessoas menos abastadas social e financeiramente possuem ao longo de sua vida.",
"O pessimista vê a dificuldade em cada oportunidade, e tá tudo bem ser assim.",
"Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando. Mas isso não quer dizer que você deve ser um homem infeliz.",
]

console.log('Oie!')

function fraseDaSorte(){
// Essa função será responsável por sortear uma frase do array
    var random = Math.floor(Math.random() *13);
    document.getElementById("paragrafo").innerHTML = frases[random];
}