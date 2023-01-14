const calcular = document.querySelector('#calcular')

calcular.addEventListener('click',calacularD);
calcular.addEventListener('touch',calacularD);


function calacularD(){
const C = parseFloat(document.querySelector('#celsos').value) 
console.log(C)

if(C != ""){
   const temperatura = (9*C/5) + 32 ;


   resultado.innerHTML = `temperatura:${temperatura}`
}
}