const user = ["Pedro", "Thiago", "João", "No", "Barquinho"];

for (let encontrar of user) {
    if (encontrar === "João") {
        console.log("Encontrado");
        break;
    } else {
        console.log("Não encontrado");
    }
}