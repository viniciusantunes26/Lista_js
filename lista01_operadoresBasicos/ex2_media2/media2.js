var btn = document.getElementById('btnCalcular') //var = variavel Global
btn.addEventListener('click',calcularMedia)

function calcularMedia(){
    let n1 = Number(document.getElementById('n1').value) // let = variavel Local
    let n2 = Number(document.getElementById('n2').value) // Number obriga o que for escrito na caixa de texto retornar numero

    let media = Math.round(((n1*1)+(n2*2))/3*100)/100;
    media = (media > 10)? 10: media

    let result = document.getElementById('result')
    result.innerText = media
}