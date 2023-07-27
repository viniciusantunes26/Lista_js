var btn = document.getElementById('btnCalcular') //var = variavel Global
btn.addEventListener('click',calcularMedia)

function calcularMedia(){
    let n1 = Number(document.getElementById('n1').value) // let = variavel Local
    let n2 = Number(document.getElementById('n2').value) // Number obriga 

    let media = (n1+n2)/2

    let result = document.getElementById('result')
    result.innerText = media
}