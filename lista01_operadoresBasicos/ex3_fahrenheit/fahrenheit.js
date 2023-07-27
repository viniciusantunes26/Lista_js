var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcularTemperatura)

function calcularTemperatura(){
    let n1 = Number(document.getElementById('n1').value)

    let Temperatura = (n1 * 9/5) + 32

    let result = document.getElementById('result')
    result.innerText = Temperatura
}
