var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcularQuilometro)

function calcularQuilometro(){
    let n1 = Number(document.getElementById('n1').value)

    let Quilometro = n1 * 1.6

    let result = document.getElementById('result')
    result.innerText = Quilometro
}
