const palavra = "Aprenda a suportar o desconforto e a fadiga sem queixar-se e seja moderado em suas necessidades."

let total = 0

for (let contagem of palavra) {
    if (contagem === "a" || contagem === "A") {
        total += 1;
    }
    
} console.log(total);
