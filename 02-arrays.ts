const fruta = ["banana", "Maçã", "Pêra", "Abacaxi"];

console.log(fruta.length); //.length mostra o tamanho do array

fruta[4] = "Uva";

console.log(fruta.length);

//para verificar qual é o ultimo elemento de um Array é só colocar o .length -1.

console.log(fruta[fruta.length - 1]);

//ou também posso colocar dentro de uma variavel

let i = fruta.length - 1

console.log(fruta[i]);

//para adicionar um valor ao final do array

fruta[fruta.length] = "Manga"