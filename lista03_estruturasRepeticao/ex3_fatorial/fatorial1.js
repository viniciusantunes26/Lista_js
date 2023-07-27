var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',calcule)

function calcule(){
    let n1 = Number(document.getElementById("n1").value)
    let result = 1

    while(n1>=1){
        result = result *n1
        n1--
    }
    document.getElementById("result").innerHTML = result
}