var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)
let media = (n1+n2)/2

function calcule(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)

    let resultado

    if(n2 % n1==0){
        resultado = "N1 é multiplo de N2"
    } else{
        resultado = "N1 não é multiplo de N2"
    }
    document.getElementById("result").innerHTML = resultado

}
