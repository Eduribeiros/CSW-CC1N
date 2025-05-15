document.write("<h2>Olá Mundo! Esse é meu primeiro programa JavaScript</h2> <br>");

document.write("Olá Mundo! Eu adoro Aula de JavaScript <br>");

/*window.alert("<h2>Olá Mundo! Prof. Fabricio é o Melhor</h2> <br>");*/

document.getElementById('Subtitulo').innerHTML = 'Resposta de saída: Olá Mundo'

/*document.getElementById("Resposta").innerHTML = window.confirm("Esta Gostando do curso");*/

document.getElementById("Resposta").innerHTML = "O Nome Digitado Foi: " + window.prompt("Qual é o seu nome?")

function abrePagina() {
    window.open("index2.html", "_blank");
}
function exibenome()
{
    window.alert("Nome digitado foi: " + document.getElementById ("nome").value);
}