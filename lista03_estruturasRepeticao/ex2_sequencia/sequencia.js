var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)
let media = (n1+n2)/2

function calcule(){

    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let resultado = " "

    while (n1 < n2) {
        resultado += n1 + " - "
        n1++        
    }
    resultado+= n2
    document.getElementById("result").innerHTML = resultado
}
