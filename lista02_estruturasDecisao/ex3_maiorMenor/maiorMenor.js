var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)
let media = (n1+n2)/2

function calcule(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let resultado = (n1 > n2) ? "N1 é maior" :
        (n2 > n1) ? "N2 é maior" : "N1 e N2 são iguais"

    document.getElementById("result").innerHTML= resultado
}