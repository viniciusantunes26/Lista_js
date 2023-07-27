var btn = document.getElementById('btnCalcular')
btn.addEventListener('click',chamar)

function chamar(){
let n1 = Number(document.getElementById("n1").value)
let result = document.getElementById("result")
result.innerText = fatorial(n1)
}
function fatorial(n){
    if(n == 1)
        return 1
   return n*fatorial(n-1)
}