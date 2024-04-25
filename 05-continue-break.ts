const fruta = ["Pilha", "Maçã", "Pêra", "Pneu", "Carro", "Ônibus"];

for (let item of fruta) {
    if (item === "Maçã") {
        console.log("Maçã encontrada");
        break;
    }

    console.log(item);
    
}

for (let item of fruta) {
    if (item === "Maçã" || item === "Pêra") {
        console.log("Fruta encontrada");
        continue;
    }
    console.log(item);
}