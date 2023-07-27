var btn = document.getElementById('btnCalcular') //var = variavel Global
btn.addEventListener('click',calcularMedia)
let media = (n1+n2)/2

function calcularMedia(){
    let n1 = Number(document.getElementById('n1').value) // let = variavel Local
    let n2 = Number(document.getElementById('n2').value) // Number obriga 
    let media = (n1+n2)/2
    let resultado


    if(media > 6 ){
        resultado = media + "-" + "Aprovado"
    }
    else if (media >= 5){
        resultado = media + "-" + "Recuperação"
    }
    else{
        resultado = media + "-" + "Reprovado"
    }

    let result = document.getElementById("result")
    result.innerText = resultado
}