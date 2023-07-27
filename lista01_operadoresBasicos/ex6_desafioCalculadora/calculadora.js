var btnSomar = document.getElementById('btnSomar') //var = variavel Global
btnSomar.addEventListener('click',somar)

function somar(){
    let n1 = Number(document.getElementById('n1').value) // let = variavel Local
    let n2 = Number(document.getElementById('n2').value) // Number obriga 

    let soma = n1 + n2

    let result = document.getElementById('result')
    result.innerText = soma
}

var btnSub = document.getElementById('btnSub') //var = variavel Global
btnSub.addEventListener('click',subtrair)

function subtrair(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let resultado = n1-n2

    let result = document.getElementById("result").innerText = resultado
}

var btnMult = document.getElementById("btnMult")
btnMult.addEventListener('click', multiplicar)

function multiplicar(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let resultado = n1 * n2

    let result = document.getElementById("result").innerText = resultado
}

var btnDiv = document.getElementById("btnDiv")
btnDiv.addEventListener('click', divisao)

function divisao(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let resultado = n1 / n2

    let result = document.getElementById("result").innerText = resultado
}

