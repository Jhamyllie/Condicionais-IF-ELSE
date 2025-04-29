function somaComAjuste(numx: number, numy: number):number {
    let somz: number = numx + numy
    
    if (somz > 20){
        return somz + 8;
    }else {
        return somz - 5;
    }
}

console.log(somaComAjuste(10,15))
console.log(somaComAjuste(12,7))




/*Se X for 15 e Y for 10:

A soma Z é 15 + 10 = 25.
Como 25 é maior que 20, adicione 8: 25 + 8 = 33.
O algoritmo deve imprimir "33".
Se X for 12 e Y for 7:

A soma Z é 12 + 7 = 19.
Como 19 é menor ou igual a 20, subtraia 5: 19 - 5 = 14.
O algoritmo deve imprimir "14".*/