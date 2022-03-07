let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("crianças");
let inputDuraçao = document.getElementById("duraçao");

let resultado = document.getElementById ("resultado");
 
function calcular(){
    console.log("calculando...")
    
    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duraçao = inputDuraçao. value;
  
    let qdtTotalCarne = carnePP(duraçao) * adultos + (carnePP(duraçao) / 2 * crianças);
    let qdtTotalCerveja = cervejaPP(duraçao) * adultos;
    let qdtTotalBebidas = bebidasPP(duraçao) * adultos + (bebidasPP(duraçao) / 2 * crianças);
    
    resultado.innerHTML = `<p>${qdtTotalCarne /1000}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)}latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)}Garrafas de bebidas</p>`

 }

 function carnePP(duraçao){
     if (duraçao >= 6 ) {
         return 650;
     }else {
         return 400 ;
     }
 }
 function cervejaPP(duraçao){
    if (duraçao >= 6 ) {
        return 2000;
    }else {
        return 1200 ; }
 }
 function bebidasPP (duraçao){
     if (duraçao >= 6){
         return 1500;
    }else{
        return 1000;
    }
 }