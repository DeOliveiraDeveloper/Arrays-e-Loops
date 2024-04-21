const paises = ["Brasil", "EUA", "Portugal", "Suiça", "Luxenburgo"];

paises[paises.length] = "Canadá";

console.log(paises);

paises[5] = "Argentina";

console.log(paises);

let i = paises.length - 1;

console.log(paises[i]);

console.log(paises[1]);

console.log(paises[2]);