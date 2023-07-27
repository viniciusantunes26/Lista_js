var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcularPolegada)

function calcularPolegada(){
    let n1 = Number(document.getElementById('n1').value)

    let Polegada = n1 * 2.54

    let result = document.getElementById('result')
    result.innerText = Polegada
}
