var numeroSorteado = null;

btnSortear = document.getElementById("btnSortear").onclick = sortear;
btnSortear = document.getElementById("btnTentativa").onclick = realizarTentativa;
divNumeroSorteado = document.getElementById("div-numero-sorteado");
iptTentativa = document.getElementById("iptTentativa");

function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let numeroAleatorio = Math.random();

    numeroSorteado = min + Math.trunc(dif * numeroAleatorio);
    divNumeroSorteado.innerText = "\?";
    console.log(numeroSorteado);
}

function realizarTentativa() {
    let resposta = Number(iptTentativa.value);

    console.log(resposta);

    if (resposta == null || resposta == 0) {
        alert("Digite um número de 1 a 1000");
        return;
    }

    if (numeroSorteado == resposta) {
        alert("Você acertou! O número sorteado foi " + numeroSorteado);
    }

    if (numeroSorteado > resposta) {
        alert("O número sorteado é maior.");
    }

    if (numeroSorteado < resposta) {
        alert("O número sorteado é menor.");
    }
}