function identificarIdade() {
    const idade =
        Number(document.getElementById("idade").value);
    let resultado = "";
    if (idade < 0) {
        resultado = "idade inválida";
    }
    else if (idade === 0) {
        resultado = "Recém-nascido"
    }
    else if (idade > 0 && idade < 10) {
        resultado = "Criança"
    }
    else if (idade > 9 && idade < 16) {
        resultado = "Adolescente"
    }
    else if (idade > 15 && idade < 25) {
        resultado = "Jovem"
    }
    else if (idade > 24 && idade < 60) {
        resultado = "Adulto"
    }
    else if (idade > 60) {
        resultado = "Idoso"
    }

    else { resultado = "Inválido" }

    document.getElementById("resultado").innerText = resultado;
}