var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)

function calcule(){
    let n1 = Number(document.getElementById("n1").value)
    let resultado = 1
    let cont = 2

    if(n1 <= 0){
        resultado = "Informe numero positivo"
    } else{
        while (cont <= n1) {
            resultado *= cont
            cont++
        }
    }   
    document.getElementById("result").innerHTML = resultado
}
