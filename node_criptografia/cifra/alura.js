const senhaSecreta = "alura";

function cifrarMensagem (mensagem, movimentos){
 const mensagemCifrada = mensagem.split('').map((caractere) => {
 const codigoCaractere = caractere.charCodeAt(0);
 return String.fromCharCode(codigoCaractere + movimentos)
})
 return mensagemCifrada.join("")
}

const mensagemCifrada = cifrarMensagem(senhaSecreta, 4);

console.log(mensagemCifrada)

/*
Para decifrar a senha cifra de Cesar é utilizando 

A B C D E F G H I J K  L  M
0 1 2 3 4 5 6 7 8 9 10 11 12 

N  O  P  Q  R  S  T  U  V  W  X  Y  Z
13 14 15 16 17 18 19 20 21 22 23 24 25

se no caso a (senhaSecreta, 4) e a sennha secreta é "alura"
epyve
*/